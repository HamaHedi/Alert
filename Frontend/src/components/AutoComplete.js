import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function Autocomplet(props) {
  // const { options } = props;
  const [options, setOption] = useState();
  return (
    <Autocomplete
      id='checkboxes-tags-demo'
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </React.Fragment>
      )}
      style={{ MaxWidth: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          label='Select address'
          placeholder='Search'
        />
      )}
    />
  );
}
