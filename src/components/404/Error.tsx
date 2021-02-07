import React from "react";
import s from "./error.module.css"

const Error:React.FC<{}> = () => {
    const friedEggSvg = <svg className={s.friedEggSvg} viewBox="0 -1 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 267.203125c0 71.777344-42.558594 152.246094-114.644531 169.316406-58.058594 13.75-75.535157 73.84375-141.355469 73.84375-81.347656 0-119.324219-62.414062-166.214844-118.601562-34.605468-41.46875-89.785156-29.046875-89.785156-124.558594 0-98.71875 83.21875-114.839844 121.527344-149.710937 44.933594-40.902344 19.949218-117.492188 134.472656-117.492188 101.753906 0 118.644531 56.796875 165.601562 109.367188 37.867188 42.390624 90.398438 45.398437 90.398438 157.835937zm0 0" fill="#efefef"/><path d="m421.601562 109.367188c-46.957031-52.570313-63.847656-109.367188-165.601562-109.367188-10.84375 0-20.429688.6875-28.949219 1.96875 75.265625 10.429688 93.238281 60.589844 135.050781 107.398438 37.867188 42.390624 90.398438 45.398437 90.398438 157.835937 0 71.777344-42.558594 152.246094-114.644531 169.316406-49.324219 11.679688-69.363281 56.796875-114.628907 70.113281 10.121094 2.410157 20.992188 3.726563 32.773438 3.726563 65.820312 0 83.296875-60.09375 141.355469-73.839844 72.085937-17.070312 114.644531-97.539062 114.644531-169.316406 0-112.4375-52.53125-115.441406-90.398438-157.835937zm0 0" fill="#e2e2e2"/><path d="m403.277344 268.3125c0 54.703125-44.34375 99.046875-99.046875 99.046875-54.699219 0-99.046875-44.34375-99.046875-99.046875 0-54.699219 44.347656-99.046875 99.046875-99.046875 54.703125 0 99.046875 44.347656 99.046875 99.046875zm0 0" fill="#fccf3f"/><path d="m350.292969 180.613281c7.242187 13.761719 11.347656 29.433594 11.347656 46.0625 0 54.703125-44.34375 99.046875-99.046875 99.046875-16.628906 0-32.296875-4.105468-46.058594-11.347656 16.578125 31.503906 49.625 52.984375 87.699219 52.984375 54.699219 0 99.046875-44.34375 99.046875-99.046875-.003906-38.070312-21.484375-71.117188-52.988281-87.699219zm0 0" fill="#efa335"/><path d="m260.539062 230.828125c-17.457031 13.308594-27.46875 33.515625-27.46875 55.441406 0 4.140625 3.355469 7.5 7.5 7.5 4.140626 0 7.5-3.359375 7.5-7.5 0-17.207031 7.859376-33.066406 21.5625-43.511719 3.292969-2.515624 3.929688-7.21875 1.417969-10.515624-2.511719-3.292969-7.21875-3.925782-10.511719-1.414063zm0 0" fill="#fd8"/></svg>
    return(
        <div className={s.error+" noselect"}>
            <div className={s.errorContent}>
                4 {friedEggSvg} 4
            </div>
            <div className={s.errorText}>
                Oops! Page not found!
                <button className={s.buttonLogin}>Back to homepage</button>
            </div>
        </div>
    )
}

export default Error