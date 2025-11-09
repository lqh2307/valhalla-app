import { MapStyleOptionProps, ResetBoundsControlProps } from './types';
import { ControlButton, CustomControl } from './custom-control';
import { useState, useEffect, useMemo, memo } from 'react';
import Map, { useMap } from 'react-map-gl/maplibre';
import { Popup } from 'semantic-ui-react';
import { LayersIcon } from 'lucide-react';
import { Box } from '@mui/material';

const MapStyleOption = memo(
  ({
    id,
    label,
    style,
    isSelected,
    onSelect,
    mapCenter,
    zoom,
  }: MapStyleOptionProps) => {
    // Memoize the map style to prevent unnecessary re-renders
    const memoizedMapStyle = useMemo(() => style, [style]);

    return (
      <Box>
        <Box
          onClick={() => onSelect(id)}
          style={{
            border: `3px solid ${isSelected ? '#2185d0' : 'transparent'}`,
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease',
            overflow: 'hidden',
          }}
        >
          <Map
            id={`${id}-map`}
            onMove={() => { }}
            longitude={mapCenter?.lng}
            latitude={mapCenter?.lat}
            zoom={zoom}
            attributionControl={false}
            style={{
              width: '226px',
              height: '64px',
              display: 'block',
            }}
            mapStyle={memoizedMapStyle}
            boxZoom={false}
            doubleClickZoom={false}
            dragPan={false}
            dragRotate={false}
            interactive={false}
          />
        </Box>
        <Box
          style={{
            marginTop: '6px',
            fontSize: '13px',
            fontWeight: isSelected ? 'bold' : 'normal',
            color: isSelected ? '#2185d0' : '#666',
            textAlign: 'center',
          }}
        >
          {label}
        </Box>
      </Box>
    );
  }
);

MapStyleOption.displayName = 'MapStyleOption';

export const ResetBoundsControl = (props: ResetBoundsControlProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStyleId, setSelectedStyleId] = useState<string>(localStorage.getItem('last_style') as string);

  const { current: map } = useMap();

  // Save to localStorage whenever selectedStyleId changes
  useEffect(() => {
    localStorage.setItem('last_style', selectedStyleId);

    props.onStyleChange?.(selectedStyleId);
  }, [selectedStyleId, props.onStyleChange]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Memoize the map options to prevent re-creating them on every render
  const mapOptions = useMemo(
    () =>
      (window.MAP_STYLES || []).map((mapStyle) => ({
        ...mapStyle,
        isSelected: selectedStyleId === mapStyle.id,
      })),
    [selectedStyleId]
  );

  return (
    <Popup
      trigger={
        <CustomControl position="topRight">
          <ControlButton
            title="Map Styles"
            onClick={toggleDrawer}
            icon={<LayersIcon size={17} />}
          />
        </CustomControl>
      }
      content={
        isOpen ? (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {mapOptions.map((mapOption) => (
              <MapStyleOption
                key={mapOption.id}
                id={mapOption.id}
                label={mapOption.label}
                style={mapOption.style}
                isSelected={mapOption.isSelected}
                onSelect={setSelectedStyleId}
                mapCenter={map?.getCenter()}
                zoom={map?.getZoom()}
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
