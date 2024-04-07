/** @jsxImportSource @emotion/react */

interface ILabelProps {
  children?: any;
}

const Label = ({ children }: ILabelProps) => {
  return (
    <label
      css={{
        fontSize: '13px'
      }}
    >
      {children}
    </label>
  );
};

export default Label;
