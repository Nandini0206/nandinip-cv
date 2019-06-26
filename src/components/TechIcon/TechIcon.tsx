import React from 'react';

import './TechIcon.css';
import { TechIcon as TechIconType } from '../../types/data';

import sqlIcon from './img/sql-icon.png';
import rubyIcon from './img/ruby-icon.png';
import javascriptIcon from './img/javascript-icon.png';
import swiftIcon from './img/swift-icon.png';
import herokuIcon from './img/heroku-icon.png';
import jasmineIcon from './img/jasmine-icon.png';
import tddIcon from './img/tdd-icon.png';
import travisIcon from './img/travis-icon.png';


const TechIconMap = {

  [TechIconType.SQL]:  sqlIcon,
  [TechIconType.RUBY]:  rubyIcon,
  [TechIconType.JAVASCRIPT]:  javascriptIcon,
  [TechIconType.SWIFT]:  swiftIcon,
  [TechIconType.HEROKU]:  herokuIcon,
  [TechIconType.JASMINE]:  jasmineIcon,
  [TechIconType.TDD]:  tddIcon,
  [TechIconType.TRAVIS]:  travisIcon,
};

export interface TechIconProps {
  icon: TechIconType;
}

const TechIcon: React.FunctionComponent<TechIconProps> = ({ icon }) => (
  <img className="TechIcon" alt={icon} src={TechIconMap[icon]} />
);

export default TechIcon;
