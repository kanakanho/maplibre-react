# Maplibre Gl JS + React + react-maplibre + PLATEAU

PLATEAU を Maplibre GL JS と React で使うためのサンプルです。

## PLATEAU の MVT 形式への変換

### PLATEAU データの取得

こちらのサイトから任意の市町村のデータをダウンロードしてください。

https://www.mlit.go.jp/plateau/open-data/

> [!CAUTION]
> 今回用いる変換の方法では Rust の環境構築が必要になります。

### PLATEAU GIS Converter のクローン

PLATEAU GIS Converter を使って PLATEAU のデータを MVT 形式に変換します。

```sh
git clone git@github.com:MIERUNE/plateau-gis-converter.git
```

### PLATEAU データの変換

```sh
cargo run --package nusamai --release -- ~/path/to/99999_hoge-shi_city_2023_citygml_1_op/udx/*/*_6697_op.gml --sink mvt --output hoge-shi
```

### public/mvt ディレクトリへの配置

変換した MVT データを public/hoge-shi ディレクトリに配置します。

### mvt データの確認

Python を用いて mvt のデータを確認できます

```sh
$ python -m venv .venv
$ . .venv/bin/activate
$ pip install mapbox_vector_tile
$ python mvt.py hoge-shi
```

### dev サーバーの起動

```sh
$ yarn
$ yarn dev
```
