export function StringToDoubleNonNegative(e: string) {

    const result = parseFloat(e);

    if (isNaN(result)) {
        return 0;
    }

    if (result < 0) {
        return 0;
    }


    return result;

}

// export function StringToDouble(e: string) {

//     const result = parseFloat(e);

//     if (isNaN(result)) {
//         return 0;
//     }

//     return result;

// }