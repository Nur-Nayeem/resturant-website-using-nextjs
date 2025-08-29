'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const generateTimeOptions = (): string[] => {
    const options: string[] = [];
    for (let hour = 6; hour <= 24; hour++) {
        const displayHour = hour === 24 ? 0 : hour;
        const date = new Date();
        date.setHours(displayHour, 0, 0);

        const label = date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });

        options.push(label);
    }
    return options;
};

export default function CustomTimeSelect() {
    const TIME_OPTIONS = generateTimeOptions();

    return (
        <div className="relative w-full max-w-[475px] text-xl  bg-[rgba(208,204,199,0.1)]">
            <select
                className="cursor-pointer pl-12 py-6 text-gray-400 w-full rounded-[20px] appearance-none focus:outline-none focus:ring-2 "
            >
                <option value="">Select time</option>
                {TIME_OPTIONS.map((time) => (
                    <option key={time} value={time}>
                        {time}
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
