import { IconName as FAIconName } from '@fortawesome/free-solid-svg-icons';

export enum HeadingIcon {
  YLD = 'yld',
  TRAINLINE = 'trainline',
  MEDSTARS = 'medstars',
  SCHOOL_OF_CODE = 'soc',
  CREDIT_SUISSE = 'credit-suisse',
}

export enum TechIcon {
  SQL = 'sql',
  RUBY = 'ruby',
  JAVASCRIPT = 'javascript',
  SWIFT = 'swift',
  HEROKU = 'heroku',
  JASMINE = 'jasmine',
  TDD = 'tdd',
  TRAVIS = 'travis',
}

export interface Data {
  forename: string;
  surname: string;
  profession: string;
  number: string;
  email: string;
  sections: {
    summary: Section;
    experience: Section;
    education: Section;
    skills: Section;
    interests: Section;
  };
}

export interface Section {
  heading: string;
  icon: FAIcon;
  articles: Article[];
}

export interface Article {
  heading: string;
  headingIcons?: HeadingIcon[];
  info: string;
  footnotes?: string;
  techIcons?: TechIcon[];
  aside: Aside;
}

export interface Aside {
  title?: string;
  period?: string;
  icon?: FAIcon;
}

export type FAIcon = {
  name: FAIconName;
  small?: boolean;
}
