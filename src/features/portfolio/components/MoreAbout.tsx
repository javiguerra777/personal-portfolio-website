import React, { FC } from 'react';
import FixedBlackBg, {
  SpaceBgCard,
} from '../../../common/style/PopupStyles';
import WhiteXIcon from '../../../common/components/WhiteXIcon';

type Props = {
  closeAbout: () => void;
};
const MoreAbout: FC<Props> = ({ closeAbout }) => (
  <FixedBlackBg>
    <SpaceBgCard>
      <div className="flex flex-row justify-center items-center relative">
        <h2>More About Me</h2>
        <button
          type="button"
          className="absolute right-0"
          onClick={closeAbout}
        >
          <WhiteXIcon />
        </button>
      </div>
      <h3 className="text-lg">Personal Life</h3>
      <p className="mb-3">
        I have a one year old son named Axel. I have two corgis named
        Gibbs and Bear. I love dogs, I love my family, and I enjoy
        spending as much time as I can with my family. As you can tell
        my family is the most important thing to me, so it&apos;s
        important for me to work for a company that values family. On
        my free time I enjoy playing video games, exercising, and
        going to the park.
      </p>
      <h3 className="text-lg">Professional</h3>
      <p className="mb-3">
        I started off my career in business administration. I worked
        in Accounting from 2020-2021, I had a good time learning about
        how to balance accounts and keep track of company finances.
        But I didn&apos;t enjoy it as much as I thought I would. As of
        2022 I have been enjoy working in software development much
        more than accounting. I have always been interested in working
        in upper management, due to my experience in business and my
        educational background.
      </p>
      <h3 className="text-lg">Skills</h3>
      <p className="mb-2">
        Languages: Javascript, Typescript, Java, Python, Ruby
      </p>
      <p className="mb-2">
        Frameworks/Libraries: Angular, React, Phaser, Express, Django,
        Ruby on Rails, Java Swing, JavaFX, Pygames, Pygui
      </p>
      <p>
        I have expreience with working in groups, I understand how to
        communicate well with others. I have had experience leading
        groups in college and at my current role as a React
        Apprentice. I enjoyed the times when I got to lead groups
        because I enjoy working with people.
      </p>
    </SpaceBgCard>
  </FixedBlackBg>
);

export default MoreAbout;
