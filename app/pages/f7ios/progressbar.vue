<template>
  <div data-page="progressbar" class="page kitchen-sink-ios">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left sliding"><a class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>
        <div class="center sliding">Progress Bar</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <p>In addition to <a href="/f7ios/preloader/">Preloader</a>, Framework7 also comes with fancy animated determinate and infinite/indeterminate progress bars to indicate some activity.</p>
      </div>
      <div class="content-block-title">Determinate Progress Bar</div>
      <div class="content-block">
        <div class="content-block-inner">
          <p>When progress bar is determinate it indicates how long an operation will take when the percentage complete is detectable.</p>
          <p>Inline determinate progress bar:</p>
          <div class="ks-demo-progressbar-inline">
            <p><span data-progress="10" class="progressbar"></span></p>
            <p class="buttons-row"><a href="#" data-progress="10" class="button">10%</a><a href="#" data-progress="30" class="button">30%</a><a href="#" data-progress="50" class="button">50%</a><a href="#" data-progress="100" class="button">100%</a></p>
          </div>
          <p>Inline determinate load &amp; hide:</p>
          <div class="ks-demo-progressbar-load-hide">
            <p style="height:2px"></p>
            <p><a href="#" class="button">Start Loading</a></p>
          </div>
          <p>Overlay with determinate progress bar on top of the app:</p>
          <p class="ks-demo-progressbar-overlay"><a href="#" class="button">Start Loading</a></p>
        </div>
      </div>
      <div class="content-block-title">Infinite Progress Bar</div>
      <div class="content-block">
        <div class="content-block-inner">
          <p>When progress bar is infinite/indeterminate it requests that the user wait while something finishes when it’s not necessary to indicate how long it will take.</p>
          <p>Inline infinite progress bar</p>
          <p><span class="progressbar-infinite"></span></p>
          <p>Multi-color infinite progress bar</p>
          <p><span class="progressbar-infinite color-multi"></span></p>
          <p>Overlay with infinite progress bar on top of the app</p>
          <p class="ks-demo-progressbar-infinite-overlay"><a href="#" class="button">Start Loading</a></p>
          <p>Overlay with infinite multi-color progress bar on top of the app</p>
          <p class="ks-demo-progressbar-infinite-multi-overlay"><a href="#" class="button">Start Loading</a></p>
        </div>
      </div>
      <div class="content-block-title">Colored</div>
      <div class="list-block">
        <ul>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="10" class="progressbar color-blue"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="20" class="progressbar color-orange"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="30" class="progressbar color-red"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="40" class="progressbar color-pink"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="50" class="progressbar color-green"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="60" class="progressbar color-lightblue"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="70" class="progressbar color-yellow"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="80" class="progressbar color-gray"></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div data-progress="90" class="progressbar color-black"></div>
            </div>
          </li>
          <li style="background-color: #999" class="item-content">
            <div class="item-inner">
              <div data-progress="95" class="progressbar color-white"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
