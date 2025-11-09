import { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";

export interface LastCenterStorageValue {
  center: [number, number];
  zoom_level: number;
}

export interface DrawControlProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  onUpdate?: () => void;
  controlRef?: React.RefObject<MaplibreTerradrawControl | null>;
}

export const controlPositions = {
  topLeft: '.maplibregl-ctrl-top-left',
  topRight: '.maplibregl-ctrl-top-right',
  bottomLeft: '.maplibregl-ctrl-bottom-left',
  bottomRight: '.maplibregl-ctrl-bottom-right',
};

export type CustomControlProps = {
  position: keyof typeof controlPositions;
};

export interface ResetBoundsControlProps {
  onStyleChange?: (style: string) => void;
}

export interface MapStyleOptionProps {
  id: string;
  label: string;
  style: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  mapCenter?: { lng: number; lat: number };
  zoom?: number;
}

