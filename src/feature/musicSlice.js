import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid4 } from 'uuid';

const storedQueue = JSON.parse(localStorage.getItem("queue"))
console.log("Getting state")

const initialState = storedQueue ? {
    queue: storedQueue,
    isPlaying: false,
    currentlyPlayingIndex: 0,
} : {
    queue: [],
    isPlaying: false,
    currentlyPlayingIndex: 0,
};


export const queueSlice = createSlice({
    name: 'queue',
    initialState,
    reducers: {
        addMultipleTracks: (state, action) => {
            // don't use this, this needs to be fixed
            state.queue.push(...action.payload)
            //remove duplicates
            state.queue = state.queue.filter((track, title, self) =>
                title === self.findIndex((t) => (
                    t.title === track.title
                ))
            )
            localStorage.setItem("queue", JSON.stringify(state.queue))
        },
        addTrack: (state, action) => {
            state.queue.push(action.payload[0])
            //remove duplicated
            state.queue = state.queue.filter((track, title, self) =>
                title === self.findIndex((t) => (
                    t.title === track.title
                ))
            )
            localStorage.setItem("queue", JSON.stringify(state.queue))
        },
        removeTrack: (state, action) => {
            state.queue = state.queue.filter(function (track) {
                return track.title !== action.payload.title;
            })
        },
        clearQueue: (state) => {
            state.queue = []
        },
        nextTrack: (state) => {
            let temp = state.currentlyPlayingIndex
            temp += 1
            if (temp > state.queue.length - 1)
                temp = 0
            state.currentlyPlayingIndex = temp
        },
        prevTrack: (state) => {
            let temp = state.currentlyPlayingIndex
            temp -= 1
            if (temp < 0)
                temp = state.queue.length - 1
            state.currentlyPlayingIndex = temp
        },
        addPlayTrack: (state, action) => {
            state.queue.push(action.payload[0])
            state.queue.reverse()
            // remove duplicated
            state.queue = state.queue.filter((track, title, self) =>
            title === self.findIndex((t) => (
                    t.title === track.title
                ))
            )
            state.queue.reverse()
            state.currentlyPlayingIndex = state.queue.findIndex(t => t.title=== action.payload[0].title)
            localStorage.setItem("queue", JSON.stringify(state.queue))
        },
        playTrack: (state) => {
            state.isPlaying = true
        },
        pauseTrack: (state) => {
            state.isPlaying = false
        },
        setPlayIndex: (state, action) => {
            state.currentlyPlayingIndex = action.payload
        }
    },
})


export const {
    addMultipleTracks,
    addTrack,
    removeTrack,
    clearQueue,
    nextTrack,
    prevTrack,
    playTrack,
    addPlayTrack,
    pauseTrack,
    setPlayIndex } = queueSlice.actions

export const selectQueue = (state) => state.queue.queue
export const selectIsPlaying = (state) => state.queue.isPlaying
export const selectCurrentlyPlayingIndex = (state) => state.queue.currentlyPlayingIndex;
export const selectCurrentTrackData = (state) => state.queue.queue[state.queue.currentlyPlayingIndex]

export default queueSlice.reducer;