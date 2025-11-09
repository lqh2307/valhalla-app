declare module '*.svg' {
  import type * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export { ReactComponent };
  export default ReactComponent;
}

declare module '*.css';

interface Window {
  NODE_ENV?: 'development' | 'production';
  SKIP_PREFLIGHT_CHECK?: boolean;
  VALHALLA_URL?: string;
  NOMINATIM_URL?: string;
  TILE_SERVER_URL?: string;
  CENTER_COORDS?: string;
  MAX_BOUNDS?: string;
  MAP_STYLES?: {
    id: string;
    label: string;
    style: string;
  }[];
}