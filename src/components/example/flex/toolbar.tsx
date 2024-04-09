/** @jsxImportSource @emotion/react */

import Select, { ISelectOption } from 'components/common/fields/select';

interface IFlexToolbarProps {
  handleDirection: (value: string) => void;
  handleWrap: (value: string) => void;
  handleJustifyContent: (value: string) => void;
  handleAlignItems: (value: string) => void;
}

const flexDirectionOptions = ['row', 'column'];

const flexWrapOptions = ['nowrap', 'wrap'];

const justifyContentOptions = ['normal', 'center', 'space-between'];

const alignItems = ['normal', 'center'];

const FlexToolbar = ({
  handleDirection,
  handleWrap,
  handleJustifyContent,
  handleAlignItems
}: IFlexToolbarProps) => {
  const getOptions = (options: string[]) => {
    return options.reduce((target: ISelectOption[], item: string) => {
      target.push({
        label: item,
        value: item
      });

      return target;
    }, []);
  };

  return (
    <div
      className='example-flex-toolbar'
      css={{
        display: 'inline-flex',
        gap: '5px'
      }}
    >
      <Select
        label={'flex-direction'}
        options={getOptions(flexDirectionOptions)}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleDirection(event.target.value);
        }}
      />

      <Select
        label={'justify-content'}
        options={getOptions(justifyContentOptions)}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleJustifyContent(event.target.value);
        }}
      />

      <Select
        label={'align-items'}
        options={getOptions(alignItems)}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleAlignItems(event.target.value);
        }}
      />

      <Select
        label={'flex-wrap'}
        options={getOptions(flexWrapOptions)}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleWrap(event.target.value);
        }}
      />
    </div>
  );
};

export default FlexToolbar;
