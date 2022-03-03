import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import navigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <navigation.PublicNavigation />
    </NavigationContainer>
  );
}
