import { useState } from 'react';
import { UseFieldHook } from '../types/commonTypes';

const useField = ({ type }: { type: string }): UseFieldHook => {
  // Hooks =================================================================================
  const [value, setValue] = useState<string>('');

  // Input onChange event function =========================================================
  const onChange: UseFieldHook['onChange'] = (event) => {
    setValue(event.target.value);
  };

  const reset = () => setValue(''); // Reset input

  return {
    type,
    value,
    onChange,
    reset,
  };
};
export default useField;
