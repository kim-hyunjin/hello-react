import React from 'react';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({state}) => (
        <>
        <div style={{
          width: '64px',
          height: '64px',
          background: state.color
        }}>
        </div>
        <div style={{
          width: '64px',
          height: '64px',
          background: state.subcolor
        }}>
        </div>
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;