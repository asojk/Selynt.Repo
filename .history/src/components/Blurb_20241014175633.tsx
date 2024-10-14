import DotExpandButton from "./DotExpandButton";

export default function Blurb() {
  return (
    <div className="h-screen pt-36">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold lg:text-5xl tracking-tight pb-4 text-a-dark text-center dark:text-s">
          Coming soon...
        </h2>
          <h3 className="font-semibold text-xl lg:text-2xl text-center pb-8 text-n-9 dark:text-white mx-auto justify-center max-w-lg">
            We empower small businesses to thrive in a market dominated by larger corporations.
            </h3>
        <p className="mt-4 block text-n-8 dark:text-n-3 font-semibold text-lg lg:text-xl mx-auto mb-8">
        We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
        </p>
        <div className="mt-6">
          <DotExpandButton />
        </div>
      </div>
    </div>
  );
}