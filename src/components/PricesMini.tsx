import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SELECTED_STYLES = 'bg-p text-white font-medium rounded-lg py-3 w-28 relative';
const DESELECTED_STYLES = 'font-medium rounded-lg py-3 w-28 hover:bg-slate-100 transition-colors relative';

interface CardProps {
  title: string;
  content: string;
  selected?: boolean;
  className?: string;
}

const PricingCard: React.FC<CardProps> = ({ title, content, className = "" }) => (
  <div className={`p-4 bg-white rounded-lg shadow-md w-80 h-40 flex flex-col justify-between ${className}`}>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm md:text-base">{content}</p>
  </div>
);

const BrandingCard: React.FC<CardProps> = ({ title, content, className = "" }) => (
  <div className={`p-4 bg-white rounded-lg shadow-md w-80 h-40 flex flex-col justify-between ${className}`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm md:text-base">{content}</p>
  </div>
);

interface HeadingProps {
  selected: 'M' | 'A';
  setSelected: React.Dispatch<React.SetStateAction<'M' | 'A'>>;
}

const Heading: React.FC<HeadingProps> = ({ selected, setSelected }) => (
  <div className="relative z-10 mb-8 lg:mb-8">
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => setSelected('M')}
        className={`${selected === 'M' ? SELECTED_STYLES : DESELECTED_STYLES} whitespace-nowrap`}>
        Selynt
        {selected === 'M' && <BackgroundShift />}
      </button>
      <div className="relative">
        <button
          onClick={() => setSelected('A')}
          className={`${selected === 'A' ? SELECTED_STYLES : DESELECTED_STYLES} whitespace-nowrap`}>
          The Others
          {selected === 'A' && <BackgroundShift />}
        </button>
        <CTAArrow />
      </div>
    </div>
  </div>
);

const BackgroundShift = () => (
  <motion.span layoutId="bg-shift" className="absolute inset-0 -z-10 rounded-xl bg-a" />
);

const CTAArrow = () => (
  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
    {/* Your arrow SVG or design here */}
  </div>
);

const PricingSection: React.FC = () => (
  <div className="overflow-x-auto flex gap-4 py-4 md:overflow-visible">
    <PricingCard title="Selynt Plan" content="Affordable pricing tailored for small businesses." />
    <PricingCard title="The Others" content="Typical high-cost plans with extra fees." />
  </div>
);

const BrandingSection: React.FC = () => (
  <div className="overflow-x-auto flex gap-4 py-4 md:overflow-visible">
    <BrandingCard title="Selynt Branding" content="Custom branding solutions, simplified." />
    <BrandingCard title="Traditional Branding" content="Complex, high-cost traditional options." />
  </div>
);

const SlidePricing: React.FC = () => {
  const [selected, setSelected] = useState<'M' | 'A'>('M');

  return (
    <div className="flex flex-col items-center p-4 space-y-8 md:space-y-12">
      <Heading selected={selected} setSelected={setSelected} />
      <h2 className="text-2xl md:text-3xl font-bold">Compare Plans and Branding</h2>
      <PricingSection />
      <BrandingSection />
    </div>
  );
};

export default SlidePricing;
