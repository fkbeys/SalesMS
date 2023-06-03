

export const CapitalizeEveryWord = (str: string) => {

    if (str == undefined) {
        return "";
    }

    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};