import TrackPreview from './track-preview'

export default function TrackList(props) {
	if (!props.data) {
		return "what?"
	}
	if (props.data instanceof String) {
		return <>{props.data}</>
	}

	return (
		<div className="flex flex-row">
			{props.data.map(track => <TrackPreview data={track} />)}
		</div>
	)
}
