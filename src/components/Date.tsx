"use client"
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function CustomDateInput() {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const formattedDate = value
        ? new Date(value).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
        : "";

    const openPicker = () => {
        if (inputRef.current) {
            if (typeof inputRef.current.showPicker === "function") {
                inputRef.current.showPicker();
            } else {
                inputRef.current.focus();
            }
        }
    };

    return (
        <div className="relative w-full max-w-[475px] text-xl  bg-[rgba(208,204,199,0.1)]">
            {/* Hidden native date input */}
            <input
                ref={inputRef}
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="absolute w-full h-full opacity-0 cursor-pointer"
            />

            {/* Custom visible input box */}
            <div
                tabIndex={0}
                role="textbox"
                onClick={openPicker}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPicker();
                    }
                }}
                className="w-full pl-12 py-6 rounded-[20px] cursor-pointer select-none focus:outline-none focus:ring-2 text-gray-400"
            >
                {formattedDate || <span className="text-gray-400">Date</span>}
            </div>

            {/* Dropdown icon */}
            <div
                onClick={openPicker}
                className="absolute pr-8 right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    );
}
