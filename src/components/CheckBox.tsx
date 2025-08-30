'use client'
import React, { useState } from "react";

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id="agree"
                className="hidden"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <label
                htmlFor="agree"
                className={`w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center cursor-pointer ${checked ? 'bg-[#FF8A00]' : ''}`}
            >

            </label>
            <span>Sign me up to receive dining offers and news from this restaurant by email.</span>
        </div>
    );
};

export default Checkbox;
