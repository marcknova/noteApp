import React from "react";

const colors = [
  "bg-blue-100",
  "bg-green-100",
  "bg-green-300",
  "bg-green-400",
  "bg-yellow-100",
  "bg-red-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-gray-100",
  "bg-black",
  "bg-gray-50",
  "bg-gray-100",
  "bg-gray-200",
  "bg-gray-300",
];

const NoteItem = ({ note, onEdit, onDelete, index }) => {
  const colorClass = colors[index % colors.length];

  return (
    <div
      className={`p-6 rounded-md shadow-md md:w-[35rem] mx-12 ${colorClass}`}
    >
      <h3 className="text-xl font-bold p-3">{note.titulo}</h3>
      <p className="p-3">{note.descripcion}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => onEdit(note)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
