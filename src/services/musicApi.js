import { createApi } from '@reduxjs/toolkit/query/react'
import axiosInstance from '../axiosInstance.js';

export const musicApi = createApi({
    reducerPath: "musicApi",
    baseQuery: axiosInstance,
    tagTypes: ['Like', 'History'],
    endpoints: (builder) => ({
        getTrackList: builder.query({
            query: () => `tracks/all`,
        }),
        getSpecificTrack: builder.query({
            query: (id) => `tracks/${id}/`,
        }),
        getAlbumList: builder.query({
            query: () => `albums/all/`
        }),
        getSpecificAlbum: builder.query({
            query: (id) => `albums/album/${id}`
        }),
        getArtistList: builder.query({
            query: () => `artists/`
        }),
        getSpecificArtist: builder.query({
            query: (id) => `artists/${id}/`
        }),
        getGenreList: builder.query({
            query: () => `genres/`
        }),
        getSpecificGenre: builder.query({
            query: (id) => `genres/${id}/`
        }),
        getUserPlaylists: builder.query({
            query: (username) => `playlist/user/${username}/`
        }),
        getAllPlaylists: builder.query({
            query: () => `playlist/all`
        }),
        getSpecificPlaylist: builder.query({
            query: (id) => `playlist/id/${id}`
        }),
        getSpecificPlaylistTracks: builder.query({
            query: (id) => `playlist/${id}/tracks/`
        }),
        createPlaylist: builder.mutation({
            query: (payload) => ({
                method: "POST",
                url: `playlist/`,
                data: payload,
            })
        }),
        addTrackToPlaylist: builder.mutation({
            query: (payload) => ({
                method: "POST",
                url: `playlist/tracks/`,
                data: payload,
            })
        }),
        getLikedSongs: builder.query({
            query: () => ({
                method: "get",
                url: `likedsongs/`,
            }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Like', id })), 'Like']
                    : ['Like'],
            // id here refers to the id of track in json data, so it is uniquely tagged
        }),
        isLiked: builder.query({
            query: (title) => ({
                method: "get",
                url: `tracks/is-liked-by/${title}`,
            })
        }),
        likeSong: builder.mutation({
            query: (trackid) => ({
                method: "post",
                url: `likedsongs/`,
                data: { track: trackid },
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Like', id: arg }],
        }),
        unlikeSong: builder.mutation({
            query: (trackid) => ({
                method: "delete",
                url: `likedsongs/`,
                data: { track: trackid },
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Like', id: arg }],
        }),
        getHistory: builder.query({
            query: () => ({
                method: "get",
                url: `history/`,
            }),
            providesTags: ['History']
        }),
        addToHistory: builder.mutation({
            query: (trackid) => ({
                method: "post",
                url: `history/`,
                data: { track: trackid },
            }),
            invalidatesTags: ['History'],
        }),
        searchTrack: builder.query({
            query: (search_term) => ({
                method: "get",
                url: `search/track/?search=${search_term}`
            })
        }),
        searchAlbum: builder.query({
            query: (search_term) => ({
                method: "get",
                url: `search/album/?search=${search_term}`
            })
        }),
        searchArtist: builder.query({
            query: (search_term) => ({
                method: "get",
                url: `search/artist/?search=${search_term}`
            })
        })
    })
})

export const {
    useGetTrackListQuery,
    useGetSpecificTrackQuery,
    useGetAlbumListQuery,
    useGetSpecificAlbumQuery,
    useGetArtistListQuery,
    useGetSpecificArtistQuery,
    useGetGenreListQuery,
    useGetSpecificGenreQuery,
    useGetUserPlaylistsQuery,
    useGetAllPlaylistsQuery,
    useGetSpecificPlaylistQuery,
    useGetSpecificPlaylistTracksQuery,
    useCreatePlaylistMutation,
    useAddTrackToPlaylistMutation,
    useGetLikedSongsQuery,
    useIsLikedQuery,
    useLikeSongMutation,
    useUnlikeSongMutation,
    useGetHistoryQuery,
    useAddToHistoryMutation,
    useSearchTrackQuery,
    useSearchAlbumQuery,
    useSearchArtistQuery } = musicApi;

// Mutations are used to send data updates to the server and apply the changes to the local cache.
// Mutations can also invalidate cached data and force re-fetches.