export default function TrackPreview(props) {
	<div className="flex flex-col h-full w-full bg-black text-purple-800">
		<b>{props.track.name}</b>
		<img src={props.track.imageUrl} />
		<a href={props.track.artistUrl}>Artist</a>
		<a href={props.track.albumUrl}>Album</a>
		<p>duration: {props.track.durationSeconds}s</p>
	</div>
}
