import React from "react";
import { IconContext } from "phosphor-react";

export default function Action({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      className="font-medium flex bg-red-300 rounded-full items-center gap-1.5"
    >
      {Icon && (
        <IconContext.Provider value={{ size: 20, weight: "duotone" }}>
          <Icon className="opacity-50" />
        </IconContext.Provider>
      )}
      {label}
    </a>
  );
}
