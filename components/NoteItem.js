import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../constants/styles";

const NoteItem = ({ note, homeScreen }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("NoteDetails", {
          addNoteScreen: false,
          id: note.id,
        })
      }
      style={({ pressed }) => [
        styles.container,
        pressed && homeScreen ? styles.pressed : null,
      ]}
    >
      <View>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.description}</Text>
      </View>
    </Pressable>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyles.colors.background,
    margin: 12,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  description: {
    color: "gray",
  },
  pressed: {
    opacity: 0.75,
  },
});
