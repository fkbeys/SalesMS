import { Button, FormControlLabel, Grid, Stack, Switch, SwitchProps, TextField, Typography, styled, } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { CourseModel } from "../../Models/Course/CourseModel";
import CourseManager from "../../Managers/CourseManager";

interface model {
  obj: CourseModel;
  afterSuccesfullSave: Function;
}

const CourseCreateUpdateUI = (model: model) => {
  const dispatch = useDispatch<AppDispatch>();

  const course = model?.obj;

  //-------------------------------------------------------------------------------------------
  const [id, setid] = useState(course?.id || "");
  //-------------------------------------------------------------------------------------------


  //-------------------------------------------------------------------------------------------

  async function SubmitHandler() {
    const newCourse = {
      id: id,

    } as CourseModel;

    const result = await CourseManager.Create(newCourse);

    if (result.isSuccess) {
      toast.success("Ok");
      model.afterSuccesfullSave(false);
    } else {
      toast.error(result.message);
    }
  }



  useEffect(() => {

  }, []);

  return (
    <div>
      <h3>Səlahiyyət</h3>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField size="small" fullWidth id="outlined-basic1" autoFocus onChange={(x) => { setid(x.target.value); }} value={id} label="Səlahiyyət Adı" variant="outlined" />{" "}
        </Grid>


        <Grid item xs={12}>
          <Button
            onClick={SubmitHandler}
            fullWidth
            variant="contained"
            color="primary"
          >
            {" "}
            Qeyd Et{" "}
          </Button>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default CourseCreateUpdateUI;
