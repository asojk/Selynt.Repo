import BeamInput from "./others/BeamInput";

export default function Blurb() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
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
          <BeamInput />
          <button className='rounded mt-8 bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600'>
Sign up for updates
</button>
        </div>
      </div>
    </div>
  );
}