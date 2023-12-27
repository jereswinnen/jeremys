import React from "react";

type ProjectsScrubberProps = {
  children: React.ReactNode;
};

const ProjectsScrubber: React.FC<ProjectsScrubberProps> = ({ children }) => {
  return (
    <div className="layoutBleed flex gap-4 overflow-hidden bg-slate-100 px-[var(--layoutPadding)] pt-[var(--layoutPadding)]">
      {children}
    </div>
  );
};

export default ProjectsScrubber;
