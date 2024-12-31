import React from "react";
import { IconContext } from "phosphor-react";

export default function SectionHeader({ icon: Icon, text }) {
  return (
    <div className="col-span-full pt-2 border-t-2 border-bg-black/10 font-medium flex items-center gap-1.5">
      {Icon && (
        <IconContext.Provider value={{ size: 20, weight: "duotone" }}>
          <Icon className="opacity-50" />
        </IconContext.Provider>
      )}
      <p>{text}</p>
    </div>
  );
}
