import { IconArrowAutofitRight } from "@tabler/icons-react";
import React from "react";

const DotExpandButton = () => {
  return (
    <section className="grid place-content-center py-24">
      <button className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:n-dark hover:pl-2 hover:text-white active:bg-neutral-700">
        <span className="rounded-full bg-n-dark p-1 text-sm transition-colors duration-300 group-hover:bg-white">
          <IconArrowAutofitRight className="-translate-x-[200%] scale-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-n-dark group-active:-rotate-45" />
        </span>
        <span>Send us an email</span>
      </button>
    </section>
  );
};

export default DotExpandButton;