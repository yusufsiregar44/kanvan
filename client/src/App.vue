<template>
  <div id="app">
    <router-view/>
    <footer class="footer has-text-centered" style="height: 70px">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <p>
              <strong class="has-text-weight-semibold">
                Made with <i class="fas fa-heart" style="color:#FF1493"></i> By <a href="https://github.com/yusufsiregar44" style="color:#3273dc">Yusuf Siregar</a>
              </strong>
            </p>
            <p>
              <small>
                <a href="https://github.com/yusufsiregar44/kanvan" style="color:#3273dc">Kanvan</a> and the <a href="https://bulma.io/" style="color:#3273dc">Bulma</a> source code is licensed under <a href="http://opensource.org/licenses/mit-license.php" style="color:#3273dc">MIT</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

$title-color: $white;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
