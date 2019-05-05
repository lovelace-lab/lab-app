# ラボアプリ

## 準備

パッケージをインストールする

### npm派

```sh
$ git clone ...
$ cd labo-app
$ npm i
```

### yarn派

```sh
$ git clone ...
$ cd labo-app
$ yarn
```

## 起動



```sh
$ npm start
or
$ yarn start
```

## テスト

watchモードでユニットテストが行われる。ファイルを変更したら自動でテストが再度走る。

```sh
$ npm test
or
$ yarn test
```

## ビルド

```sh
$ npm run build
or
$ yarn build
```
## 構造の説明

* src/
  - src/adapters - interface adapter層
  - src/components - React Component
  - src/domains - Use Case層
  - src/domains/entity - entity層
