import { BBox, ImageFormat, TileSize } from '../../types/Common';
import { detectContentTypeFromFormat } from '../Utils';
import { calculateSizes } from '../Spatial';
import maplibregl from 'maplibre-gl';

export async function renderMap(option: {
  style: string | maplibregl.StyleSpecification;
  bounds: BBox;
  zoom: number;
  tileSize?: TileSize;
  pitch?: number;
  bearing?: number;
  format?: ImageFormat;
  grayscale?: boolean;
  quality?: number;
}): Promise<string> {
  return new Promise((resolve, reject) => {
    const { width, height } = calculateSizes(
      option.zoom,
      option.bounds,
      option.tileSize
    );

    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.left = innerWidth + 'px';
    container.style.top = innerHeight + 'px';
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    document.body.appendChild(container);

    const map = new maplibregl.Map({
      container: container,
      style: option.style,
      bounds: option.bounds,
      zoom: option.zoom,
      pitch: option.pitch ?? 0,
      bearing: option.bearing ?? 0,
    });

    map.once('error', (error) => {
      map.remove();
      container.remove();

      reject(error);
    });

    map.once('idle', () => {
      let dataURL: string;
      const mapCanvas = map.getCanvas();

      if (option.grayscale) {
        const tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = mapCanvas.width;
        tmpCanvas.height = mapCanvas.height;

        const ctx2d = tmpCanvas.getContext('2d')!;
        ctx2d.filter = 'grayscale(100%)';
        ctx2d.drawImage(mapCanvas, 0, 0);

        dataURL = tmpCanvas.toDataURL(
          detectContentTypeFromFormat(option.format ?? 'png'),
          option.quality
        );
      } else {
        dataURL = mapCanvas.toDataURL(
          detectContentTypeFromFormat(option.format ?? 'png'),
          option.quality
        );
      }

      map.remove();
      container.remove();

      resolve(dataURL);
    });
  });
}
