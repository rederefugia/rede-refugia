import * as React from "react";

import { Text } from "react-native-paper";

import StepperModal from "../StepperModal";
import OpportunityType from "./OpportunityType";
import OpportunityCategory from "./OpportunityCategory";

import localization from "../../utils/localization";

const CreateOpportunityModal = ({ visible, setVisible }) => {
  let [opportunity, setOpportunity] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {}
  );

  const steps = [
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_type.title"
      ),
      content: <OpportunityType setOpportunity={setOpportunity} />,
    },
    {
      title:
        opportunity.type == "request"
          ? localization.t(
              "screens.opportunities.create_opportunity_modal.opportunity_category.request_title"
            )
          : localization.t(
              "screens.opportunities.create_opportunity_modal.opportunity_category.offer_title"
            ),
      content: <OpportunityCategory setOpportunity={setOpportunity} />,
    },
    { title: "Step 3", content: <Text>Content 3</Text> },
  ];

  return (
    <StepperModal steps={steps} visible={visible} setVisible={setVisible} />
  );
};

export default CreateOpportunityModal;
