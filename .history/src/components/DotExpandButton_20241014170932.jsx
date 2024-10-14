import { IconArrowAutofitRight } from "@tabler/icons-react";
import React from "react";

const DotExpandButton = () => {
  return (
    <section className="grid place-content-center py-24">
      <a
        href="mailto:contact@selynt.com"
        className="group flex h-12 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-n-9 hover:pl-2 hover:text-n-light active:bg-neutral-700"
      >
        <span className="rounded-full bg-n-9 p-1 text-sm transition-colors duration-300 group-hover:bg-n-light">
          <IconArrowAutofitRight className="-translate-x-[200%] scale-0 transition-all duration-300 group-hover:translate-x-0 group-hover:scale-100 group-hover:text-lg group-hover:text-n-dark group-active:-rotate-45" />
        </span>
        <span>Send us an email</span>
      </a>
    </section>
  );
};

export default DotExpandButton;
