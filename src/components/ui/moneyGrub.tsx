import React from 'react'
import { motion, Variants, useAnimation, useInView } from 'framer-motion'
import { IconMoneybag, IconCoin, IconCreditCard, IconCurrencyDollar, IconPigMoney } from '@tabler/icons-react';
import { Magnet2, HandDown } from '../icons/SVGs';

const MoneyGrubbingSection: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  React.useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [controls, isInView]);

  const magnetVariants: Variants = {
    initial: { y: '-100%' },
    animate: {
      y: '0%',
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const moneyVariants: Variants = {
    initial: (index: number) => ({
      opacity: 0,
      y: '100%',
      x: (index - 2) * 50
    }),
    animate: (index: number) => ({
      opacity: 1,
      y: [0, -200 - index * 20],
      x: [(index - 2) * 50, 0],
      transition: {
        opacity: { duration: 0.5, delay: index * 0.2 },
        y: { duration: 3, delay: index * 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        x: { duration: 3, delay: index * 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }
    })
  };

  const moneyIcons = [
    { Icon: IconMoneybag, color: 'text-green-500' },
    { Icon: IconCoin, color: 'text-yellow-500' },
    { Icon: IconCreditCard, color: 'text-blue-500' },
    { Icon: IconCurrencyDollar, color: 'text-purple-500' },
    { Icon: IconPigMoney, color: 'text-pink-500' },
  ];

  return (
    <div ref={ref} className="relative h-full w-full">
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        variants={magnetVariants}
        initial="initial"
        animate={controls}
      >
        <HandDown className="relative z-10 w-24 h-24 md:w-32 md:h-32 text-gray-700 dark:text-gray-300 -mb-8" />
        <Magnet2 className="relative z-20 w-24 h-24 md:w-32 md:h-32 text-gray-700 dark:text-gray-300" />
      </motion.div>

      <div className="absolute bottom-1/4 w-full flex justify-around">
        {moneyIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`${item.color}`}
            variants={moneyVariants}
            initial="initial"
            animate={controls}
            custom={index}
          >
            <item.Icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoneyGrubbingSection;