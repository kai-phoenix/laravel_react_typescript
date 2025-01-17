<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 全リソースを一覧表示
Route::get('posts',[PostController::class,'index']);
// 新規リソースの作成
Route::post('posts',[PostController::class,'store']);
// 単一のリソースの取得
Route::get('posts/{posts}',[PostController::class,'show']);
// 既存リソースを更新
Route::put('posts/{posts}',[PostController::class,'update']);
// リソースを削除
Route::delete('posts',[PostController::class,'destroy']);
/*一つで書きたい場合は以下のように書く
Route::apiResource('posts',PostController::class); */
