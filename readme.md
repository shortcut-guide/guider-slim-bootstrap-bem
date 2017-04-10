# 構成

## htmlファイル
- index.slim
- index.html

## ファイル
- js
- css
- img
- includes
    - header.slim
    - footer.slim
    - ***.slim
- asset
    - block
    - element
    - modifier
    - style.scss
    - ***.scss

## 設定ファイル
- gulpfile.js


- includes
| 各セクションパーツ別slimテンプレートパーツ

- asset
| 各BEM構成要素scssファイル
| *BEMについては概要参照

    - style.scss
    | 共通部分

    - ***.scss
    | ページ別独立部分


# 概要

## Block
構成要素。ページ内で何度でもどこでも置くことが出来る独立して動作するもの。
BlockとElementの区切りはアンスコ2個（__）

## Element
Blockに紐付いて定義される。要素内のパーツであり、Block内であれば繰り返し使用できる。
BlockまたはElementとModifierの区切りはハイフン2個（--）

## Modifier
少しだけ違うものを量産するときに用いる。あくまで変更がかかる要素に対して付ける。
ModifierのKeyとValueの区切りはアンスコ1個(_)

BlockやElementを2つ以上の単語で表す時はハイフン1個(-)

### Example
#### Block + Element
.box__ttl


```
<div class="box">
    <div class="box__ttl">タイトル</div>
    <div class="box__txt">テキスト</div>
</div>
```

標準的な使用。本来のElementの使い方そのまま。

#### Block + Modifier
.box_white
```
<div class="box">
    <div class="box_ttl">タイトル</div>
</div>
<div class="box box_white">
    <div class="box_ttl">タイトル</div>
</div>
```

構成要素自体の違いを表現したい場合。
この例でいうと、boxの白背景バージョンとかを拡張してるイメージ。

#### Block + Element + Modifier
.box__alert--big

```
<div class="box">
    <div class="box__alert">標準</div>
    <div class="box__alert box__alert--big">大</div>
    <div class="box__alert box__alert--small">小</div>
</div>
```

Elementのバリエーションをつくる場合。
同じアラートだがサイズの違いを作っている。

#### Block + Element + Element
.box__alert__ttl

```
<div class="box">
    <div class="box__alert">
        <p class="box__alert__ttl">アラートタイトル</p>
        <p class="box__alert__txt">アラートテキスト</p>
    </div>
</div>
```

Elementの中で、さらに細かいパーツが分かれることが考えられる

#### Block + Modifier + Element
.box--white__ttl

<div class="box box--white">
    <div class="box__ttl box--white__ttl">タイトル</div>
</div>
Modifierとして拡張された要素の、パーツとして定義したい場合。
「Block + Element + Modifier」と明確に違うのは、あくまでBlockが親になっている点。
なので同時に.box--whiteが定義されているのが前提となる。

#### Block + Modifier + Modifier
.box_white_big

```
<div class="box">
    <div class="box_ttl_sub">タイトル</div>
</div>
<div class="box box_white_sub">
    <div class="box_ttl_white_sub">タイトル</div>
</div>
<div class="box box_white_big">
    <div class="box_ttl_big">タイトル</div>
</div>
```

拡張された要素をベースに、さらに拡張したパターン。
三次創作みたいな状態。
実際の運用では非常に理解しづらくなるため、Modifierの連結は避けたほうが良さそう。

推奨

```
<div class="box">
    <div class="box__ttl">タイトル</div>
</div>
<div class="box box--white">
    <div class="box__ttl">タイトル</div>
</div>
<div class="box box--whiteBig">
    <div class="box__ttl">タイトル</div>
</div>
```

実際は連結はせずに.box--whiteBigのように別の１バリエーションとして定義した方がわかりやすい。



