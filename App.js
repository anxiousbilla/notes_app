import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import AllNotesScreen from "./screens/AllNotesScreen";
import NoteDetailsScreen from "./screens/NoteDetailsScreen";
import ManageNoteScreen from "./screens/ManageNoteScreen";

// Import context and global styles
import NotesContextProvider from "./store/notes-context";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NotesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: "Notes App",
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: "bold",
                color: GlobalStyles.colors.text,
              },
              headerTintColor: GlobalStyles.colors.secondary,
              headerStyle: {
                backgroundColor: GlobalStyles.colors.background,
              },
              contentStyle: { backgroundColor: GlobalStyles.colors.primary },
            }}
          >
            <Stack.Screen name="AllNotes" component={AllNotesScreen} />
            <Stack.Screen name="NoteDetails" component={NoteDetailsScreen} />
            <Stack.Screen name="ManageNote" component={ManageNoteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
