import { mask } from "react-native-mask-text";

import masks from "./masks";

const parsePhoneNumber = (number) => mask(number, masks.CELLPHONE);
const parseLandLine = (number) => mask(number, masks.LAND_LINE);

export default { parsePhoneNumber, parseLandLine };
