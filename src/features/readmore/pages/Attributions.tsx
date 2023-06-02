import React, { ReactNode, FC } from 'react';

type AttributionProps = {
  children: ReactNode;
  link: string;
};
const AttributionLink: FC<AttributionProps> = ({
  children,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    className="underline text-blue-500 hover:text-blue-300"
    rel="noreferrer"
  >
    {children}
  </a>
);
const Attributions: FC = () => (
  <div>
    <div>
      <div className="flex flex-row w-full justify-center relative">
        <h2 className="text-3xl font-bold my-3">Attributions</h2>
      </div>
      <p className="text-lg font-medium my-2 text-center">
        Thank you to these sites for the use of their open source
        images.
      </p>
      <div>
        <AttributionLink link="https://www.freepik.com/free-photo/3d-abstract-space-sky-with-stars-nebula_2673266.htm#query=space%20background&position=15&from_view=keyword&track=ais">
          Freepik.com
        </AttributionLink>
        <p>For the use of the splash picture</p>
      </div>
      <div>
        <AttributionLink link="https://www.vecteezy.com/vector-art/2084192-cute-astronaut-mascot-character-cartoon-vector-icon-illustration">
          Vecteezy.com
        </AttributionLink>
        <p>For the use of the astronaught logo</p>
      </div>
      <div>
        <AttributionLink link="https://angular.io/presskit">
          Angular.io
        </AttributionLink>
        <p>For the use of the Angular Logo</p>
      </div>
      <div>
        <AttributionLink link="https://brandslogos.com/d/django-logo/">
          Brandslogos.com
        </AttributionLink>
        <p>For the use of the Django Logo</p>
      </div>
      <div>
        <AttributionLink link="https://www.vhv.rs/viewpic/hwbxihm_phaser-phaser-3-logo-hd-png-download/">
          Vhv.rs
        </AttributionLink>
        <p>For the use of the Phaser Logo</p>
      </div>
      <div>
        <AttributionLink link="https://www.iconfinder.com/icons/1174949/js_react_js_logo_react_react_native_icon">
          Iconfinder.com
        </AttributionLink>
        <p>For the use of the React Logo</p>
      </div>
      <div>
        <AttributionLink link="https://uxwing.com/express-js-icon/">
          Uxwing.com
        </AttributionLink>
        <p>For the use of the Express Logo</p>
      </div>
      <div>
        <AttributionLink link="https://nicepng.com/">
          Nicepng.com
        </AttributionLink>
        <p>For the use of the React Native Logo</p>
      </div>
      <div>
        <AttributionLink link="https://favpng.com/png_view/astronaut-astronaut-spacecraft-cartoon-png/AkWb6XPw">
          Favpng.com
        </AttributionLink>
        <p>For the use of the astronauts images</p>
      </div>
      <div>
        <AttributionLink link="https://freepik.com">
          Freepik.com
        </AttributionLink>
        <p>For the use of the coming soon image</p>
      </div>
    </div>
  </div>
);

export default Attributions;
