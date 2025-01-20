import { Layer, Source, type SourceProps } from '@vis.gl/react-maplibre'

export default function PlateauSources() {
  const plateauSources: string[] = [
    'nagoya',
    'toyota',
    'toyohashi',
    'toyokawa',
    'tsushima',
    'nisshin',
    'okazaki',
    'kasugai',
    'anjo',
  ]

  const plateauSourceProps: SourceProps[] = plateauSources.map(cityName => ({
    id: `plateau-tiles-${cityName}`,
    type: 'vector',
    tiles: [`${import.meta.env.VITE_URL}/${cityName}/{z}/{x}/{y}.pbf`],
    attribution: '<a href=\'https://www.mlit.go.jp/plateau/\' target=\'_blank\'>© 国土交通省 Project PLATEAU</a>',
    minzoom: 10,
    maxzoom: 16,
  }))

  return (
    <>
      {plateauSourceProps.map(plateauSourceProps => (
        <Source
          key={plateauSourceProps.id}
          {...plateauSourceProps}
        >
          <Layer
            type="fill-extrusion"
            source={plateauSourceProps.id}
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
            source={plateauSourceProps.id}
            source-layer="tran:Road"
            paint={{
              'fill-extrusion-opacity': 0.7,
              'fill-extrusion-color': '#aa4444',
              'fill-extrusion-height': ['-', ['get', 'minHeight'], 10],
              'fill-extrusion-base': ['-', ['get', 'minHeight'], 10],
            }}
          />
        </Source>
      ))}
    </>
  )
}
