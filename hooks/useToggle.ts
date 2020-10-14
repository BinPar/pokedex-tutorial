import { useState } from "react";

/**
 * Toggle Hook
 * @param defaultValue initial value
 */
const useToggle = (defaultValue: boolean): [boolean, () => void] => {  
  const [value, setValue] = useState<boolean>(defaultValue);
  const toggle = (ev? : Event): void => {
    ev.preventDefault()
    setValue(current => !current);
  }
  return [value, toggle];
}

export default useToggle;
