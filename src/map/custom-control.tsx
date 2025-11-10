import React, { type PropsWithChildren } from 'react';
import { CustomControlProps } from './types';
import { createPortal } from 'react-dom';

export const CustomControl = (props: PropsWithChildren<CustomControlProps>) => {
  const [groupContainer, setGroupContainer] =
    React.useState<HTMLDivElement>(null);

  React.useEffect(() => {
    const parentElement = document.querySelector(
      `.maplibregl-ctrl-${props.position}`
    );
    const groupDiv = document.createElement('div');

    if (parentElement) {
      groupDiv.classList.add('maplibregl-ctrl', 'maplibregl-ctrl-group');

      setGroupContainer(groupDiv);
      parentElement.appendChild(groupDiv);
    }

    return () => {
      if (parentElement) {
        parentElement.removeChild(groupDiv);
      }
    };
  }, []);

  if (!groupContainer) {
    return null;
  }

  return createPortal(<>{props.children}</>, groupContainer);
};
