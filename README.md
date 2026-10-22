# 羽根木動物病院グループ 獣医師採用サイト

獣医師(中途)の採用サイトです。ビルドなしの静的HTMLなので、GitHub Pages などにそのまま置けます。

## ページ

| ファイル | 内容 |
| --- | --- |
| `index.html` | 共通トップ。グループの数字と、2つの病院の入口 |
| `hanegi.html` | 本院(臨床の深さ。墨と金) |
| `cat.html` | キャットクリニック世田谷(猫専門・FIP。緑灰、`body.theme-cat`) |
| `work.html` | 働き方と、働く場所と街(3院の地図) |
| `jobs.html` | 募集要項・給与表・勤務地(`jobs.html#cat` で院のタブを開ける) |
| `entry.html` | 見学・応募、新卒・学生の見学とインターン |

共通の見た目は `assets/style.css`、メニューとタブは `assets/site.js`。

## 仮置きの探し方

- 写真の仮置き: `class="ph"`(撮影がすんだら `<img>` に差し替える)
- 文章の仮置き: `class="todo"`(画面に「準備中」と出る)

公開前に `grep -n 'class="todo"\|class="ph' *.html` で残りがないか確認する。

## ローカルで見る

```sh
python3 -m http.server 8000
```

## 正式公開のときに外すもの

準備中のあいだは検索に出さないようにしている。正式公開のときに次の2つを外す。

- 各ページの `<meta name="robots" content="noindex, nofollow">`
- `_headers` の `X-Robots-Tag: noindex, nofollow`(Cloudflare Pages が全ページに付けるHTTPヘッダー)
