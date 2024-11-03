import { motion } from 'framer-motion';

const ValuePropositionSection = () => {
  return (
    <section className="relative h-screen w-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center px-8">
      {/* Clear Title and Mission Statement */}
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Boost Credibility with a Clear Identity
        </h2>
        <p className="text-lg md:text-xl text-secondary mt-4">
          Marketing without the BS
        </p>
      </motion.div>

      {/* Description and Value Text */}
      <motion.div
        className="mt-8 text-center text-gray-700 dark:text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
      >
        <p className="text-base md:text-lg">
          At Selynt, we empower small businesses to thrive in a market dominated by larger corporations.
        </p>
        <p className="text-base md:text-lg mt-2">
          We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
        </p>
      </motion.div>

      {/* Clear Price Comparison */}
      <motion.div
        className="mt-12 w-full max-w-md bg-accent text-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
      >
        <h3 className="text-xl font-semibold text-center">Affordable Pricing</h3>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-base">Selynt Services</p>
          <p className="text-2xl font-bold">$500</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-base">Traditional Agencies</p>
          <p className="text-2xl font-bold line-through opacity-70">$3000+</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuePropositionSection;