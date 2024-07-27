import NoteItem from "./NoteItem";
import NoteEditModal from "./NoteEdit";
import { useState } from "react";

const NoteList = ({ notes, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const openModal = (note) => {
    setCurrentNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentNote(null);
  };

  const handleSave = (updatedNote) => {
    onEdit(updatedNote);
  };

  return (
    <div className="flex flex-wrap">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={() => openModal(note)}
          onDelete={onDelete}
        />
      ))}
      <NoteEditModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        currentNote={currentNote}
        onSave={handleSave}
      />
    </div>
  );
};

export default NoteList;
