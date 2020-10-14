import { useEffect, useState } from "react";

const useWindowHeight =  (): number => {
  const [height, setHeight] = useState<number>(0);
  const updateHeight = (): void => setHeight(window.innerHeight);
  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    console.log('subscribing to changes');
    return (): void => {
      console.log('unsubscribing to changes');
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
  return height;
}

export default useWindowHeight;