import * as React from "react";

import { StyleSheet } from "react-native";

import { Button, TextInput } from "react-native-paper";

import * as Location from "expo-location";

import localization from "../../utils/localization";
import theme from "../../utils/theme";
import masks from "../../utils/masks";
import { View } from "react-native-web";

const OpportunityLocation = ({ opportunity, setOpportunity, setCanGoNext }) => {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location);
  };

  return (
    <>
      <TextInput
        style={styles.inputText}
        placeholder={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_location.zip_code_input_text_label"
        )}
        onChangeText={(value) => {
          if (value.length <= 9) setOpportunity({ zipCode: value });
          if (value.length == 9) setCanGoNext(true);
          else setCanGoNext(false);
        }}
        value={masks.parseZipCode(opportunity.zipCode)}
      />
      <View>
        <Button
          mode="text"
          compact={true}
          uppercase={false}
          icon="map-marker"
          onPress={getCurrentLocation}
        >
          {localization.t(
            "screens.opportunities.create_opportunity_modal.opportunity_location.zip_code_button_label"
          )}
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
    marginTop: theme.DefaultTheme.space,
    marginBottom: theme.DefaultTheme.spaceSmall,
  },
});

export default OpportunityLocation;
