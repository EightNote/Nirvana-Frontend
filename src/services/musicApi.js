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
        createTrack: builder.mutation({
            query: (payload) => ({
                method: "POST",
                url: `tracks/`,
                data: payload,
            })
        }),
        createAlbum: builder.mutation({
            query: (payload) => ({
                method: "POST",
                url: `albums/`,
                data: payload,
            })
        }),
        getAlbumList: builder.query({
            query: () => `albums/all/`
        }),
        getSpecificAlbum: builder.query({
            query: (id) => `albums/album/${id}`
        }),
        getAlbumDetails: builder.query({
            query: (id) => `albums/details/${id}`
        }),
        isAlbumLiked: builder.query({
            query: (id) => `albums/is-liked-by/${id}`
        }),
        toggleLikeAlbum: builder.mutation({
            query: (id) => ({
                method: "POST",
                url: `albums/toggle-like/${id}`,
            }),
        }),
        getArtistList: builder.query({
            query: () => `artists/`
        }),
        getSpecificArtist: builder.query({
            query: (id) => `artists/${id}/`
        }),
        getGenreList: builder.query({
            query: () => `genre/`
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
            }),
            providesTags: (result, error, title) => [{ type: 'Like', title }],
        }),
        toggleLikeSong: builder.mutation({
            query: (title) => ({
                method: "post",
                url: `tracks/toggle-like/${title}`,
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
    useCreateTrackMutation,
    useGetAlbumListQuery,
    useGetSpecificAlbumQuery,
    useIsAlbumLikedQuery,
    useToggleLikeAlbumMutation,
    useGetArtistListQuery,
    useGetSpecificArtistQuery,
    useCreateAlbumMutation,
    useGetAlbumDetailsQuery,
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
    useToggleLikeSongMutation,
    useGetHistoryQuery,
    useAddToHistoryMutation,
    useSearchTrackQuery,
    useSearchAlbumQuery,
    useSearchArtistQuery } = musicApi;

// Mutations are used to send data updates to the server and apply the changes to the local cache.
// Mutations can also invalidate cached data and force re-fetches.