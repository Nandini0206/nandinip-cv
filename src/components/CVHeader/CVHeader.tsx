import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './CVHeader.css';

export interface CVHeaderProps {
  forename: string;
  surname: string;
  profession: string;
  number: string;
  email: string;
  headshot: string;
}

const CVHeader: React.FunctionComponent<CVHeaderProps> = ({
  forename = 'Tyrion',
  surname = 'Lannister',
  profession = 'Diplomat',
  number = '+44-0800-121-212',
  email = 'tyrion@gotworld.com',
  headshot = 'https://placehold.it/600x600'
}) => (
  <header className="CVHeader">
    <div className="CVHeader-headshot-wrapper">
      <img
        className="CVHeader-headshot"
        alt="Candidate headshot"
        src={headshot}
      />
    </div>
    <div className="CVHeader-headings">
      <h1 className="CVHeader-name">
        <span className="CVHeader-forename">{forename}</span>
        <span className="CVHeader-surname">{surname}</span>
      </h1>
      <span className="CVHeader-profession">
        {profession.split(' ').map((word, i) => <span key={`${word}-${i}`}>{word}</span>)}
      </span>
    </div>
    <ul className="CVHeader-personal-information">
      <li><FontAwesomeIcon icon={faPhone} /> {number}</li>
      <li><FontAwesomeIcon icon={faEnvelope} /> {email}</li>
      <li><FontAwesomeIcon icon={faGithub} /> <a target="_blank" href="https://github.com/bhishp/bhishp-cv">View my source</a></li>
    </ul>
  </header>
);

export default CVHeader;
