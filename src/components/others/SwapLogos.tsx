import React from "react";
import { motion } from "framer-motion";
import { IconBrandAdobe, IconBrandApple, IconBrandFramerMotion, IconBrandHtml5, IconBrandNotion, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react";

export const SwapLogos = () => {
  return (
    <div className="py-4 bg-neutral-900">
      <Logos />
    </div>
  );
};

const Logos = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto rounded-lg grid grid-cols-3 divide-x divide-neutral-700 ">
        <Spinner
          top={<IconBrandTailwind className="text-[#0DA5E9]" />}
          bottom={<IconBrandHtml5 className="text-[#DD4A25]" />}
        />
        <Spinner
          top={<IconBrandFramerMotion className="text-[#0095FF]" />}
          bottom={<IconBrandAdobe className="text-[#254BDD]" />}
        />

        <Spinner
          top={<IconBrandReact className="text-[#58C4DC]" />}
          bottom={<IconBrandTypescript className="text-[#EFD81D]" />}
        />

        <Spinner
          top={<IconBrandApple className="text-[#58C4DC]" />}
          bottom={<IconBrandNotion className="text-[#EFD81D]" />}
        />
      </div>
    </section>
  );
};

const TRANSITION = {
  ease: "easeInOut",
  duration: 10,
  repeat: Infinity,
  times: [0, 0.3, 0.4, 0.7, 0.8, 1],
};

const Spinner = ({
  top,
  bottom,
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
}) => {
  return (
    <div className="relative w-full h-12 overflow-hidden text-4xl bg-neutral-900">
      {/* TOP SPINNER */}
      <motion.div
        style={{
          y: "-50%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-12 w-[50px] overflow-hidden rounded-full bg-neutral-900 ring-[1px] ring-neutral-700"
      >
        <div
          style={{
            bottom: 0,
            transform: "translateY(50%) translateX(-50%)",
          }}
          className="absolute left-1/2"
        >
          {top}
        </div>
        <div
          style={{
            top: 0,
            transform: "translateY(-50%) translateX(-50%) rotate(180deg)",
          }}
          className="absolute left-1/2"
        >
          {bottom}
        </div>
      </motion.div>

      {/* BOTTOM SPINNER */}
      <motion.div
        style={{
          y: "50%",
          x: "-50%",
        }}
        animate={{
          rotate: ["0deg", "0deg", "180deg", "180deg", "360deg", "360deg"],
        }}
        transition={TRANSITION}
        className="absolute left-1/2 z-10 h-12 w-[50px] overflow-hidden rounded-full bg-neutral-900 ring-[1px] ring-neutral-700"
      >
        <div
          style={{
            bottom: 0,
            transform: "translateY(50%) translateX(-50%) rotate(180deg)",
          }}
          className="absolute left-1/2"
        >
          {bottom}
        </div>
        <div
          style={{
            top: 0,
            transform: "translateY(-50%) translateX(-50%)",
          }}
          className="absolute left-1/2"
        >
          {top}
        </div>
      </motion.div>
    </div>
  );
};
