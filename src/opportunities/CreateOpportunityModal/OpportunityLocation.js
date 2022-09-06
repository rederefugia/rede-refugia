import * as React from "react";

import { StyleSheet } from "react-native";

import { Button, Text, TextInput, Snackbar } from "react-native-paper";

import * as Location from "expo-location";

import localization from "../../utils/localization";
import theme from "../../utils/theme";
import masks from "../../utils/masks";
import address from "../../utils/address";

const OpportunityLocation = ({ opportunity, setOpportunity, setCanGoNext }) => {
  const [hasMessage, showMessage] = React.useState(false);

  const validate = (value) => {
    if (value.length <= 9) setOpportunity({ zipCode: value });
    if (value.length == 9) setCanGoNext(true);
    else setCanGoNext(false);
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      showMessage(true);
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
      <Snackbar
        style={styles.snackbar}
        visible={hasMessage}
        onDismiss={() => showMessage(false)}
        duration={5000}
      >
        <Text style={styles.message}>
          {localization.t(
            "screens.opportunities.create_opportunity_modal.opportunity_location.location_access_undenied_message"
          )}
        </Text>
      </Snackbar>
    </>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
    marginTop: theme.DefaultTheme.space,
    marginBottom: theme.DefaultTheme.spaceSmall,
  },
  message: {
    color: theme.DefaultTheme.colors.white,
  },
});

export default OpportunityLocation;
