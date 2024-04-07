import Select from 'components/common/fields/select';

interface IFlexToolbarProps {
  handleDirection: (value: string) => void;
}

const FlexToolbar = ({ handleDirection }: IFlexToolbarProps) => {
  return (
    <div>
      <Select
        label={'flex-direction'}
        options={[
          {
            label: 'row',
            value: 'row'
          },
          {
            label: 'column',
            value: 'column'
          }
        ]}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleDirection(event.target.value);
        }}
      />
    </div>
  );
};

export default FlexToolbar;
