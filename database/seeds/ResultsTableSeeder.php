<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Result;

class ResultsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0; $i < 10; $i++) {
            Result::create([
                'name' => $faker->firstName,
                'score' => rand(10000, 500000)
            ]);
        }
    }
}
