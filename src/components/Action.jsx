import React from "react";
import { IconContext } from "phosphor-react";

export default function Action({ className = "", icon: Icon, href, label }) {
  const transitionClasses = "transition-all duration-300 ease-in-circ";
  return (
    <a
      href={href}
      className={`font-medium w-fit bg-transparent border border-black/60 hover:border-black rounded-full px-2.5 pr-4 py-1.5 relative overflow-hidden group ${transitionClasses} ${className}`}
    >
      <span
        className={`absolute inset-0 bg-black scale-x-0 rounded-full origin-left group-hover:scale-x-100 z-0 ${transitionClasses}`}
        aria-hidden="true"
      ></span>
      <div
        className={`relative z-10 flex gap-1 items-center group-hover:translate-x-1.5 ${transitionClasses}`}
      >
        {Icon && (
          <IconContext.Provider value={{ size: 20, weight: "duotone" }}>
            <Icon className="opacity-50 group-hover:text-white" />
          </IconContext.Provider>
        )}
        <span className={`group-hover:text-white ${transitionClasses}`}>
          {label}
        </span>
      </div>
    </a>
  );
}
