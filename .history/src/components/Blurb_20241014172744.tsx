import DotExpandButton from "./DotExpandButton";
import { StickyCards } from "./StickyCards";


export default function Blurb() {
  return (
    <><div className="h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Coming soon...
        </h2>
        <p className="mt-4 block max-w-4xl text-gray-500 dark:text-gray-300">
          At Selynt, we empower small businesses to thrive in a market dominated by larger corporations.
        </p>
        <p className="mt-4 block max-w-4xl text-gray-500 dark:text-gray-300">
          We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
        </p>

        <div className="mt-6">
          <DotExpandButton />
        </div>
      </div>
    </div>
      <div className="mb-12 lg:mb-24 relative z-10">
        <h3 className="font-semibold text-5xl lg:text-7xl text-center mb-6">
          Pricing plans
        </h3>
        <p className="text-center mx-auto max-w-lg mb-8">
          Lorem ipsum dolor sit amet consectetur. Pulvinar eu rhoncus tincidunt
          eget mattis netus ridiculus.
        </p>
      </div></>

  );
}