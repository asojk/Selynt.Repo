import DotExpandButton from "./DotExpandButton";

export default function Blurb() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-n-9 xl:text-4xl dark:text-white">
          Coming soon...
        </h2>
          <h3 className="font-semibold text-xl lg:text-2xl text-center mb-6 text-n-9 dark:text-s">
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