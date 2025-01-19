import type { SourceProps } from '@vis.gl/react-maplibre'
import { Layer, Source } from '@vis.gl/react-maplibre'

export default function PlateauSource() {
  const plateauSourceProps: SourceProps = {
    id: 'plateau-tiles',
    type: 'vector',
    tiles: [`${import.meta.env.VITE_URL}/mvt/{z}/{x}/{y}.pbf`],
    attribution: '<a href=\'https://www.mlit.go.jp/plateau/\' target=\'_blank\'>© 国土交通省 Project PLATEAU</a>',
    minzoom: 10,
    maxzoom: 16,
  }

  return (
    <Source
      {...plateauSourceProps}
    >

      <Layer
        type="fill-extrusion"
        source="plateau-tiles"
        source-layer="bldg:Building"
        paint={{
          // 透明度
          'fill-extrusion-opacity': 0.9,
          // 塗りつぶしの色
          'fill-extrusion-color': '#ffdddd',
          // 高さ
          'fill-extrusion-height': ['+', ['get', 'measuredHeight'], ['get', 'minHeight']],
          // 底面の高さ
          'fill-extrusion-base': ['-', ['get', 'minHeight'], ['get', 'measuredHeight']],
        }}
      />
      <Layer
        type="fill-extrusion"
        source="plateau-tiles"
        source-layer="tran:Road"
        paint={{
          'fill-extrusion-opacity': 0.7,
          'fill-extrusion-color': '#aa4444',
          'fill-extrusion-height': ['-', ['get', 'minHeight'], 10],
          'fill-extrusion-base': ['-', ['get', 'minHeight'], 10],
        }}
      />

    </Source>
  )
}
