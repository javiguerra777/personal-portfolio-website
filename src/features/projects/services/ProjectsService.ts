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
    description:
      'I contributed to helping build the Suit Drive page for foundations. This project was built with WordPress and I assisted with styling and building the UI. The team I worked with ensured the page was mobile friendly and that the page met the needs of the client. If you want to check it out click on the top left icon. I am unable to share the source code due to it being for a client.',
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
      'The FortNerf client application was built with React, Typescript, socket.io/client, and Phaser. This allows users to engage in single player or multiplayer mode. The API server was removed from railway because I did not have enough credits. I plan to eventually host the API server again so that users can play and connect with one another. If you want to check out single player mode you can click on the top right icon to do so. If you would like to contribute additional features to this application you can fork a project from the github repo.',
    image: FortNerf,
    link: 'https://github.com/javiguerra777/capstone-frontend',
    deployedLink: 'https://multiplayerfortnerf.netlify.app/',
  },
  {
    name: 'FortNerf Api Server',
    description:
      'The FortNerf Backend Api Server was built with Node, Express, Typescript, MongoDB, and socket.io. This server allows the FortNerf Client application to be able to save games and game data to a database and allow multiple users to interact with each other. This server has a lot of features and functionality. If you would like to build on this code go ahead and click on the github icon on the top left and fork a project and start contributing.',
    image: ExpressLogo,
    link: 'https://github.com/javiguerra777/capstone-backend',
  },
  {
    name: 'Django Api Server',
    description:
      'This Django Server is used as a rest API for a CMS. I built this to work with the Angular CMS client application to provide a way to save data to a database and allow concurrent users to add posts. There are not a lot of features implemented. If you want to add additional functionality and features click on the github icon in the top left corner and fork the project.',
    image: DjangoLogo,
    link: 'https://github.com/javiguerra777/django-blog-server',
  },
  {
    name: 'Weather App',
    description:
      'This weather app was built with React. Ths app assists with weather forcasting. Check out the source code by clicking on the github icon in the top left, if you want to add additional features feel free. I plan to deploy this application eventually, you are able to put in your location and it will give you the weather forecast for the current day and week.',
    image: WeatherLogo,
    link: 'https://github.com/javiguerra777/weather-app-apprenticeship',
  },
  {
    name: 'Brewery Locator App',
    description:
      'This brewery locator app was built with React. I worked with a team to build this application. If you want to add additional features click on the github icon in the top left. You can check out the deployed project by clicking on the top right icon. Feel free to leave a review.',
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
