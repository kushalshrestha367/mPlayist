import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlaylist,
  togglePlaylist,
  deletePlaylist,
  selectPlaylists,
  selectActivePlaylistId,
} from "../store/addSlice";
import CreatePlaylistModal from "../components/CreatePlaylistModal";
import PlaylistSongs from "../components/PlaylistSongs";

function Home() {
  const dispatch = useDispatch();
  const playlists = useSelector(selectPlaylists);
  const activePlaylistId = useSelector(selectActivePlaylistId);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-200 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">My Playlists</h2>
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              + New Playlist
            </button>
          </div>
          <ul className="space-y-3">
            {playlists.map((playlist) => (
              <li key={playlist.id} className="border rounded p-3">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => dispatch(togglePlaylist(playlist.id))}
                    className="font-medium"
                  >
                    🎶 {playlist.name}
                  </button>
                  <button
                    onClick={() => dispatch(deletePlaylist(playlist.id))}
                    className="text-red-500 text-sm"
                  >
                    Delete
                  </button>
                </div>
                {activePlaylistId === playlist.id && (
                  <PlaylistSongs playlist={playlist} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showModal && (
        <CreatePlaylistModal
          onClose={() => setShowModal(false)}
          onCreate={(name) => {
            dispatch(createPlaylist(name));
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

export default Home;
