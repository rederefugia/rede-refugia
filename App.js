import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvide } from "react-native-paper";

import navigation from "./src/navigation";
import theme from "./src/utils/theme";

export default function App() {
  return (
    <PaperProvide theme={theme.DefaultTheme}>
      <NavigationContainer theme={theme.DefaultTheme}>
        <navigation.PublicNavigation />
      </NavigationContainer>
    </PaperProvide>
  );
}
