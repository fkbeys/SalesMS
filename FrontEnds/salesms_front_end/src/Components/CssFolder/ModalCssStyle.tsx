

export function ModalCssStyle(width: number, height: number) {

    const wdth = width + "%";

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: width == 0 ? "auto" : width + "%",
        height: height == 0 ? "auto" : height + "%",

        bgcolor: "background.paper",
        color: "text.primary",

        p: 4,
        overflow: "auto",
        borderRadius: "16px"
    };

    return style;
}