import * as Localization from "expo-localization";
import i18n from "i18n-js";

import en from "./locales/en.json";
import pt_br from "./locales/pt-br.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

i18n.translations = {
  en, es, fr,
  "pt-BR": pt_br,
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;
