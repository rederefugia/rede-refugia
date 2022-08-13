import * as React from "react";

import { StyleSheet } from "react-native";

import { Button, TextInput } from "react-native-paper";

import * as Location from "expo-location";

import localization from "../../utils/localization";
import theme from "../../utils/theme";
import masks from "../../utils/masks";
import address from "../../utils/address";

const OpportunityLocation = ({ opportunity, setOpportunity, setCanGoNext }) => {
  const validate = (value) => {
    if (value.length <= 9) setOpportunity({ zipCode: value });
    if (value.length == 9) setCanGoNext(true);
    else setCanGoNext(false);
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let zipCode = await address.getZipCode({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    validate(zipCode);
  };

  return (
    <>
      <TextInput
        style={styles.inputText}
        placeholder={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_location.zip_code_input_text_label"
        )}
        onChangeText={(value) => validate(value)}
        value={masks.parseZipCode(opportunity.zipCode)}
      />
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
