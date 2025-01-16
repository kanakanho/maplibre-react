import { Tile3DLayer } from '@deck.gl/geo-layers'
import { Tiles3DLoader } from '@loaders.gl/3d-tiles'

const MATERIAL = {
  ambient: 0.8,
  diffuse: 0.6,
  shininess: 300,
  specularColor: [255, 255, 255],
}

export function plateauLayer(): Tile3DLayer {
  return new Tile3DLayer({
    id: 'tile3dlayer',
    pointSize: 1,
    data: 'http://localhost:5174/3dtiles/tileset.json',
    loader: Tiles3DLoader,
    MATERIAL,
  })
}
