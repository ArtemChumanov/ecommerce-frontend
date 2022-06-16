import { FC, useState } from "react";

export const useInput = (initial: any, required: boolean) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: any) => setValue(e.target.value);

  const onBlur = (
    e: any // @ts-ignore
  ) => (!e.target.value && required ? setError("Reqired Field") : setError(""));

  return {
    value,
    error,
    onChange,
    onBlur,
  };
};
