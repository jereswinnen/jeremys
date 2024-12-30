import React from "react";
import { IconContext } from "phosphor-react";

export default function SectionHeader({ icon: Icon, text }) {
  return (
    <div className="col-span-full pt-2 border-t-2 border-bg-black/10 font-medium flex items-center gap-2">
      {Icon && (
        <IconContext.Provider value={{ size: 20, weight: "duotone" }}>
          <Icon />
        </IconContext.Provider>
      )}
      <p>{text}</p>
    </div>
  );
}
