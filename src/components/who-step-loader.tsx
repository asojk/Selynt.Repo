import { useState } from 'react'
import { MultiStepLoader as Loader } from '@/components/ui/loader'
import { IconSquareRoundedX } from '@tabler/icons-react'

const loadingStates = [
  { text: 'Are you a solo professional, hobbyist, or small-business owner?', },
  { text: 'Would a modern, polished site help showcase your services, products, or portfolio?', },
  { text: 'Do you need a simple site without constant updates or unnecessary extras?', },
  { text: 'Are you looking for a cost-effective solution?', },
]

export function WhoStepLoader() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex w-full md:w-[85vw] lg:w-[65vw] py-12 items-center justify-center z-[9]">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      <button
        onClick={() => setLoading(true)}
        className="mx-auto flex h-12 items-center justify-center rounded-lg bg-red px-8 text-base font-black text-white transition duration-200 hover:bg-red/90 md:text-lg"
        style={{
          boxShadow: '0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset',
        }}>
        Is this for you?
      </button>

      {loading && (
        <button className="fixed right-4 top-4 z-[120] text-black dark:text-white" onClick={() => setLoading(false)}>
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  )
}