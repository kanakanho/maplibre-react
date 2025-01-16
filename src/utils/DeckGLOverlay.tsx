import type { DeckProps } from 'deck.gl'
import { MapboxOverlay } from '@deck.gl/mapbox'
import { useControl } from '@vis.gl/react-maplibre'

export default function DeckGLOverlay(props: DeckProps) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props))
  overlay.setProps(props)
  return null
}
