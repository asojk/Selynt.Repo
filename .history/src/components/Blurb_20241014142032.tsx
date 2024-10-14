import BeamInput from "./others/BeamInput";

export default function Blurb() {
  return (
    <div className="">
      <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Coming soon...
        </h2>
        <p className="mt-4 block max-w-4xl text-gray-500 dark:text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure tenetur commodi ipsam error voluptate magni.
          Adipisci repudiandae ullam commodi iusto reprehenderit suscipit facere voluptatem, eaque maiores minima. Neque,
          officiis.
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