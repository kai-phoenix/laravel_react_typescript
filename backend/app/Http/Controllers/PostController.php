<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    // 全投稿を取得
    public function index()
    {
        return response()->json(Post::all());;
    }

    // public function create()
    // {
    //     //
    // }

    // 新しい投稿を作成
    public function store(Request $request)
    {
        $posts=Post::create($request->all());
        return response()->json($posts,201);
    }

    // 指定した投稿を取得
    public function show(string $id)
    {
        return Post::findOrFail($id);
    }

    // public function edit(string $id)
    // {
    //     //
    // }

    // 指定した投稿を更新
    public function update(Request $request, string $id)
    {
        $posts=Post::findOrFail($id);
        $posts->update($request->all());
        return response()->json($posts);
    }

    // 指定した投稿を破棄
    public function destroy(string $id)
    {
        Post::destroy($id);
        return response()->json(null,204);
    }
}
