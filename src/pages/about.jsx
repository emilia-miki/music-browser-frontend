export default function About() {
  return (
    <div className="block w-full col-start-2 col-span-4 text-justify p-2">
      <p>This is a frontend for <a href="https://github.com/emilia-miki/music-browser" className="inline">music-browser</a>. It's intended to be an integration layer to browse <a href="https://spotify.com">Spotify</a>, <a href="https://music.youtube.com">Youtube Music</a> and <a href="https://bandcamp.com">Bandcamp</a>, because I'm annoyed by constantly having to switch between Spotify and Bandcamp (because usually only one of them has the music I want) and I dislike the default bandcamp player and how it functions.</p>
      <p>About the legal implications of the <a href="/library">Library</a> section of this application: yes, as far as I know it would be illegal (administratively, not criminally) to deploy this application in a working state for public use or commercially. But as long as the data is mocked or I use it privately it's fine, because I don't share copyrighted music that way. I just made myself a comfortable interface for the services I use.</p>
      <p><b>The backend is incomplete and not deployed, so for now all the data on this page is mocked.</b></p>
      <p>The source code of this page is <a href="https://github.com/emilia-miki/music-browser-frontend">on github</a>.</p>
    </div>
  )
}
