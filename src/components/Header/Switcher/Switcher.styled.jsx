
import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.input`
  --toggle-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 6.25em;
  height: 3.125em;
  background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
  background-size: 205%;
  background-position: 0;
  transition: 0.4s;
  border-radius: 99em;
  position: relative;
  cursor: pointer;
  font-size: var(--toggle-size);

  &::before {
    content: "";
    width: 2.25em;
    height: 2.25em;
    position: absolute;
    top: 0.438em;
    left: 0.438em;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    border-radius: 50%;
    transition: 0.4s;
  }

  &:checked::before {
    left: calc(100% - 2.25em - 0.438em);
    background-position: 0;
  }

  &:checked {
    background-position: 100%;
  }
`;

const ThemeCheckbox = ({ checked, onChange }) => {
  return (
    <CheckboxWrapper
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default ThemeCheckbox;
