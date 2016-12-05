<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Http\Requests;

class Api extends Controller
{
    public function artists() {
        //echo file_get_contents( str_replace('\\', '/', public_path('app/data/artists.json')) );

        $artists = DB::table('smc_artists')
            ->join('smc_artist_genre', 'smc_artists.artist_id', '=', 'smc_artist_genre.artist_id')
            ->join('smc_genres', 'smc_artist_genre.genre_id', '=', 'smc_genres.genre_id')
            ->select('smc_artists.*', DB::raw('GROUP_CONCAT(smc_genres.`name`) AS genre'))
            ->groupBy('smc_artists.artist_id')
            ->get();
        $data = array();
        foreach ($artists as $key => $artist) {
            $data[] = array(
                "url_name" => $artist->name,
                "name" => $artist->name,
                "image" => "dist/images/artists/" . $artist->image,
                "genre" => explode(',', $artist->genre),
                "about" => $artist->about
            );
        }

        echo json_encode($data);
    }

    public function artistsMusic() {
        //echo file_get_contents( str_replace('\\', '/', public_path('app/data/artistsMusic.json')) );

        $albums = DB::table('smc_albums')
            ->join('smc_artists', 'smc_albums.artist_id', '=', 'smc_artists.artist_id')
            ->join('smc_artist_genre', 'smc_artists.artist_id', '=', 'smc_artist_genre.artist_id')
            ->join('smc_genres', 'smc_artist_genre.genre_id', '=', 'smc_genres.genre_id')
            ->select('smc_albums.*', DB::raw('GROUP_CONCAT(smc_genres.`name`) AS genre'), DB::raw('smc_artists.`name` AS artists_name'))
            ->groupBy('smc_albums.album_id')
            ->get();

        $data = array();
        
        foreach ($albums as $key => $album) {
            $data[] = array(
                "url_name": "thelunatics",
                "name": "The lunatics",
                "banner": "dist/images/artists/artistbanner1.jpg",
                "image": "dist/images/artists/artist1.jpg",
                "genre": ["Pop","Rock","Folk"],
                "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding",
                "albums": [
                    {
                        "album_name":"The king of Freedom",
                        "album_image":"dist/images/albums/album1.jpg",
                        "album_release":"April 2010",
                        "songs": [
                            {
                                "image": "dist/images/songs/song1.jpg", 
                                "url": "http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3", 
                                "displayName": "The lunatics - Come Together", 
                                "type": "audio/mpeg" 
                            }
                        ]
                    }
                ]
            );
        }
    }

    public function albums() {
        //echo file_get_contents( str_replace('\\', '/', public_path('app/data/albums.json')) );

        $albums = DB::table('smc_albums')
            ->join('smc_artists', 'smc_albums.artist_id', '=', 'smc_artists.artist_id')
            ->join('smc_artist_genre', 'smc_artists.artist_id', '=', 'smc_artist_genre.artist_id')
            ->join('smc_genres', 'smc_artist_genre.genre_id', '=', 'smc_genres.genre_id')
            ->select('smc_albums.*', DB::raw('GROUP_CONCAT(smc_genres.`name`) AS genre'), DB::raw('smc_artists.`name` AS artists_name'))
            ->groupBy('smc_albums.album_id')
            ->get();
        $data = array();
        foreach ($albums as $key => $album) {
            $data[] = array(
                "url_name" => $album->name,
                "artist" => $album->artists_name,
                "name" => $album->name,
                "image" => "dist/images/albums/" . $album->image,
                "genre" => explode(',', $album->genre)
            );
        }

        echo json_encode($data);
    }

    public function genres() {
        //echo file_get_contents( str_replace('\\', '/', public_path('app/data/genres.json')) );

        $genres = DB::table('smc_genres')->get();
        $data = array();
        foreach ($genres as $key => $genre) {
            $data[] = array(
                "url_name" => $genre->name,
                "name" => $genre->name,
                "icon" => "musicicon-acoustic4",
                "image" => "dist/images/genres/" . $genre->image
            );
        }

        echo json_encode($data);
    }
}
