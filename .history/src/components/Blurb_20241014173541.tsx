import DotExpandButton from "./DotExpandButton";

export default function Blurb() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="container mx-auto items-center px-4 py-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Coming soon...
        </h2>
          <h3 className="font-semibold text-5xl lg:text-7xl text-center mb-6">
            we empower small businesses to thrive in a market dominated by larger corporations.
            </h3>
        <p className="mt-4 block text-gray-500 dark:text-gray-300 font-semibold text-5xl lg:text-7xl text-center mx-auto max-w-lg mb-8">
        We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
        </p>
        <div className="mt-6">
          <DotExpandButton />
        </div>
      </div>
    </div>
  );
}