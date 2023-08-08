import React from 'react';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';
import {IconSizes, IconProps} from './Icon';

MIcon.loadFont();

type IconButtonProps = IconProps & {
  text: string;
  onPress: () => void;
};

export const IconButton = ({
  onPress,
  size,
  name,
  color,
  text,
}: IconButtonProps) => (
  <MIcon.Button
    onPress={onPress}
    name={name}
    size={IconSizes[size]}
    color={color}>
    <Text>{text}</Text>
  </MIcon.Button>
);