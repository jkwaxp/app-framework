<template>
  <div data-page="preloader" class="page kitchen-sink-material">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"><a class="back link icon-only"><i class="icon icon-back"></i></a></div>
        <div class="center">Preloader</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <p>How about an activity indicator? Framework 7 has a nice one. The F7 preloader is made with SVG and animated with CSS so it can be easily resized. Two options are available: the default is for light background and another one is for dark background.
          The HTML is pretty easy, just add a .preloader class to any element. For the dark background option, also add a .preloader-white class. Here are some examples:</p>
      </div>
      <div class="content-block row ks-preloaders">
        <div class="col-25">Default:<br><span class="preloader"></span></div>
        <div style="background-color: #222; color:#fff" class="col-25">White:<br><span class="preloader preloader-white"></span></div>
        <div class="col-25">Big:<br><span class="preloader ks-preloader-big"></span></div>
        <div style="background-color: #222; color:#fff" class="col-25">White:<br><span class="preloader preloader-white ks-preloader-big"></span></div>
      </div>
      <div class="content-block">
        <p>Preloader also support all default color themes:</p>
        <div class="row ks-preloaders">
          <div class="col-25"><span class="preloader preloader-red"></span></div>
          <div class="col-25"><span class="preloader preloader-green"></span></div>
          <div class="col-25"><span class="preloader preloader-orange"></span></div>
          <div class="col-25"><span class="preloader preloader-blue"></span></div>
        </div>
      </div>
      <div class="content-block">
        <p>With <b>app.showIndicator()</b> you can call small overlay with indicator:</p><a href="#" class="button button-raised demo-indicator">Open small indicator overlay</a>
        <p>With <b>app.showPreloader()</b> you can call modal window with preloader:</p><a href="#" class="button button-raised demo-preloader">Open preloader modal</a>
        <p>With <b>app.showPreloader('My text...')</b> you can call it with custom title:</p><a href="#" class="button button-raised demo-preloader-custom">Open custom preloader</a>
      </div>
    </div>
  </div>
</template>
