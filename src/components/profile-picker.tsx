import { Button, Popup, type ButtonProps } from 'semantic-ui-react';
import type { Profile } from '../reducers/common';
import React from 'react';
import {
  BikeScooter,
  DirectionsBike,
  DirectionsBus,
  DirectionsCar,
  DirectionsWalk,
  LocalShipping,
  TwoWheeler,
} from '@mui/icons-material';

const iconMap = {
  truck: <LocalShipping />,
  car: <DirectionsCar />,
  bicycle: <DirectionsBike />,
  pedestrian: <DirectionsWalk />,
  motor_scooter: <BikeScooter />,
  bus: <DirectionsBus />,
  motorcycle: <TwoWheeler />,
};

interface ProfilePickerProps {
  group: string;
  loading: boolean;
  popupContent: string[];
  profiles: Profile[];
  activeProfile: Profile;
  handleUpdateProfile: (
    event: React.MouseEvent<HTMLButtonElement>,
    data: ButtonProps
  ) => void;
}

export const ProfilePicker = ({
  group,
  loading,
  popupContent,
  profiles,
  activeProfile,
  handleUpdateProfile,
}: ProfilePickerProps) => (
  <Button.Group basic size="small" style={{ height: '40px' }}>
    {profiles.map((profile, i) => (
      <Popup
        key={i}
        content={popupContent[i]}
        size="small"
        trigger={
          <Button
            active={profile === activeProfile}
            loading={profile === activeProfile ? loading : false}
            content={iconMap[profile as keyof typeof iconMap]}
            name="profile"
            valhalla_profile={profile}
            group={group}
            style={{ padding: '.5em' }}
            onClick={handleUpdateProfile}
            data-testid={`profile-button-` + profile}
          />
        }
      />
    ))}
  </Button.Group>
);
