<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\V1\Auth\RegisterRequest;
use App\Http\Requests\V1\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    /**
     * Handle an registration.
     *
     * @param  RegisterRequest $request
     *
     * @return ResponseJson
     */
    public function register(RegisterRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::once($credentials))
        {
            $credentials['password'] = bcrypt($credentials['password']);
            $user = User::create($credentials);
            return response()->json(['message' => 'User registered successfully'], 200);
        }
        return response()->json(['message' => 'Email is not available.'], 422);
    }

    /**
     * Handle an authentication user.
     *
     * @param LoginRequest $request
     *
     * @return ResponseJson
     */
    public function login(LoginRequest $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
}
