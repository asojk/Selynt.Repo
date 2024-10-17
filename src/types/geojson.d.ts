declare module '*.geojson' {
	const value: import('geojson').FeatureCollection // Use FeatureCollection type
	export default value
}
