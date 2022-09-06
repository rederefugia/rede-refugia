import * as React from "react";

import StepperModal from "../StepperModal";
import OpportunityType from "./OpportunityType";
import OpportunityCategory from "./OpportunityCategory";
import OpportunityLink from "./OpportunityLink";
import OpportunityLocation from "./OpportunityLocation";
import OpportunityDescription from "./OpportunityDescription";

import auth from "../../auth";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";
import address from "../../utils/address";

const CreateOpportunityModal = ({ trigger, updateScreen }) => {
  const { user } = React.useContext(auth.AuthContext);
  const [canGoNext, setCanGoNext] = React.useState(false);
  let [opportunity, setOpportunity] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      type: "",
      title: "",
      category: "",
      link: "",
      zipCode: "",
      description: "",
    }
  );

  const handleFinish = async () => {
    opportunity.owner = user.uid;
    opportunity.timestamp = Date.now();
    opportunity.address = await address.getAddress(opportunity.zipCode);
    await firestore.createWithId("opportunities", null, opportunity);
    updateScreen();
  };

  const steps = [
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_type.title"
      ),
      content: (
        <OpportunityType
          opportunity={opportunity}
          setOpportunity={setOpportunity}
          setCanGoNext={setCanGoNext}
        />
      ),
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
      content: (
        <OpportunityCategory
          opportunity={opportunity}
          setOpportunity={setOpportunity}
          setCanGoNext={setCanGoNext}
        />
      ),
    },
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_link.title"
      ),
      content: (
        <OpportunityLink
          opportunity={opportunity}
          setOpportunity={setOpportunity}
          setCanGoNext={setCanGoNext}
        />
      ),
    },
    {
      title:
        opportunity.type == "request"
          ? localization.t(
              "screens.opportunities.create_opportunity_modal.opportunity_location.request_title"
            )
          : localization.t(
              "screens.opportunities.create_opportunity_modal.opportunity_location.offer_title"
            ),
      content: (
        <OpportunityLocation
          opportunity={opportunity}
          setOpportunity={setOpportunity}
          setCanGoNext={setCanGoNext}
        />
      ),
    },
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_description.title"
      ),
      content: (
        <OpportunityDescription
          opportunity={opportunity}
          setOpportunity={setOpportunity}
          setCanGoNext={setCanGoNext}
        />
      ),
    },
  ];

  return (
    <StepperModal
      steps={steps}
      handleFinish={handleFinish}
      canGoNext={canGoNext}
      setCanGoNext={setCanGoNext}
      trigger={trigger}
    />
  );
};

export default CreateOpportunityModal;
