import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import { NotesContext } from "../store/notes-context";
import NoteItem from "../components/NoteItem";
import IconButton from "../components/IconButton";

const NoteDetailsScreen = ({ route, navigation }) => {
  const notesContext = useContext(NotesContext);
  const allNotes = notesContext.notes;

  const noteId = route.params.id;
  const currentNote = allNotes.find((note) => note.id === noteId);

  function deleteNoteHandler() {
    notesContext.deleteNote(noteId);
    navigation.goBack();
  }

  function editNoteHandler() {
    navigation.navigate("ManageNote", { id: noteId });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: currentNote.title,
      headerRight: () => {
        return (
          <>
            <IconButton
              onPress={editNoteHandler}
              icon={"create-outline"}
              color={"white"}
            />
            <IconButton
              onPress={deleteNoteHandler}
              icon={"trash-outline"}
              color={"white"}
            />
          </>
        );
      },
    });
  }, [navigation, currentNote.title]);

  return (
    <View>
      <NoteItem note={currentNote} homeScreen={false} />
    </View>
  );
};

export default NoteDetailsScreen;

const styles = StyleSheet.create({});
