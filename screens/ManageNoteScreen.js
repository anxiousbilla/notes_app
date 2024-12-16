import { useLayoutEffect, useContext, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";

import { NotesContext } from "../store/notes-context";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/IconButton";

const ManageNoteScreen = ({ route, navigation }) => {
  const notesContext = useContext(NotesContext);
  const allNotes = notesContext.notes;

  const addNoteScreen = route.params.addNoteScreen;
  const noteId = addNoteScreen ? allNotes.length + 1 : route.params.id;
  const currentNote = addNoteScreen
    ? ""
    : allNotes.find((note) => note.id === noteId);
  const screenTitle = addNoteScreen ? "Add new note" : currentNote.title;

  const [noteTitle, setNotesTitle] = useState(currentNote.title);
  const [noteDescription, setNoteDescription] = useState(
    currentNote.description
  );

  function addNoteHandler() {
    notesContext.addNote(noteId, noteTitle, noteDescription);
    navigation.goBack();
  }

  function updateNoteHandler() {
    notesContext.updateNote(noteId, noteTitle, noteDescription);
    navigation.goBack();
  }

  function titleChangeHandler(text) {
    setNotesTitle(text);
  }

  function descriptionChangeHandler(text) {
    setNoteDescription(text);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: screenTitle,
      headerRight: () => {
        return (
          <IconButton
            onPress={addNoteScreen ? addNoteHandler : updateNoteHandler}
            icon={"save-outline"}
            color={"white"}
          />
        );
      },
    });
  }, [navigation, screenTitle, noteTitle, noteDescription]);

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="title"
        placeholderTextColor="gray"
        value={noteTitle}
        onChangeText={titleChangeHandler}
        style={styles.title}
      />
      <View style={styles.descriptionContainer}>
        <TextInput
          placeholder="description"
          placeholderTextColor="gray"
          value={noteDescription}
          onChangeText={descriptionChangeHandler}
          multiline={true}
          style={styles.description}
        />
      </View>
    </ScrollView>
  );
};

export default ManageNoteScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "white",
    fontSize: 18,
    padding: 10,
    backgroundColor: GlobalStyles.colors.background,
    margin: 12,
    borderRadius: 10,
  },
  descriptionContainer: {
    height: "100%",
    padding: 10,
    backgroundColor: GlobalStyles.colors.background,
    margin: 12,
    borderRadius: 10,
  },
  description: {
    color: "gray",
  },
});
