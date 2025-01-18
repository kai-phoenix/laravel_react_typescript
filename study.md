# フロントエンド

npx create-react-app frontend --template typescript

で./frontendにreact,typescriptプロジェクトを作成しようと思ったが
create-react-appがメンテ終了していたため、単純なreactを使用したいとの思いからViteを使って以下のコマンドでtypescript付きのテンプレートを導入することに

npm create vite@latest frontend -- --template react-ts

を実行するとOk to proceed?と聞かれるのでy,
次にSelect a framework,Select a variantと聞かれるのでReact,Typescriptを選択

frontendディレクトリに依存関係をインストール

npm install

HTTPリクエスト、ルーティングを可能にするライブラリをインストール

npm install axios react-router-dom

動作させるにはfrontendディレクトリで

npm run dev

を実行

# バックエンド

composer create-project laravel/laravel backend --prefer-dist

で./backendにlaravelプロジェクトを作成

動作しないようなら依存関係を以下コマンドでインストール

composer install

php artisan make:model Post

でPostモデルを作成

php artisan make:migration create_posts_table --create=posts

でPostsテーブルを作成

php artisan make:controller PostController --resource

でPostControllerを作成

php artisan migrate

でテーブルを作成

api.phpがなかったため

php artisan install:api

を実行しAPIトークン認証ガードのLaravel Sanctumをインストール

api.phpに/postsへのルーティングを記述

api/postsがjsonを返すことがわかったのでPostテーブルに手動でデータ追加

php artisan tinker
\App\Models\Post::create(['title' => 'Sample Post', 'content' => 'This is a sample.']);

api/postsにて以下のjsonが返ることを確認

```
[{"id":1,"title":"Sample Post","content":"This is a sample.","completed":0,"created_at":"2025-01-18T06:20:44.000000Z","updated_at":"2025-01-18T06:20:44.000000Z"}]
```

フロント側からバックエンド側へ通信を許可する設定をconfig/cors.phpに追加
Laravel7以降はHandleCorsに設定されているが学習のために作ることに

php artisan config:publish cors

Laravel11は過去のものと設定が大幅変更されていることをここで知る
https://zenn.dev/pcs_engineer/articles/laravel11-faq

app/Http/Kernel.phpからbootstrap/app.phpに変わったため、middlewareを記述


動作させるにはbackendディレクトリで

php artisan serve

を実行

# 知識整理

## reactインストールコマンドについて

インストール画面で以下のライブラリインストールコマンドを実行

npm install axios react-router-dom

### axios

目的
ReactがHTTPリクエストを送付可能にするため
用途
Reactアプリから外部へデータを送信(POST)したり、
リクエストして受けとったり(GET)する

### react-router-dom

目的
Reactでルーティング(ページ遷移)を実現し、URLごとに異なるコンポーネントを表示するため
用途
異なるURL(/home,/about)へアクセスした時、対応するコンポーネントをレンダリング
