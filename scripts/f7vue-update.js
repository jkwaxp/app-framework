// Load packages
var path = require('path')
var isThere = require('is-there')
var run = require('child_process').exec
var copy = require('cpx').copySync
var showOnly = require('./show-only.js')
var read = require('read-file').sync
var write = require('write').sync
var pretty = require('pretty')
var json = require('jsonfile')
json.spaces = 2

// Load configuration
var cfg = require('./config.js')
var app = require(cfg.appRoot + 'package.json')

// Framework7-Vue folder exists
var f7vueFolder = path.resolve(cfg.packageRoot, '..', 'Framework7-Vue')

if (isThere(f7vueFolder)) {
  // Build
  showOnly('Framework7-Vue build ongoing ... please wait')
  run('cd "' + f7vueFolder + '" && npm run build', function (err, stdOut, errOut) {
    if (!err) {
      // Dist
      showOnly('Framework7-Vue dist ongoing ... please wait')
      run('cd "' + f7vueFolder + '" && npm run dist', function (err, stdOut, errOut) {
        if (!err) {
          // Copy script
          copy(path.resolve(f7vueFolder, 'dist/framework7-vue.min.js'), cfg.packageRoot + 'libs')
          // Copy kitchen sink
          copy(path.resolve(f7vueFolder, 'kitchen-sink/pages/**/*'), path.resolve(cfg.packageRoot, 'demo-app/pages/f7'))
          // Update kitchen sink list page
          let kitchenSinkIndexPage = read(path.resolve(f7vueFolder, 'kitchen-sink/index.html'), 'utf8')
          let mainView = kitchenSinkIndexPage.match(/<f7-view(.*)main(.*)>([\s\S]*?)<\/f7-view>/)[0]
          let lists = mainView.match(/<f7-list>([\s\S]*?)<\/f7-list>/g)
          lists = lists.join('\r\n')
          lists = lists.replace(/link="\//g, 'link="f7/')
          let page = '<template>' +
                       '<f7-page>' +
                         '<f7-navbar title="Framework7-Vue Showcase" back-link="Back" sliding></f7-navbar>' +
                         lists +
                       '</f7-page>' +
                    '</template>'
          '<script>' +
                       'module.exports = {}' +
                    '</script>'
          page = pretty(page)
          write(path.join(cfg.appRoot, 'pages/f7-showcase.vue'), page)
          // Update kitchen sink special routes
            // Get current special routes without f7 routes
          let specialRoutes = {}
          for (let route in app.specialRoutes) {
            if (route.substr(0, 3) !== 'f7/') {
              specialRoutes[route] = app.specialRoutes[route]
            }
          }
            // Read f7 route page
          let kitchenSinkRoutesPage = read(path.resolve(f7vueFolder, 'kitchen-sink/routes.js'), 'utf8')
            // Search page comonents
          let pageComponents = {}
          let f7PageComponents = kitchenSinkRoutesPage.match(/import (.+) from '\.\/pages\/(.+)\.vue';\r\n/g)
          for (let p = 0; p < f7PageComponents.length; p++) {
            let component = f7PageComponents[p].replace(/import (.+) from '\.\/pages\/(.+)\.vue';\r\n/, '$1')
            let page = f7PageComponents[p].replace(/import (.+) from '\.\/pages\/(.+)\.vue';\r\n/, 'f7/$2')
            pageComponents[component] = page
          }
            // Search routes
          let kitchenSinkRoutes = kitchenSinkRoutesPage.match(/export default \[([\s\S]*?)\]/)[0]
          let f7Routes = kitchenSinkRoutes.match(/path: (.+)(,?)\r\n(.+)component: (.+)(,?)\r\n/g)
          for (let r = 0; r < f7Routes.length; r++) {
            let route = f7Routes[r].replace(/path: '(.+)'(,)?\r\n(.+)component: (.+)(,?)\r\n/, 'f7$1')
            if (route.substr(route.length - 1, 1) === '/') {
              route = route.substr(0, route.length - 1)
            }
            let component = f7Routes[r].replace(/path: (.+)(,?)\r\n(.+)component: (.+)(,?)\r\n/, '$4')
              // Add to special routes
            specialRoutes[route] = pageComponents[component]
          }
            // Update config with new special routes
          app.specialRoutes = specialRoutes
          json.writeFileSync(cfg.appRoot + 'package.json', app)
          // Show message
          showOnly('Newest Framework7-Vue build and kitchen sink files copied to App Framework folder')
        } else {
          showOnly('Error: Framework7-Vue dist failed')
        }
      })
    } else {
      showOnly('Error: Framework7-Vue build failed')
    }
  })
} else {
  showOnly('Error: Framework7-Vue folder not found')
}
