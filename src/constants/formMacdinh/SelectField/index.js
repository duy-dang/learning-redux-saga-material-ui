/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
    // eslint-disable-next-line no-else-return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  classes,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple',
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

export default withStyles(styles)(renderSelectField);
