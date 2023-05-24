import React, { FC } from 'react';
import FixedBlackBg, {
  SpaceBgCard,
} from '../../../common/style/PopupStyles';
import WhiteXIcon from '../../../common/components/WhiteXIcon';

type Props = {
  closeTestimonials: () => void;
};

const Testimonials: FC<Props> = ({ closeTestimonials }) => (
  <FixedBlackBg>
    <SpaceBgCard>
      <div className="flex flex-row w-full justify-center items-center relative">
        <h2>Testimonials</h2>
        <button
          type="button"
          className="absolute right-0"
          onClick={closeTestimonials}
        >
          <WhiteXIcon />
        </button>
      </div>
    </SpaceBgCard>
  </FixedBlackBg>
);

export default Testimonials;
