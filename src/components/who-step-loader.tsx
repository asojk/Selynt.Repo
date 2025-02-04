import { useState } from 'react'
import { MultiStepLoader as Loader } from '@/components/ui/loader'
import { useKbdOutside } from '@/hooks/use-kbd-or-outside'
import { CloseButton } from './ui/close-icon'

const loadingStates = [
  { text: 'Are you a solo professional, hobbyist, or small-business owner?', },
  { text: 'Would a modern, polished site help showcase your services, products, or portfolio?', },
  { text: 'Do you need a simple site without constant updates or unnecessary extras?', },
  { text: 'Are you looking for a cost-effective solution?', },
]

export function WhoStepLoader() {
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(false)
  const closeLoader = () => setLoading(false)
  const ref = useKbdOutside(loading, closeLoader)

  const handleButtonClick = () => {
    setInitialLoading(false)
    setTimeout(() => {
      setInitialLoading(false)
      setLoading(true)
    }, 300) // Show initial loading for 500ms
  }

  return (
    <div ref={ref} className="flex w-full md:w-[85vw] lg:w-[65vw] py-8 items-center justify-center z-[9]">
      {initialLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-[101]">
          <div className="text-a text-4xl">...</div>
        </div>
      )}

      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      <button
        onClick={handleButtonClick}
        disabled={initialLoading}
        className={`mx-auto flex h-12 items-center justify-center rounded-lg px-8 text-base font-black text-white transition duration-200 md:text-lg ${
          initialLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-red hover:bg-red/90'
        }`}
        style={{
          boxShadow: '0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset',
        }}>
        {initialLoading ? 'Loading...' : 'Is this for you?'}
      </button>

      {loading && (
        <CloseButton onClick={() => setLoading(false)} />
      )}
    </div>
  )
}