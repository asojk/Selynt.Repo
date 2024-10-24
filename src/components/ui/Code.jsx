/* eslint-disable react/jsx-no-comment-textnodes */
/** @format */

export default function Code() {
	return (
		<div className="ml-auto text-left mockup-code bg-p max-w-64">
			<pre data-prefix="$">
				<code>pnpm i client.tsx</code>
			</pre>
			<pre data-prefix="" className="text-xs italic leading-8 text-n-5/80">
				<code>// not actually this simple</code>
			</pre>
			<pre data-prefix=">" className="text-warning">
				<code>installing...</code>
			</pre>
			<pre data-prefix=">" className="text-success">
				<code>Done!</code>
			</pre>
		</div>
	)
}