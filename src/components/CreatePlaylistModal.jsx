import React, { useState } from "react";

function CreatePlaylistModal({ onClose, onCreate }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Create New Playlist</h2>

        <input
          type="text"
          placeholder="Playlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-3 py-1 border rounded">
            cancel
          </button>

          <button
            onClick={() => {
              if (name.trim()) onCreate(name);
            }}
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylistModal;
