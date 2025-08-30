import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const SelectInput = ({ list, w = "w-full" }: any) => {
    return (
        <div className={`relative ${w} text-xl  bg-[rgba(208,204,199,0.1)]`}>
            <select
                className="cursor-pointer pl-12 py-6 text-gray-400 w-full rounded-[20px] appearance-none border-0 focus:outline-none focus:ring-2 "
            >
                {list.map((val: any) => (
                    <option key={val} value={val}>
                        {val}
                    </option>
                ))}
            </select>

            <div
                className="pointer-events-none absolute pr-8 right-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            >
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    );
}

export default SelectInput







