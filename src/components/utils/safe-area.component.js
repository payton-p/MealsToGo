import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

// - Root container needs to have flex
// Older notes:
// - SafeAreaView is only supported on iOS
// - StatusBar.currentHeight gets the height of the status bar on Android, so this allows us to set the "safe area" for Android
// - StatusBar.currentHeight is only supported on Android
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
