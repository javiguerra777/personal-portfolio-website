import AngularLogo from '../../../assets/angular.png';
import ReactNativeLogo from '../../../assets/react_native.png';
import DjangoLogo from '../../../assets/django-logo.png';
import ExpressLogo from '../../../assets/express-js-icon.png';
import NumberGuesser from '../../../assets/number_guesser.png';
import StudentDirectory from '../../../assets/student_directory.png';
import SuitDrive from '../../../assets/suit_drive.png';
import WeatherLogo from '../../../assets/weather_application.png';
import BreweryLocator from '../../../assets/brewery_locator.png';
import FortNerf from '../../../assets/fortnerf.png';

export const projects = [
  {
    name: 'Foundations Suit Drive',
    description: 'Suit Drive page for Foundations Website',
    image: SuitDrive,
    deployedLink: 'https://foundation4fusd.org/event/suit-drive/',
  },
  {
    name: 'Angular Crud App',
    description:
      'Practice app to learn the basics of Angular Web Development',
    image: AngularLogo,
    link: 'https://github.com/javiguerra777/angular-crud-app',
  },
  {
    name: 'Capstone Frontend',
    description:
      'Capstone Frontend built with React, Typescript, socket.io/client, and Phaser',
    image: FortNerf,
    link: 'https://github.com/javiguerra777/capstone-frontend',
    deployedLink: 'https://multiplayerfortnerf.netlify.app/',
  },
  {
    name: 'Capstone Backend',
    description:
      'Capstone Backend Server built with Node, Express, Typescript, MongoDB, and socket.io',
    image: ExpressLogo,
    link: 'https://github.com/javiguerra777/capstone-backend',
  },
  {
    name: 'Django Blog Server',
    description:
      'Django Server to use for blogs, a practice project to learn development with Django',
    image: DjangoLogo,
    link: 'https://github.com/javiguerra777/django-blog-server',
  },
  {
    name: 'Practice React Native',
    description:
      'App to practice the basics of React Native, Typescript, and Tailwind',
    image: ReactNativeLogo,
    link: 'https://github.com/javiguerra777/practtice-native',
  },
  {
    name: 'React Weather App',
    description: 'Weather Forecasting React Project',
    image: WeatherLogo,
    link: 'https://github.com/javiguerra777/weather-app-apprenticeship',
  },
  {
    name: 'React Brewery Locator App',
    description: 'Brewery Locator App using React and React Hooks',
    image: BreweryLocator,
    link: 'https://github.com/srirachy/brewery_locator',
    deployedLink: 'https://srirachy.github.io/brewery_locator/',
  },
  {
    name: 'React Student Directory',
    description:
      'Student Directory Web Application using React and React Hooks',
    image: StudentDirectory,
    link: 'https://github.com/javiguerra777/React-Student-Directory',
    deployedLink:
      'https://javiguerra777.github.io/React-Student-Directory/',
  },
  {
    name: 'React Game Project',
    description: 'Number guessing game using React and React Hooks',
    image: NumberGuesser,
    link: 'https://github.com/javiguerra777/React-Game-Project',
    deployedLink:
      'https://javiguerra777.github.io/React-Game-Project/',
  },
];
export default {};
