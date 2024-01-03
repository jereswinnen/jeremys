import React from "react";

const ParallaxDebug = () => {
  const children = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className="pointer-events-none relative col-span-1 flex items-end justify-end"
    >
      {index !== 9 && ( // Conditional rendering: Exclude span for the 10th element
        <span className="absolute -bottom-3 right-2 z-20 rounded-full bg-black/80 p-2 py-0.5 text-xs tracking-wider text-white backdrop-blur-lg font-medium">
          {`${(index + 1) * 10}%`}
        </span>
      )}
    </div>
  ));

  return (
    <div className="fixed left-0 top-0 z-50 grid h-full w-full grid-cols-1 divide-y divide-black/20 bg-transparent">
      {children}
    </div>
  );
};

export default ParallaxDebug;
