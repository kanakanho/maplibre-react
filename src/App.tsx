import type { MapViewState } from 'deck.gl'
import { Map } from '@vis.gl/react-maplibre'
import OSMSource from './components/OSMSource'
import PlateauSources from './components/PlateauSources'

function App() {
  const initialViewState: MapViewState = {
    longitude: 136.9025864,
    latitude: 35.1687756,
    zoom: 14,
    maxPitch: 120,
  }

  return (
    <Map
      initialViewState={initialViewState}
      style={{ width: '100%', height: '100vh' }}
      controller
    >
      <OSMSource />
      <PlateauSources />
    </Map>
  )
}

export default App
