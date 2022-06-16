import React, { useCallback, useState } from "react";
import Select from "react-select";
import { FormikProps } from "formik";

interface SelectProp<T> {
  name: string;
  items: any[];
  formik?: FormikProps<T>;
}

const CustomSelect = <T extends Record<string, unknown>>({
  formik,
  items,
  name,
}: SelectProp<T>) => {
  const formikOnChange = useCallback((val) => {
    formik?.setFieldValue(name, val);
  }, []);

  return (
    <Select
      options={items}
      value={formik?.values[name]}
      onChange={formikOnChange}
    />
  );
};

export default CustomSelect;
