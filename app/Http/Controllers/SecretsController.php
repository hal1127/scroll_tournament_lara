<?php

namespace App\Http\Controllers;

use App\Secret;
use Illuminate\Http\Request;

class SecretsController extends Controller
{
    public function index()
    {
        return Secret::orderBy('id', 'asc')->get();
    }

    public function update(Request $request, $secret)
    {
        $s = Secret::where('id', $secret)->get()[0];
        Secret::where('id', $secret)
                ->update(['count' => $s->count+1]);
    }
}
