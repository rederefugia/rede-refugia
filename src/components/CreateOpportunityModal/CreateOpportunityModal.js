import * as React from "react";

import StepperModal from "../StepperModal";
import OpportunityType from "./OpportunityType";
import OpportunityCategory from "./OpportunityCategory";
import OpportunityLink from "./OpportunityLink";
import OpportunityLocation from "./OpportunityLocation";
import OpportunityDescription from "./OpportunityDescription";

import providers from "../../providers";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";
import address from "../../utils/address";

const CreateOpportunityModal = ({ visible, setVisible }) => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);
  const [canGoNext, setCanGoNext] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  let [opportunity, setOpportunity] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { type: "", title: "", category: "", link: "", zipCode: "", description: "" }
  );

  const handleFinish = async () => {
    setLoading(true);
    opportunity.owner = user.uid;
    opportunity.timestamp = Date.now();
    opportunity.address = await address.getAddress(opportunity.zipCode);
    await firestore.createWithId("opportunities", null, opportunity);
    setLoading(false);
  };

  const steps = [
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_type.title"
      ),
      content: <OpportunityType setOpportunity={setOpportunity} setCanGoNext={setCanGoNext} />,
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
      content: <OpportunityCategory setOpportunity={setOpportunity} setCanGoNext={setCanGoNext} />,
    },
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_link.title"
      ),
      content: <OpportunityLink setOpportunity={setOpportunity} setCanGoNext={setCanGoNext} />,
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
      content: <OpportunityLocation setOpportunity={setOpportunity} setCanGoNext={setCanGoNext} />,
    },
    {
      title: localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_description.title"
      ),
      content: <OpportunityDescription setOpportunity={setOpportunity} setCanGoNext={setCanGoNext} />,
    },
  ];

  return (
    <StepperModal
      steps={steps}
      visible={visible}
      setVisible={setVisible}
      handleFinish={handleFinish}
      canGoNext={canGoNext}
      setCanGoNext={setCanGoNext}
      loading={loading}
    />
  );
};

export default CreateOpportunityModal;
