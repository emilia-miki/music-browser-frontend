import { rest, setupWorker } from "msw";

const track = {
	url: "https://music.youtube.com/watch?v=WXuVGTlasC4&list=OLAK5uy_l5UQGLspUeqDKDIwLSuyVNeIMdE593el0",
	imageUrl: "https://www.metal-archives.com/images/1/0/9/4/1094130.jpg?3459",
	albumUrl: "https://music.youtube.com/browse/MPREb_AOBS6uUAmis",
	name: "Equus",
	durationSeconds: 750,
}

const handlers = [
	rest.get("http://localhost:5173/spotify/explore", (req, res, ctx) => res(ctx.json({ tracks: [track] * 5 }))),
	rest.get("http://localhost:5173/yt-music/explore", (req, res, ctx) => res(ctx.json({ tracks: [track] * 5 }))),
	rest.get("http://localhost:5173/bandcamp/explore", (req, res, ctx) => res(ctx.json({ tracks: [track] * 5 }))),
]

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
