import "react-native-gesture-handler";

import { Provider as PaperProvide } from "react-native-paper";

import auth from "./src/auth";
import { Navigator } from "./src/navigation";
import theme from "./src/utils/theme";

export default function App() {
  return (
    <auth.AuthProvider>
      <PaperProvide theme={theme.DefaultTheme}>
        <Navigator theme={theme.DefaultTheme} />
      </PaperProvide>
    </auth.AuthProvider>
  );
}
