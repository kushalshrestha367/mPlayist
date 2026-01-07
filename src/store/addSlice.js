import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "music",
  initialState: {
    playlists: [],
    activePlaylistId: null,
  },
  reducers: {
    createPlaylist: (state, action) => {
      state.playlists.push({
        id: Date.now(),
        name: action.payload,
        songs: [],
      });
    },

    togglePlaylist: (state, action) => {
      state.activePlaylistId =
        state.activePlaylistId === action.payload ? null : action.payload;
    },

    deletePlaylist: (state, action) => {
      state.playlists = state.playlists.filter((p) => p.id !== action.payload);
      if (state.activePlaylistId === action.payload) {
        state.activePlaylistId = null;
      }
    },

    addSongToPlaylist: (state, action) => {
      const { playlistId, song } = action.payload;
      const playlist = state.playlists.find((p) => p.id === playlistId);
      if (playlist) {
        playlist.songs.push({
          id: song.id,
          name: song.name,
          type: song.type,
        });
      }
    },
  },
});

export const {
  createPlaylist,
  togglePlaylist,
  deletePlaylist,
  addSongToPlaylist,
} = addSlice.actions;

export default addSlice.reducer;

export const selectPlaylists = (state) => state.music.playlists;
export const selectActivePlaylistId = (state) => state.music.activePlaylistId;
