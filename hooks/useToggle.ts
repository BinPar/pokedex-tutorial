import { useState } from "react";

/**
 * Toggle Hook
 * @param defaultValue initial value
 */
const useToggle = (defaultValue: boolean): [boolean, () => void] => {  
  const [value, setValue] = useState<boolean>(defaultValue);
  const toggle = (): void => setValue(current => !current);
  return [value, toggle];
}

export default useToggle;
