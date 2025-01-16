import type { Tileset3D } from '@loaders.gl/tiles'
import type { MapViewState } from 'deck.gl'
import { Tile3DLayer } from '@deck.gl/geo-layers'
import { Tiles3DLoader } from '@loaders.gl/3d-tiles'

import { Map } from '@vis.gl/react-maplibre'
import { useState } from 'react'
import OSMSource from './components/OSMSource'
import DeckGLOverlay from './utils/DeckGLOverlay'

function App() {
  const [initialViewState, setInitialViewState] = useState<MapViewState>({
    longitude: 136.9025864,
    latitude: 35.1687756,
    zoom: 14,
  })

  const tile3dLayer = new Tile3DLayer({
    id: 'tile3dlayer',
    pointSize: 1,
    data: 'http://localhost:5173/3dtiles/tileset.json',
    loader: Tiles3DLoader,
    onTilesetLoad: (tileset: Tileset3D) => {
      // Recenter to cover the tileset
      const { cartographicCenter, zoom } = tileset
      if (!cartographicCenter) {
        return
      }
      setInitialViewState({
        longitude: cartographicCenter[0],
        latitude: cartographicCenter[1],
        zoom,
      })
    },
    onTileError: (error) => {
      console.error('A 3D tile failed to load:', error)
    },
  })

  return (
    <Map
      initialViewState={initialViewState}
      style={{ width: '100%', height: '100vh' }}
      controller
    >
      <DeckGLOverlay
        layers={[
          tile3dLayer,
        ]}
      />
      <OSMSource />
    </Map>
  )
}

export default App
