import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "../store/addSlice";
import { IoMusicalNotes } from "react-icons/io5";

function PlaylistSongs({ playlist }) {
  const dispatch = useDispatch();
  const [audioMap, setAudioMap] = useState({});
  const handleAddSongs = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setAudioMap((prev) => ({
        ...prev,
        [file.name]: url,
      }));
      dispatch(
        addSongToPlaylist({
          playlistId: playlist.id,
          song: {
            id: Date.now() + Math.random(),
            name: file.name,
            type: file.type,
          },
        })
      );
    });
  };
  return (
    <div className="mt-3 pl-4 border-l">
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleAddSongs}
      />
      <ul className="mt-3 space-y-2">
        {playlist.songs.map((song) => (
          <li key={song.id} className="bg-gray-100 p-2 rounded">
          <IoMusicalNotes className='text-4xl flex-shrink-0' /> {song.name}

            {audioMap[song.name] ? (
              <audio
                controls
                src={audioMap[song.name]}
                className="w-full mt-2"
              />
            ) : (
              <p className="text-sm text-gray-500 mt-1">
                Reselect to play
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistSongs;
