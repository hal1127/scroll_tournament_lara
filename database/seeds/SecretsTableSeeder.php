<?php

use App\Secret;
use Illuminate\Database\Seeder;

class SecretsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'count' => 0,
        ];

        for ($i = 0; $i < 3; $i++) {
            Secret::create($param);
        }
    }
}
