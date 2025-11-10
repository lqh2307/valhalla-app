import { MaplibreTerradrawControl } from '@watergis/maplibre-gl-terradraw';
import { Lnglat } from '../types/Spatial';

export interface MapStyleLocalStorage {
  id: string;
  label?: string;
  style: string;
  image?: string;
}

export interface LastPositionLocalStorage {
  style?: MapStyleLocalStorage;
  center?: Lnglat;
  zoom?: number;
}

export interface DrawControlProps {
  position?: ControlPosition;
  onUpdate?: () => void;
  controlRef?: React.RefObject<MaplibreTerradrawControl>;
}

export interface CustomControlProps {
  position?: ControlPosition;
}

export type ControlPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface ResetBoundsControlProps {
  onStyleChange?: (id: string) => void;
}
