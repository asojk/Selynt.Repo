import BeamInput from "./others/BeamInput";

export default function Blurb() {
  return (
    <div className="bg-white dark:bg-gray-900">
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
          <button className='rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600'>
Sign up for updates
</button>
        </div>
      </div>
    </div>
  );
}

<div className='mx-auto mt-12 w-2/3 text-lg'>
At Selynt, we empower small businesses to thrive... (or whatever sentence we decide on)
</div>
<div className='mt-4'>Coming soon...</div>
<button className='rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600'>
Sign up for updates
</button>

<div className='flex flex-col items-center justify-center space-y-12 px-1 pb-12 pt-12 md:space-y-16 lg:space-y-24 lg:px-12'></div>