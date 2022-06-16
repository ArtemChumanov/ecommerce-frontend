import React, { FC } from "react";
import { FormikProps } from "formik";
import styled from "styled-components/macro";

interface InputProps<T> {
  name: string;
  type: string;
  formik?: FormikProps<T>;
  onChange?: (arg: T) => void;
  value?: string;
}

const Input = <T extends Record<string, unknown>>({
  name,
  type,
  formik,
  onChange,
  value,
}: InputProps<T>) => {
  return (
    <InputStyle
      name={name}
      type={type}
      value={(formik?.values[name] as string) || value}
      onChange={formik?.handleChange}
      //onBlur={formik?.handleBlur}
    />
  );
};

export default Input;

const InputStyle = styled.input`
  width: 100%;
  background: #f9f9f9;
  /* C1/D */

  padding: 11px 21px;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  font-weight: 400;
  font-size: 14px;
  color: #a9a9a9;
`;
