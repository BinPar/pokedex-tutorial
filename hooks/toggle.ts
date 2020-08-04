import React, { useState } from 'react';

interface ToggleState{
    (ev: React.MouseEvent): void; 
}

const useToggle = (initialValue = false): [boolean,ToggleState] => {
    const[opened, setToggle] = useState<boolean>(initialValue);
    const toggleState: ToggleState = (ev): void => {
        ev.preventDefault();
        setToggle((isOpen) => !isOpen);
    }
    return[opened,toggleState]

}

export default useToggle;