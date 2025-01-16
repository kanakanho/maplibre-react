import type { SourceProps } from '@vis.gl/react-maplibre'
import { Layer, Source } from '@vis.gl/react-maplibre'

export default function OSMSource() {
  const osmSourceProps: SourceProps = {
    id: 'osm-tiles',
    type: 'raster',
    tiles: ['https://tile.openstreetmap.jp/styles/osm-bright-ja/{z}/{x}/{y}.png'],
    attribution: '<a href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'>© OpenStreetMap contributors</a>',
  }

  return (
    <Source
      {...osmSourceProps}
    >
      <Layer
        type="raster"
        source="osm-tiles"
      />
    </Source>
  )
}
