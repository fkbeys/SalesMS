
import React from 'react'
import ReactToPrint from 'react-to-print'
import { Button } from "@mui/material";

interface model {
    obj: React.MutableRefObject<any>
    isLandScape: boolean
}



const GenericPrint = (model: model) => {
    // const contentRef = React.useRef(null);

    const landscapeStyle = `  @page { size: landscape;  }  `;
    const portraitStyle = `  @page { size: portrait;  }  `;

    return (
        <div>
            <ReactToPrint
                pageStyle={model?.isLandScape ? landscapeStyle : portraitStyle}
                trigger={() => <Button variant="contained" style={{ backgroundColor: "#F7DA6B", color: "black" }} fullWidth type="button" color="success">  ÇAP ELE</Button>}
                content={() => model.obj.current}
            />
        </div>
    )
}


export default GenericPrint