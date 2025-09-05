"use client";

import './CustomSelect.css';
import { useState, useEffect, useRef, MouseEventHandler } from 'react';
import { CustomSelectOption } from "../../types/types"

type CustomSelectProps = {
    className: string,
    placeholder: string,
    hint: string,
    id: string,
    options: CustomSelectOption[]
}

function CustomSelect({className, placeholder, hint, id, options}: CustomSelectProps) {


    const [visible, setVisible] = useState(false);
    const [selectPlaceholder, setSelectPlaceholder] = useState(placeholder);

    const toggleSubMenu = () => {
        setVisible (visible => !visible);
    }
    const updateSelectInfo = (e: React.MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget.dataset.option as string;
        setSelectPlaceholder(value);
        setVisible (visible => !visible);
    }

    

    return ( 
        <div className={className} id={id}>
            <div className="custom-select__wrapper" onClick={toggleSubMenu} data-value={selectPlaceholder}>
                <span>{selectPlaceholder}</span>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2475 0.6574L8 6.7474L1.7525 0.6574C1.64088 0.548372 1.49103 0.487334 1.335 0.487334C1.17897 0.487334 1.02912 0.548372 0.9175 0.6574C0.863453 0.710356 0.820515 0.773562 0.791203 0.84332C0.76189 0.913078 0.746792 0.987984 0.746792 1.06365C0.746792 1.13932 0.76189 1.21422 0.791203 1.28398C0.820515 1.35374 0.863453 1.41694 0.9175 1.4699L7.56375 7.9499C7.68047 8.06367 7.83701 8.12734 8 8.12734C8.16299 8.12734 8.31953 8.06367 8.43625 7.9499L15.0825 1.47115C15.1369 1.41816 15.1802 1.35479 15.2097 1.2848C15.2393 1.21481 15.2545 1.13962 15.2545 1.06365C15.2545 0.987683 15.2393 0.912485 15.2097 0.842496C15.1802 0.772507 15.1369 0.709145 15.0825 0.65615C14.9709 0.547122 14.821 0.486084 14.665 0.486084C14.509 0.486084 14.3591 0.547122 14.2475 0.65615V0.6574Z" fill="#FDFDFD" />
                </svg>
            </div>
            <div className="custom-select__hint">
                {hint}
            </div>
            
            <div className={`custom-select__submenu ${visible ? "visible" : ""}`}>
                <ul>
                    { 
                        options.map( option => (
                            <li data-option={option.value} onClick={updateSelectInfo}>{option.label}</li>
                        ) ) 
                    }
                </ul>
            </div>
        </div>
    );
}

export default CustomSelect;