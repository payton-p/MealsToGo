import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/index";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDN7sK8JjBo3DcWdEr0EMQyPB3b0Gt-m_g",
  authDomain: "mealstogo-f365c.firebaseapp.com",
  projectId: "mealstogo-f365c",
  storageBucket: "mealstogo-f365c.appspot.com",
  messagingSenderId: "533422848446",
  appId: "1:533422848446:web:26fb8768a2b5bd4507e1ef",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      {/* ThemeProvider allows you to use a global theme throughout. It uses the Context API to act globally. */}
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
