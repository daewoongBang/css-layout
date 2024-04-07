/** @jsxImportSource @emotion/react */
import Label from './label';

interface ISelectOption {
  label: string;
  value: any;
}

interface ISelectProps {
  label?: string;
  options: ISelectOption[];
  [x: string]: any;
}

const Select = ({ options, label, ...rest }: ISelectProps) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {label && <Label>{label}</Label>}

      <select {...rest}>
        {options.map((option, index) => (
          <option key={`option-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
