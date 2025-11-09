import { controlPositions, CustomControlProps } from './types';
import type { PropsWithChildren, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const CustomControl = ({
  position,
  children,
}: PropsWithChildren<CustomControlProps>) => {
  const [groupContainer, setGroupContainer] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const parentElement = document.querySelector(controlPositions[position]);
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

  if (!groupContainer) return null;

  return createPortal(<>{children}</>, groupContainer);
};

type ControlButtonProps = {
  title: string;
  onClick: () => void;
  icon: ReactNode;
};

export const ControlButton = ({ title, onClick, icon }: ControlButtonProps) => {
  return (
    <button type="button" aria-label={title} title={title} onClick={onClick}>
      <span className="flex justify-center items-center" aria-hidden={true}>
        {icon}
      </span>
    </button>
  );
};
