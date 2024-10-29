
export default function TestSection() {
  return (
<>
<section className="py-32">
  <div className="container">
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
      <h2 className="text-pretty text-4xl font-bold lg:text-6xl">Pricing</h2>
      <p className="text-gray-600 lg:text-xl">Check out our affordable pricing plans</p>
buttons
      <div className="flex flex-col items-stretch gap-6 md:flex-row">
card 1
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex w-80 flex-col justify-between text-left">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              <p>Plus</p>
            </h3>
            <p className="text-sm text-gray-600">For personal use</p>
            <span className="text-4xl font-bold">$19</span>
            <p className="text-gray-600">
              Billed
              { /* */ }$228{ /* */ }
              anually
            </p>
          </div>
          <div className="p-6 pt-0">
            <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full mb-6" />
list w p-y-4
          </div>
          <div className="flex items-center p-6 pt-0 mt-auto">
button
          </div>
        </div>
card 2
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex w-80 flex-col justify-between text-left">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              <p>Pro</p>
            </h3>
            <p className="text-sm text-gray-600">For professionals</p>
            <span className="text-4xl font-bold">$49</span>
            <p className="text-gray-600">
              Billed
              { /* */ }$588{ /* */ }
              anually
            </p>
          </div>
          <div className="p-6 pt-0">
            <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full mb-6" />
            <p className="mb-3 text-lg font-semibold">Everything in Plus, and:</p>
list w p-y-4
          </div>
          <div className="flex items-center p-6 pt-0 mt-auto">
button
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}


// Apply a minimum height to the PriceCard component
const PriceCard = ({ title, selected, oneTimePrice, yearlyPrice, listItems }: PriceCardProps) => (
  <div className="mx-auto flex w-2/3 flex-shrink-0 flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-3 text-n-900 shadow-md dark:bg-n-900 dark:text-white md:w-1/3 md:p-4 lg:grid lg:h-[600px] lg:grid-rows-[auto_1fr_auto] lg:p-6 min-h-[600px]">
  // ...rest of the code
)

// Remove the height from the BrandingCard component if it's causing issues
const BrandingCard = ({ title, price, listItems }: BrandingCardProps) => (
  <div className="flex w-64 flex-col justify-between gap-4 rounded-xl border-[1px] border-slate-300 bg-white p-6 text-n-900 shadow-md dark:bg-n-900 dark:text-white">
  // ...rest of the code
)