import { MutableRefObject, useEffect, useRef, useState } from "react";

const useIsOnWindow =  (): [boolean, MutableRefObject<HTMLElement>] => {
  const [isOnWindow,setIsOnWindow] = useState(false);
  const listItemRef = useRef<HTMLElement>();
  useEffect(() => {    
    setIsOnWindow(window.innerHeight > listItemRef.current.getClientRects()[0].top);
  }, []);
  return [isOnWindow, listItemRef];
}

export default useIsOnWindow;