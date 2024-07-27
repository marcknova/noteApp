import { createContext, useContext, useState } from "react";
import { db } from "../utils/firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();

  const fetchNotes = async () => {
    if (user) {
      const q = query(
        collection(db, "notas"),
        where("id_user", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      const notesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesData);
    }
  };

  const addNote = async (note) => {
    if (user) {
      const newNote = { ...note, id_user: user.uid };
      try {
        const docRef = await addDoc(collection(db, "notas"), newNote);
        setNotes((prevNotes) => [...prevNotes, { id: docRef.id, ...newNote }]);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const updateNote = async (updatedNote) => {
    const noteId = String(updatedNote.id);
    const noteRef = doc(db, "notas", noteId);
    await updateDoc(noteRef, {
      titulo: updatedNote.titulo,
      descripcion: updatedNote.descripcion,
    });
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const deleteNote = async (noteId) => {
    await deleteDoc(doc(db, "notas", noteId));
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <NotesContext.Provider
      value={{ notes, updateNote, addNote, deleteNote, fetchNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
