import AngularLogo from '../../../assets/angular.png';
import DjangoLogo from '../../../assets/django-logo.png';
import ExpressLogo from '../../../assets/express-js-icon.png';
import NumberGuesser from '../../../assets/number_guesser.png';
import StudentDirectory from '../../../assets/student_directory.png';
import SuitDrive from '../../../assets/suit_drive.png';
import WeatherLogo from '../../../assets/weather_application.png';
import BreweryLocator from '../../../assets/brewery_locator.png';
import FortNerf from '../../../assets/fortnerf.png';
import CollegeYardLogo from '../../../assets/CollegeYard_Logo.jpg';

export const projects = [
  {
    name: 'My Start Up Application',
    deployedLink: 'https://testflight.apple.com/join/SDYCLTmm',
    description:
      'This Application was built using React Native and currently the app is only available for iOS. In the future there will be plans to deploy an Android version. If you click the link in the top left corner it will take you to TestFlight where you will be able to download a beta version of the app. Enjoy!',
    image: CollegeYardLogo,
  },
  {
    name: 'Foundations Suit Drive',
    description: 'Suit Drive page for Foundations Website',
    image: SuitDrive,
    deployedLink: 'https://foundation4fusd.org/event/suit-drive/',
  },
  {
    name: 'Client Angular CMS',
    description:
      'I built a simple CMS where users can add posts, edit their own posts, and delete their own posts. There were a lot more features I wanted to add but I did not have the time to do so. If you want to contribute to the source code click the github symbol in the top left and read the documentation.',
    image: AngularLogo,
    link: 'https://github.com/javiguerra777/angular-crud-app',
  },
  {
    name: 'FortNerf Application',
    description:
      'Capstone Frontend built with React, Typescript, socket.io/client, and Phaser',
    image: FortNerf,
    link: 'https://github.com/javiguerra777/capstone-frontend',
    deployedLink: 'https://multiplayerfortnerf.netlify.app/',
  },
  {
    name: 'FortNerf Api Server',
    description:
      'Capstone Backend Server built with Node, Express, Typescript, MongoDB, and socket.io',
    image: ExpressLogo,
    link: 'https://github.com/javiguerra777/capstone-backend',
  },
  {
    name: 'Django Api Server',
    description:
      'Django Server to use for blogs, a practice project to learn development with Django',
    image: DjangoLogo,
    link: 'https://github.com/javiguerra777/django-blog-server',
  },
  {
    name: 'Weather App',
    description: 'Weather Forecasting React Project',
    image: WeatherLogo,
    link: 'https://github.com/javiguerra777/weather-app-apprenticeship',
  },
  {
    name: 'Brewery Locator App',
    description: 'Brewery Locator App using React and React Hooks',
    image: BreweryLocator,
    link: 'https://github.com/srirachy/brewery_locator',
    deployedLink: 'https://srirachy.github.io/brewery_locator/',
  },
  {
    name: 'Student Directory Template',
    description:
      'I worked with a teammate to build this student directory template with React. If you want to add new features checkout the github repo. You can also check out the deployed version of this app if you click on the symbol in the top-right hand corner.',
    image: StudentDirectory,
    link: 'https://github.com/javiguerra777/React-Student-Directory',
    deployedLink:
      'https://javiguerra777.github.io/React-Student-Directory/',
  },
  {
    name: 'Number Guessing Game',
    description:
      'I built this number guessing game using React and React hooks. If you want to contribute to the source code or add new features click on the github symbol and fork the project. You can click on the top right corner to check out a deployed version of this app.',
    image: NumberGuesser,
    link: 'https://github.com/javiguerra777/React-Game-Project',
    deployedLink:
      'https://javiguerra777.github.io/React-Game-Project/',
  },
];
export default {};
