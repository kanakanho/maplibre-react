import type { SourceProps } from '@vis.gl/react-maplibre'
import { Layer, Source } from '@vis.gl/react-maplibre'

export default function TilesSource() {
  const tilesSource: SourceProps = {
    id: '3d-tiles',
    type: '3d-tiles',
    tiles: ['http://localhost:5174/3dtiles/tileset.json'],
    attribution: '<a href=\'https://www.mlit.go.jp/plateau/\'>国土交通省 Project PLATEAU</a>',
  }

  return (
    <Source
      {...tilesSource}
    >
      <Layer
        type="fill-extrusion"
        source="3d-tiles"
        source-layer="bldg"
        paint={{
        // 高さ
          'fill-extrusion-height': ['*', ['get', 'z'], 1],
          // 塗りつぶしの色
          'fill-extrusion-color': '#797979',
          // 透明度
          'fill-extrusion-opacity': 0.7,
        }}
      />
    </Source>
  )
}
