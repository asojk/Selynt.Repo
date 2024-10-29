import BreathingExercise from '@/components/Breathing'
import SlidePricing from '@/components/Prices'

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-24 xl:py-32">
        <BreathingExercise />
      </section>
      <SlidePricing />
    </div>
  )
}

export default Pricing