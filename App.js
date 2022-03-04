import "react-native-gesture-handler";

import { Provider as PaperProvide } from "react-native-paper";

import providers from "./src/providers";
import { Navigator } from "./src/navigation";
import theme from "./src/utils/theme";

export default function App() {
  return (
    <providers.auth.AuthProvider>
      <PaperProvide theme={theme.DefaultTheme}>
        <Navigator theme={theme.DefaultTheme} />
      </PaperProvide>
    </providers.auth.AuthProvider>
  );
}
