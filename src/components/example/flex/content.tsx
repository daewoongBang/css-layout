/** @jsxImportSource @emotion/react */

interface IFlexContentProps {
  direction: any;
  wrap: any;
  justifyContent: any;
  alignItems: any;
}

const FlexContent = ({
  direction,
  wrap,
  justifyContent,
  alignItems
}: IFlexContentProps) => {
  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: direction || 'row',
        justifyContent: justifyContent || 'normal',
        alignItems: alignItems || 'normal',
        flexWrap: wrap || 'nowrap',

        '.box': {
          width: '150px',
          height: '150px',
          backgroundColor: 'tomato',
          fontSize: '36px',
          color: 'white'
        }
      }}
    >
      <div className='box'>1</div>
      <div className='box'>2</div>
      <div className='box'>3</div>
      <div className='box'>4</div>
      <div className='box'>5</div>
    </div>
  );
};

export default FlexContent;
