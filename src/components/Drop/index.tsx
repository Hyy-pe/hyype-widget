import React, { FC } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { OptionsWrapper } from './dropStyling';

interface DropProps {
  children?: any;
  show: boolean;
  onClose: any;
  minWidth?: any;
  top?: any;
  bottom?: any;
  left?: any;
  right?: any;
  arrowType?: string;
  align?: string;
  pad?: string | number;
  zIndex?: number;
}

const Drop: FC<DropProps> = ({
  children,
  show,
  onClose,
  minWidth,
  left,
  right,
  arrowType,
  align,
  pad,
  zIndex,
  bottom,
}: DropProps) => {
  if (show) {
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          onClose(false);
        }}
      >
        <OptionsWrapper
          show={show}
          minWidth={minWidth}
          top={top}
          left={left}
          right={right}
          arrowType={arrowType}
          align={align}
          pad={pad}
          zIndex={zIndex}
          bottom={bottom}
        >
          {children}
        </OptionsWrapper>
      </OutsideClickHandler>
    );
  } else return null;
};

export default Drop;
