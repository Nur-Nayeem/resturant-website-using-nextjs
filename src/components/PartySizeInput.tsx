'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const OPTIONS = [1, 2, 4, 5, 10, 15, 20, 30, 50, 100];

export default function CustomNumberSelect() {
    return (
        <div className="relative w-full max-w-[475px] text-xl  bg-[rgba(208,204,199,0.1)]">
            <select
                className="cursor-pointer pl-12 py-6 text-gray-400 w-full  pr-10 rounded-[20px] appearance-none focus:outline-none focus:ring-2 "
            >
                <option value="">Select a number</option>
                {OPTIONS.map((num) => (
                    <option key={num} value={num}>
                        {num}
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
