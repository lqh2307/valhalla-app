import { TooltipButton } from '../components/TooltipButton';
import { getValue, setValue } from '../utils/LocalStorage';
import { LoadingImage } from '../components/LoadingImage';
import { CustomControl } from './custom-control';
import { Layers } from '@mui/icons-material';
import { Popup } from 'semantic-ui-react';
import { Lnglat } from '../types/Spatial';
import { Box } from '@mui/material';
import React from 'react';
import {
  LastPositionLocalStorage,
  ResetBoundsControlProps,
  MapStyleLocalStorage,
} from './types';

export function getMapStyleById(id: string): MapStyleLocalStorage {
  return window.MAP_STYLES.find((item) => item.id === id);
}

export function getMapStyle(): MapStyleLocalStorage {
  let mapStyle = window.MAP_STYLE;

  const lastPosition: LastPositionLocalStorage = getValue('last_position');
  if (lastPosition) {
    if (lastPosition.style !== undefined) {
      mapStyle = lastPosition.style;
    }
  }

  return mapStyle;
}

export function getCenter(): Lnglat {
  let center = window.CENTER;

  const lastPosition: LastPositionLocalStorage = getValue('last_position');
  if (lastPosition) {
    if (lastPosition.center !== undefined) {
      center = lastPosition.center;
    }
  }

  return center;
}

export function getZoom(): number {
  let zoom = window.ZOOM;

  const lastPosition: LastPositionLocalStorage = getValue('last_position');
  if (lastPosition) {
    if (lastPosition.zoom !== undefined) {
      zoom = lastPosition.zoom;
    }
  }

  return zoom;
}

export function updateLocalStorage(value: LastPositionLocalStorage): void {
  setValue('last_position', {
    ...(getValue('last_position') || {}),
    ...value,
  });
}

export const ResetBoundsControl = (props: ResetBoundsControlProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedStyleId, setSelectedStyleId] = React.useState<string>(
    getMapStyle().id
  );

  // Save to localStorage whenever selectedStyleId changes
  React.useEffect(() => {
    const mapStyle = getMapStyleById(selectedStyleId);
    if (mapStyle) {
      updateLocalStorage({
        style: mapStyle,
      });

      props.onStyleChange?.(selectedStyleId);
    }
  }, [selectedStyleId, props.onStyleChange]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Popup
      trigger={
        <CustomControl position={'top-right'}>
          <TooltipButton
            icon={<Layers sx={{ fontSize: '29px' }} />}
            onClick={toggleDrawer}
            title={'Map Styles'}
            titlePlacement={'left'}
          />
        </CustomControl>
      }
      position="bottom right"
      content={
        isOpen ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              height: '12rem',
              overflowY: 'scroll',
            }}
          >
            {window.MAP_STYLES.map((item) => (
              <TooltipButton
                sx={{
                  backgroundColor:
                    item.id === selectedStyleId ? '#555555' : undefined,
                }}
                icon={
                  <LoadingImage
                    width={'5rem'}
                    height={'5rem'}
                    alt={item.label}
                    src={item.image}
                    fallbackSrc={`${window.BASE_URL}/assets/images/placeholder.png`}
                  />
                }
                value={item.id}
                onClick={setSelectedStyleId}
                title={item.label}
                titlePlacement={'left'}
              />
            ))}
          </Box>
        ) : null
      }
      on="click"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    />
  );
};
