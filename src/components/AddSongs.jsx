import React from "react";
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "../store/addSlice";
import { IoMusicalNotes } from "react-icons/io5";

function AddSongs({ playlist }) {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      dispatch(
        addSongToPlaylist({
          playlistId: playlist.id,
          song: {
            id: Date.now() + Math.random(),
            name: file.name,
            url: URL.createObjectURL(file),
          },
        })
      );
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">{playlist.name}</h2>
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileChange}
      />
      <ul className="mt-4 space-y-2">
        {playlist.songs.map((song) => (
          <li key={song.id} className="p-2 bg-gray-100 rounded">
            <IoMusicalNotes className='text-4xl flex-shrink-0' /> {song.name}
            <audio controls src={song.url} className="w-full mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AddSongs;
