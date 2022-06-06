import { mask } from "react-native-mask-text";

import masks from "./masks";

const parsePhoneNumber = (number) => mask(number, masks.CELLPHONE);

export default { parsePhoneNumber };
