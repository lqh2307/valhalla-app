export { };

declare global {
  interface Window {
    NODE_ENV?: 'development' | 'production';
    BASE_URL?: string;
    SKIP_PREFLIGHT_CHECK?: boolean;
    VALHALLA_URL?: string;
    NOMINATIM_URL?: string;
    CENTER?: import('./types/Spatial').Lnglat;
    ZOOM?: number;
    MAP_STYLES?: import('./map/types').MapStyleLocalStorage[];
    MAP_STYLE?: import('./map/types').MapStyleLocalStorage;
  }
}

declare module '*.css';
