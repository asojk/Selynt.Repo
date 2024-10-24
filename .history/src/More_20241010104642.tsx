/** @format */

export const More = () => (
	<>
		<div className="relative flex min-h-screen flex-col items-center justify-end bg-black">
			{/* Floating Orb */}
			<div className="absolute left-1/2 top-0 -translate-x-1/2 transform">
				<div className="h-96 w-96 animate-float rounded-full bg-yellow-500 opacity-80 blur-3xl filter" />
			</div>

			{/* Text at the Bottom */}
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-semibold text-white">Types for Tailwind-CSS config</h1>
				<p className="mt-2 text-gray-300">How to use Typescript types for Tailwind-CSS</p>
			</div>
		</div>

		<div className="min-h-screen bg-gray-900 font-sans text-white">
			<div className="mx-auto max-w-3xl p-6">
				{/* Header Section */}
				<header className="mb-12 text-center">
					<h1 className="text-4xl font-bold text-gray-100">TypeScript for Tailwind CSS Config</h1>
					<p className="mt-2 text-gray-400">Posted on October 5, 2024</p>
				</header>

				{/* Article Content */}
				<article className="prose prose-lg prose-invert max-w-none">
					<p>Tailwind CSS is a utility-first CSS framework that allows you to build modern UIs...</p>

					{/* Code block example */}
					<pre className="overflow-x-auto rounded-md bg-gray-800 p-4 text-sm">
						{' '}
						<code>
							module.exports ={' '}
							{/*$merge: {
                                         theme: {
                                           extend: {},
                                         },
                                         plugins: [],
                                       }*/}
						</code>
					</pre>

					<p>You can extend the Tailwind config using TypeScript...</p>

					{/* Subheadings */}
					<h2 className="mt-8 text-2xl font-semibold text-gray-100">Setting Up TypeScript</h2>
					<p>To set up TypeScript with Tailwind CSS, follow these steps:</p>
					{/* More content */}
				</article>
			</div>
		</div>
	</>
)
