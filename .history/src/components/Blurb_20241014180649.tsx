import DotExpandButton from "./DotExpandButton";

export default function Blurb() {
  return (
    <div className="min-h-screen pt-36 flex flex-col items-center justify-center">
      




      <div className="container mx-auto px-6 py-12 text-center">
        

    <h2 className="text-4xl font-extrabold lg:text-5xl tracking-tight pb-6 text-a-dark dark:text-s">
      Coming soon...
        </h2>
        

    <h3 className="font-medium text-xl lg:text-2xl pb-6 text-n-9 dark:text-white mx-auto max-w-lg">
      We empower small businesses to thrive in a market dominated by larger corporations.
        </h3>
        
        
    <p className="text-lg lg:text-xl text-n-8 dark:text-n-3 leading-relaxed mx-auto max-w-xl">
      We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
        </p>
        








    <div className="mt-8">
      <DotExpandButton />
    </div>
  </div>
</div>

  );
}