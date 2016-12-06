<!doctype html>
<!--[if gt IE 8]><!-->
<html class="no-js" ng-app="app.music"> <!--<![endif]-->
<head>
  <base href="/angular-media-player-app/public/">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Groovy - AngularJS theme</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,700,600,400'
        rel='stylesheet' type='text/css'>

  <!-- Include Jquery in the vendor folder -->
  <script src="dist/js/jquery.min.js"></script>

  <!-- Theme's own CSS file -->
  <link rel="stylesheet" href="dist/css/font-awesome.min.css">
  <link rel="stylesheet" href="dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="dist/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="dist/css/main.css">
  <link rel="stylesheet" href="dist/css/music.css">

</head>
<noscript>
  <META HTTP-EQUIV="Refresh" CONTENT="0;URL=no-js.html">
</noscript>
<body id="app" custom-background="" off-canvas-nav="">
  <div ui-view></div>
<!--Uncomment for deployment using Grunt-->
<script type="text/javascript" src="dist/js/app.js"></script>

<script type="text/javascript" src="app/music/app.module.js"></script>
<script type="text/javascript" src="app/music/app.config.js"></script>
<script type="text/javascript" src="app/music/app.factory.js"></script>

<script type="text/javascript" src="app/music/layout/layout.controller.js"></script>
<script type="text/javascript" src="app/music/layout/navigation.controller.js"></script>
<script type="text/javascript" src="app/music/layout/action.controller.js"></script>
<script type="text/javascript" src="app/music/layout/navigation.factory.js"></script>
<script type="text/javascript" src="app/music/layout/action.controller.js"></script>

<script type="text/javascript" src="app/music/dashboards/dashboard.route.js"></script>

<!-- Albums -->
<script type="text/javascript" src="app/music/albums/albums.route.js"></script>
<script type="text/javascript" src="app/music/albums/albums.controller.js"></script>
<script type="text/javascript" src="app/music/albums/albums.factory.js"></script>

<!-- Genres -->
<script type="text/javascript" src="app/music/genres/genres.route.js"></script>
<script type="text/javascript" src="app/music/genres/genres.controller.js"></script>
<script type="text/javascript" src="app/music/genres/genres.factory.js"></script>

<!-- Playlist -->
<script type="text/javascript" src="app/music/playlist/playlist.route.js"></script>
<script type="text/javascript" src="app/music/playlist/playlist.controller.js"></script>
<script type="text/javascript" src="app/music/playlist/playlist.factory.js"></script>
<script type="text/javascript" src="app/music/playlist/create-playlist.factory.js"></script>
<script type="text/javascript" src="app/music/playlist/create-playlist.controller.js"></script>


<!-- Artist -->
<script type="text/javascript" src="app/music/artists/artists.route.js"></script>
<script type="text/javascript" src="app/music/artists/artists.controller.js"></script>
<script type="text/javascript" src="app/music/artists/artist.controller.js"></script>
<script type="text/javascript" src="app/music/artists/artists.factory.js"></script>
<script type="text/javascript" src="app/music/artists/artist.factory.js"></script>

<!-- Shared -->
<script type="text/javascript" src="app/music/shared/loggit.factory.js"></script>
<script type="text/javascript" src="app/music/shared/highlight-active.directive.js"></script>

<!-- Components -->
<script type="text/javascript" src="app/components/lyric-dialog/lyric-dialog.component.js"></script>
</body>
</html>