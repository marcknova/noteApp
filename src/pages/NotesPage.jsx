import React, { useState, useEffect } from "react";
import NoteList from "../components/Notes/NoteList";
import NoteForm from "../components/Notes/NoteForm";
import { useNotes } from "../services/NoteContext";

const NotesPage = () => {
  const { notes, addNote, updateNote, deleteNote, fetchNotes } = useNotes();
  const [currentNote, setCurrentNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (note = null) => {
    setCurrentNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSaveNote = (note) => {
    if (note.id) {
      updateNote(note);
    } else {
      addNote(note);
    }
    setCurrentNote(null);
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-56 text-center p-10">
        <h1 className="p-8 text-4xl font-bold">Mis Notas</h1>
        <button
          className="bg-white font-bold w-36 p-2 rounded-lg"
          onClick={() => openModal()}
        >
          Agregar Nota
        </button>
        <NoteForm
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onSave={handleSaveNote}
        />
      </div>
      <div>
        <h1 className="font-bold mx-10 p-5">Todas las notas</h1>
        <NoteList notes={notes} onEdit={handleEditNote} onDelete={deleteNote} />
      </div>
    </div>
  );
};

export default NotesPage;
