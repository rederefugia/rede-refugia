import localization from "../localization";

const categories = [
  "living",
  "food",
  "documentation",
  "job",
  "transport",
  "trade",
  "communication",
  "training",
  "health",
  "other",
];

const options = categories.map((opt) => {
  return {
    value: opt,
    label: localization.t(
      `screens.opportunities.create_opportunity_modal.opportunity_category.combo_box_options.${opt}_option`
    ),
  };
});

export default options;