<!doctype html>
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Groovy - AngularJS theme</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,700,600,400' rel='stylesheet' type='text/css'>

  <!-- Include Jquery in the vendor folder -->
  <script src="dist/js/jquery.min.js"></script>

  <!-- Theme's own CSS file -->
  <link rel="stylesheet" href="dist/css/font-awesome.min.css">
  <link rel="stylesheet" href="dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="dist/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="dist/css/main.css">
  <link rel="stylesheet" href="styles/custom.css">

</head>
<noscript>
  <META HTTP-EQUIV="Refresh" CONTENT="0;URL=no-js.html">
</noscript>
<body data-ng-app="app" id="app" data-custom-background="" data-off-canvas-nav="" data-ng-controller="AdminAppCtrl">

<div class="" data-ng-controller="PlayListCtrl as generalPlaylist">

  <audio media-player="mediaPlayer" playlist="generalPlaylist.audioPlaylist"></audio>

  <div data-ng-hide="checkIfOwnPage()" data-ng-cloak="" class="no-print">
    <aside data-ng-include=" 'app/views/navigation.html' " id="nav-container"></aside>
  </div>

  <div class="view-container">

    <div data-ng-hide="checkIfOwnPage()" data-ng-cloak="" class="no-print">
      <section data-ng-include=" 'app/views/header.html' " id="header" class="top-header"></section>
    </div>
    <section data-ng-view="" id="content" class="animate-fade-up" ng-class="{fixed:checkIfFixedPage()}"></section>
  </div>

  <div class="player-region" ng-show="mediaPlayer.currentTrack">
    <div>

      <div class="player-control">

        <div class="player-control-bottom">

          <div class="controlling-options">
            <div class="btn" ng-click="mediaPlayer.prev()">
              <i class="fa fa-step-backward"></i>
            </div>
            <div class="btn" ng-click="mediaPlayer.playPause()">
              <i class="fa" ng-class="{ 'fa-pause': mediaPlayer.playing, 'fa-play': !mediaPlayer.playing }"></i>
            </div>
            <div class="btn" ng-click="mediaPlayer.next()">
              <i class="fa fa-step-forward"></i>
            </div>
            <!--<div class="btn btn-noclick">
              <span>currentTrack: <span class="badge">{{ mediaPlayer.currentTrack }}</span></span>
            </div>-->
            <!--<div class="btn btn-noclick">
              <span><i class="fa fa-clock-o"></i>: <span class="badge">{{ mediaPlayer.formatTime }}</span></span>
            </div>-->
            <div class="btn btn-noclick">
              <span><span class="badge">{{ mediaPlayer.volume * 100 | number:0 }}%</span></span>
            </div>
            <div class="btn" ng-click="mediaPlayer.setVolume(mediaPlayer.volume - 0.1)">
              <span><i class="fa fa-volume-down"></i></span>
            </div>
            <div class="btn" ng-click="mediaPlayer.setVolume(mediaPlayer.volume + 0.1)">
              <span><i class="fa fa-volume-up"></i></span>
            </div>
          </div>

          <div class="song-duration">
            <span class="song-duration-beg">{{ mediaPlayer.formatTime }}</span>
            <div class="progress" ng-click="mediaPlayer.seek(mediaPlayer.duration * generalPlaylist.seekPercentage($event))">
              <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" ng-style="{ width: mediaPlayer.currentTime*100/mediaPlayer.duration + '%' }"></div>
            </div>
            <span class="song-duration-end">{{ mediaPlayer.formatDuration }}</span>
          </div>

        </div>

      </div>

    </div>

  </div>
</div>

<div class="page-loading-overlay">
  <div class="loader-2"></div>
</div>

<div class="load_circle_wrapper">

  <div class="loading_spinner">
    <div id="wrap_spinner">
      <div class="loading outer">
        <div class="loading inner"></div>
      </div>
    </div>
  </div>
</div>

<!--Uncomment for deployment using Grunt-->
<script type="text/javascript" src="dist/js/app.js"></script>

<!--Uncomment for deployment without Grunt-->

<!--<script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="scripts/gmap.js"></script>
<script type="text/javascript" src="bower_components/slimScroll/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/angular-animate/angular-animate.min.js"></script>
<script type="text/javascript" src="bower_components/angular-route/angular-route.min.js"></script>
<script type="text/javascript" src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script type="text/javascript" src="bower_components/angular-wizard/dist/angular-wizard.min.js"></script>
<script type="text/javascript" src="bower_components/angular-ui-tree/dist/angular-ui-tree.js"></script>
<script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script type="text/javascript" src="bower_components/angular-media-player/dist/angular-media-player.min.js"></script>
<script type="text/javascript" src="bower_components/underscore/underscore-min.js"></script>
<script type="text/javascript" src="bower_components/jqvmap/dist/jquery.vmap.min.js"></script>
<script type="text/javascript" src="bower_components/html5shiv/dist/html5shiv.min.js"></script>
<script type="text/javascript" src="scripts/angular-dragdrop.js"></script>
<script type="text/javascript" src="scripts/extras.js"></script>
<script type="text/javascript" src="app/app.js"></script>
<script type="text/javascript" src="app/config.js"></script>
<script type="text/javascript" src="app/controllers.js"></script>
<script type="text/javascript" src="app/directives.js"></script>
<script type="text/javascript" src="app/services.js"></script>-->

</body>
</html>
