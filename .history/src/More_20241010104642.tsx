
export const More = () => (
<>

<div className="min-h-screen bg-black relative flex flex-col justify-end items-center">
  { /* Floating Orb */ }
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
    <div className="w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-80 animate-float" />
  </div>

  { /* Text at the Bottom */ }
  <div className="text-center mb-8">
    <h1 className="text-4xl font-semibold text-white">Types for Tailwind-CSS config</h1>
    <p className="text-gray-300 mt-2">How to use Typescript types for Tailwind-CSS</p>
  </div>
</div>

<div className="min-h-screen bg-gray-900 text-white font-sans">
  <div className="max-w-3xl mx-auto p-6">
    { /* Header Section */ }
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold text-gray-100">TypeScript for Tailwind CSS Config</h1>
      <p className="text-gray-400 mt-2">Posted on October 5, 2024</p>
    </header>

    { /* Article Content */ }
    <article className="prose prose-invert prose-lg max-w-none">
      <p>
        Tailwind CSS is a utility-first CSS framework that allows you to build modern UIs...
      </p>
      
      { /* Code block example */ }
      <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">        <code>
          module.exports = { /*$merge: {
                                         theme: {
                                           extend: {},
                                         },
                                         plugins: [],
                                       }*/ }
        </code>
      </pre>

      <p>
        You can extend the Tailwind config using TypeScript...
      </p>
      
      { /* Subheadings */ }
      <h2 className="text-2xl font-semibold text-gray-100 mt-8">Setting Up TypeScript</h2>
      <p>
        To set up TypeScript with Tailwind CSS, follow these steps:
      </p>
      { /* More content */ }
    </article>
  </div>
</div>
</>
);
