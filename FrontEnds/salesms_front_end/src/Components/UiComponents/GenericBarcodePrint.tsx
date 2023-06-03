import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button, Grid } from "@mui/material";
import Barcode from "react-barcode";

interface Model {
  barcode: string;
  height: number;
  width: number;
}

const GenericBarcodePrint: React.FC<Model> = ({ barcode, height, width }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const barcodeStyle = `
    @page {
        size: ${height}mm ${width}mm;
    }
    
    @media all {
        .pageBreak {
            display: none;
        }
    }

    @media print {
        .pageBreak {
            page-break-before: always;
        }
    }
`;

  console.log("Print Boyutlari: Width:" + width + " Height:" + height);

  return (
    <div>
      <Grid container>
        <ReactToPrint
          trigger={() => (
            <Button
              variant="contained"
              style={{ backgroundColor: "#F7DA6B", color: "black" }}
              fullWidth
              type="button"
              color="success"
            >
              ÇAP ET
            </Button>
          )}
          pageStyle={barcodeStyle}
          content={() => componentRef.current}
        />

        <div style={{ visibility: "hidden" }}>
          <div
            ref={componentRef}
            style={{ width: width + "mm", height: height + "mm" }}
          >
            <Barcode value={barcode} />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default GenericBarcodePrint;
