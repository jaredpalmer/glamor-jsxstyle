import React from 'react';
import { Block } from 'glamor-jsxstyle';

const TextInput = ({
  onChange,
  name,
  value,
  type,
  placeholder,
  disabled,
  inputProps, // collect others in a single prop that will be passed thru
  ...rest
}) => (
  <Block
    component="input"
    name={name}
    padding=".5rem"
    border="1px solid #ccc"
    fontSize="1rem"
    transition="border 300ms ease-in"
    willChange="border"
    onChange={onChange}
    focus={{
      border: '1px solid blue',
      outline: 'none',
    }}
    props={{
      type,
      placeholder,
      disabled,
      inputProps,
    }}
    {...rest}
  />
);

export default TextInput;
