import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Overwhelm from '@/components/ui/overwhelm';
import MoneyGrubbingSection from '@/components/ui/moneyGrub';
import Confetti from '@/components/ui/confetti';

const Tst: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const overwhelmOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const confettiOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const moneyOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-gray-100 dark:bg-gray-800">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ opacity: overwhelmOpacity }}
        >
          <Overwhelm />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ opacity: confettiOpacity }}
        >
          <Confetti
            svgComponents={[/* Your SVG components here */]}
            manualstart={false}
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ opacity: moneyOpacity }}
        >
          <MoneyGrubbingSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Tst;