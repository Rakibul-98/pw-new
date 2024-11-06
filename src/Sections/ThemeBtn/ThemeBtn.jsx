/* eslint-disable react/prop-types */

import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeBtn({isDark, setIsDark}) {
    const handleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem("themeMode", newTheme.toString());
    };

    return (
        <div className="absolute text-2xl  right-5 top-5 cursor-pointer z-50" onClick={handleTheme}>
            {
                isDark ? (
                    <button className="rounded-full px-4 py-1 text-base-200 bg-white" >
                        <MdOutlineWbSunny />
                    </button>
                ) : (
                    <button className="px-4 py-1 text-base-200 bg-slate-500 rounded-full">
                        <FiMoon />
                    </button>
                )
            }
        </div>
    )
}
