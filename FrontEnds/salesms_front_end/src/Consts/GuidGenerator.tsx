

import { v1 as uuidv1 } from "uuid";

export function GuidGenerator() {

    return uuidv1().toUpperCase();

}