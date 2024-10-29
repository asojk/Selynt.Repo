
export default function TestSection2() {
  return (
<>
<section className="py-32">
  <div className="container">
    <div className="mx-auto flex max-w-screen-xl flex-col gap-6">
      <h2 className="text-pretty text-4xl font-bold lg:text-6xl">Pricing</h2>
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <p className="max-w-screen-md text-gray-600 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odio, expedita neque
          ipsum pariatur suscipit!
        </p>
        <div className="flex h-11 w-fit shrink-0 items-center rounded-md bg-gray-100 p-1 text-lg">
          <div role="radiogroup" aria-required="false" dir="ltr" className="grid gap-2 h-full grid-cols-2" tabIndex={-1} style={{ outline: "none" }}>
            <div className="h-full rounded-md transition-all">
              <button type="button" role="radio" aria-checked="true" data-state="checked" value="monthly" className="aspect-square h-4 w-4 rounded-full border border-primary text-gray-800 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" id="monthly" tabIndex={-1} data-radix-collection-item="">
                <span data-state="checked" className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current">
                    <circle cx="12" cy="12" r="10" />
                  </svg></span></button><input type="radio" aria-hidden="true" style={{ transform: "translateX(-100%)", position: "absolute", pointerEvents: "none", opacity: "0", margin: "0" }} tabIndex={-1} checked={true} value="monthly" /><label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex h-full cursor-pointer items-center justify-center px-7 font-semibold text-gray-600 peer-data-[state=checked]:text-gray-800" htmlFor="monthly">Monthly</label>
            </div>
            <div className="h-full rounded-md transition-all">
              <button type="button" role="radio" aria-checked="false" data-state="unchecked" value="annually" className="aspect-square h-4 w-4 rounded-full border border-primary text-gray-800 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" id="annually" tabIndex={-1} data-radix-collection-item="" /><input type="radio" aria-hidden="true" style={{ transform: "translateX(-100%)", position: "absolute", pointerEvents: "none", opacity: "0", margin: "0" }} tabIndex={-1} value="annually" /><label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold text-gray-600 peer-data-[state=checked]:text-gray-800" htmlFor="annually">Yearly</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
        <div className="flex w-full flex-col rounded-lg border p-6 text-left">
          <div className="items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-black/80 mb-8 block w-fit">
            FREE
          </div>
          <span className="text-4xl font-medium">$0</span>
          <p className="invisible text-gray-600">Per month</p>
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-6" />
          <div className="flex flex-col justify-between gap-20">
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Unlimited Integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Windows, Linux, Mac support</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>24/7 Support</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Free updates</span>
              </li>
            </ul>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full">
              Get Started for free
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col rounded-lg border p-6 text-left">
          <div className="items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-black/80 mb-8 block w-fit">
            PRO
          </div>
          <span className="text-4xl font-medium">$9</span>
          <p className="text-gray-600">Per month</p>
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-6" />
          <div className="flex h-full flex-col justify-between gap-20">
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Everything in FREE</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Live call suport every month</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Unlimited Storage</span>
              </li>
            </ul>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full">
              Upgrade to PRO
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col rounded-lg border bg-gray-100 p-6 text-left">
          <div className="items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-black/80 mb-8 block w-fit">
            ENTERPRISE
          </div>
          <span className="text-4xl font-medium">$19</span>
          <p className="text-gray-600">Per user/month</p>
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-6" />
          <div className="flex h-full flex-col justify-between gap-20">
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Everything in PRO</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Custom branding</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg><span>Unlimited users</span>
              </li>
            </ul>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full">
              Upgrade to Enterprise
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}