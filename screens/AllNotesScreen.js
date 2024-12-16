import { useLayoutEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { NotesContext } from "../store/notes-context";
import NoteItem from "../components/NoteItem";
import IconButton from "../components/IconButton";

const AllNotesScreen = ({ navigation }) => {
  const notesContext = useContext(NotesContext);
  const notes = notesContext.notes;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={() => {
              navigation.navigate("ManageNote", { addNoteScreen: true });
            }}
            color={"white"}
            icon={"add"}
          />
        );
      },
    });
  });

  return (
    <View style={styles.container}>
      {notes.length == 0 && (
        <Text style={styles.text}>No notes available.</Text>
      )}
      {notes.map((note) => (
        <NoteItem note={note} homeScreen={true} key={note.id} />
      ))}
    </View>
  );
};

export default AllNotesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  text: {
    color: "gray",
    textAlign: "center",
    paddingTop: 20,
    fontSize: 20,
  },
});
