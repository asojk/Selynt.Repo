import DotExpandButton from "./DotExpandButton";

export default function Blurb() {
  return (
    <div className="min-h-screen pt-36 flex flex-col items-center justify-center">
      




      <div className="container mx-auto px-6 py-12 text-center">
        

    <h2 className="text-4xl font-bold lg:text-5xl tracking-tight pb-6 text-a-dark dark:text-s">
      Coming soon...
        </h2>
        

    <h3 className="text-lg md:text-xl lg:text-2xl pb-4 text-n-9 dark:text-white">
      We empower small businesses to thrive in a market dominated by larger corporations.
        </h3>
        
        
    <p className="text-base md:text-lg lg:text-xl leading-relaxed text-n-8 dark:text-n-3 mx-auto pb-8">
      We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
        </p>
        








    <div className="mt-8">
      <DotExpandButton />
    </div>
  </div>
</div>

  );
}