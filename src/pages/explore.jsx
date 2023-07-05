import { useState, useEffect } from 'react'
import TrackList from '../components/track-list'
import useFetch from '../useFetch'

export default function Explore() {
	const [spotifyTracks, setSpotifyTracks] = useState([])
	const [youtubeMusicTracks, setYoutubeMusicTracks] = useState([])
	const [bandcampTracks, setBandcampTracks] = useState([])

	useEffect(() => {
		const handle = (backend, set) => {
			useFetch(`/${backend}/explore`)
				.then(data => {
					console.log(data)
					if (data.message) {
						set(data.message)
					} else {
						set(data.tracks)
					}
				})
		}

		handle("spotify", setSpotifyTracks)
		handle("yt-music", setYoutubeMusicTracks)
		handle("bandcamp", setBandcampTracks)
	}, [])

	return (
		<div className="block w-full col-start-2 col-span-4 p-2">
			<TrackList data={spotifyTracks} />
			<TrackList data={youtubeMusicTracks} />
			<TrackList data={bandcampTracks} />
		</div>
	)
}
