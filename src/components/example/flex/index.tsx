/** @jsxImportSource @emotion/react */
import { Fragment, useState } from 'react';
import Toolbar from './toolbar';
import Content from './content';

const Flex = () => {
  const [direction, setDirection] = useState<string>('row');
  const [wrap, setWrap] = useState<string>('nowrap');
  const [justifyContent, setJustifyContent] = useState<string>('normal');
  const [alignItems, setAlignItems] = useState<string>('normal');

  const getContent = () => {
    const isRow = direction === 'row';

    const axisInfo = [
      { label: 'main axis ⮕', color: '#cb656c' },
      { label: `cross axis ⮕`, color: '#24504f' }
    ];

    return (
      <Fragment>
        <div
          css={{
            color: axisInfo[isRow ? 0 : 1].color,
            borderBottom: `2px dashed ${axisInfo[isRow ? 0 : 1].color}`,
            marginLeft: '36px',
            fontSize: '20px'
          }}
        >
          {axisInfo[isRow ? 0 : 1].label}
        </div>

        <div className='content'>
          <div
            css={{
              padding: '3px',
              color: axisInfo[isRow ? 1 : 0].color,
              borderRight: `2px dashed ${axisInfo[isRow ? 1 : 0].color}`,
              fontSize: '20px',
              textAlign: 'center',
              writingMode: 'vertical-lr'
            }}
          >
            {axisInfo[isRow ? 1 : 0].label}
          </div>

          <Content
            direction={direction}
            wrap={wrap}
            justifyContent={justifyContent}
            alignItems={alignItems}
          />
        </div>
      </Fragment>
    );
  };

  return (
    <div
      className='example-flex'
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',

        '.content': {
          width: '100%',
          height: '100%',
          display: 'inline-flex'
        }
      }}
    >
      <Toolbar
        handleDirection={setDirection}
        handleWrap={setWrap}
        handleJustifyContent={setJustifyContent}
        handleAlignItems={setAlignItems}
      />

      {getContent()}
    </div>
  );
};

export default Flex;
