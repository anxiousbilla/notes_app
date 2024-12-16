import { createContext, useState } from "react";

const DUMMY_NOTES = [
  {
    id: 1,
    title: "Note 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Note 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Note 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

// Creating context
export const NotesContext = createContext();

// Creating Provider Component
export default function NotesContextProvider({ children }) {
  const [notes, setNotes] = useState(DUMMY_NOTES);

  function addNote(noteId, noteTitle, noteDescription) {
    const newNote = {
      id: noteId,
      title: noteTitle,
      description: noteDescription,
    };
    setNotes([...notes, newNote]);
  }

  function updateNote(noteId, noteTitle, noteDescription) {
    const updatedNotes = [...notes];
    const index = updatedNotes.findIndex((note) => note.id === noteId);
    updatedNotes[index].title = noteTitle;
    updatedNotes[index].description = noteDescription;
    setNotes(updatedNotes);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  const value = {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
}
