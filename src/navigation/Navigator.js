import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

import providers from "../providers";
import PublicNavigation from "./PublicNavigation";
import PrivateNavigation from "./PrivateNavigation";

const Navigator = ({ theme }) => {
  const { authenticated, loadingAuthState } = React.useContext(
    providers.auth.AuthContext
  );

  if (loadingAuthState) {
    return <ActivityIndicator animating={true} />;
  }

  return (
    <NavigationContainer theme={theme}>
      {!authenticated ? <PublicNavigation /> : <PrivateNavigation />}
    </NavigationContainer>
  );
};

export default Navigator;
