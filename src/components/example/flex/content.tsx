/** @jsxImportSource @emotion/react */

interface IFlexContentProps {
  direction: any;
}

const FlexContent = ({ direction }: IFlexContentProps) => {
  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: direction || 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        '.box': {
          width: '200px',
          height: '200px',
          backgroundColor: 'tomato',
          fontSize: '36px',
          color: 'white'
        }
      }}
    >
      <div className='box'>1</div>
      <div className='box'>2</div>
      <div className='box'>3</div>
    </div>
  );
};

export default FlexContent;
