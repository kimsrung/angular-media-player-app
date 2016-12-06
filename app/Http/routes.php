<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    // return view('index');
    return Redirect::to('dashboard');
});

Route::get('/{page}', function () {
    return view('index');
});

Route::get('/{path}/{page}', function () {
    return view('index');
});

/* get data */
/*Route::get('/api/data/artists', 'Api@artists');
Route::get('/api/data/artists/music', 'Api@artistsMusic');
Route::get('/api/data/albums', 'Api@albums');
Route::get('/api/data/genres', 'Api@genres');*/

/* save data */


/* update data */