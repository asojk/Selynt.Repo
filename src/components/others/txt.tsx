import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1.3,
  delay = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const baseAnimation = { 
      opacity: 1, 
      filter: filter ? "blur(0px)" : "none" 
    };
    const animationOptions = {
      duration: duration,
    };

    wordsArray.forEach((_, index) => {
      animate( 
        `span:nth-child(${index + 1})`, 
        baseAnimation, 
        { ...animationOptions, delay: index * 0.1 + delay } 
      );
    });

  }, [animate, duration, filter, delay, wordsArray]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`text-violet-300 opacity-0 ${className}`}
            style={{
              filter: filter ? "blur(20px)" : "none",
            }}
          >
            {" "}{word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
        <div className="inline md:text-3xl">
          {renderWords()}
        </div>
  );
};