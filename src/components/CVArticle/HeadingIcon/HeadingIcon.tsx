import React from 'react';

import './HeadingIcon.css';
import { HeadingIcon as HeadingIconType } from '../../../types/data';

import collectiveIcon from './img/collective.png';

const HeadingIconMap = {
  [HeadingIconType.COLLECTIVE]: collectiveIcon,

};

export interface HeadingIconProps {
  icon: HeadingIconType;
}

const HeadingIcon: React.FunctionComponent<HeadingIconProps> = ({ icon }) => (
  <img className="HeadingIcon" alt={icon} src={HeadingIconMap[icon]} />
);

export default HeadingIcon;
