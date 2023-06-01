import React, { FC } from 'react';
import FixedBlackBg, {
  SpaceBgCard,
} from '../../../common/style/PopupStyles';

const Testimonials: FC = () => (
  <FixedBlackBg>
    <SpaceBgCard>
      <div className="flex flex-row w-full justify-center items-center relative">
        <h2>Testimonials</h2>
      </div>
    </SpaceBgCard>
  </FixedBlackBg>
);

export default Testimonials;
