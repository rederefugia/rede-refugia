import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import PrivateNavigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <PrivateNavigation />
    </NavigationContainer>
  );
}
