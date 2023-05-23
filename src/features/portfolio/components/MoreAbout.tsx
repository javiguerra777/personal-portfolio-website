import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
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
      <div className="flex flex-row justify-end">
        <button type="button" onClick={closeAbout}>
          <WhiteXIcon />
        </button>
      </div>
    </SpaceBgCard>
  </FixedBlackBg>
);

export default MoreAbout;
