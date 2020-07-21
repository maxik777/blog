<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'author_id' => 1,
        'content' => $faker->sentence(50),
        'created_at' => Carbon::now(),
    ];
});
