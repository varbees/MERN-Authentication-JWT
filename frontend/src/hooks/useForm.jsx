import { useState } from 'react';

export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    evt => {
      setValues({ ...values, [evt.target.name]: evt.target.value });
    },
  ];
};
