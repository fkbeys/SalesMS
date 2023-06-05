import { Button, FormControlLabel, Grid, Stack, Switch, SwitchProps, TextField, Typography, styled, } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import CategoryManager from "../../Managers/CategoryManager";
import { GuidGenerator } from "../../Consts/GuidGenerator";
import GenericNumericInput from "../../Components/Inputs/GenericNumericInput";
import moment from "moment";
import { ConvertDbDateFormatToDayMonthYear } from "../../Consts/DbTarihFormatiniNormaleCevir";
import UserInfoManager from "../../Authorization/UserInfoManager";
import { CategoryModel } from "../../Models/Category/CategoryModel";

interface model {
  obj: CategoryModel;
  afterSuccesfullSave: Function;
}

const CategoryCreateUpdateUI = (model: model) => {
  const dispatch = useDispatch<AppDispatch>();

  const Category = model?.obj;

  //-------------------------------------------------------------------------------------------
  const [id, setid] = useState(Category?.id || GuidGenerator());
  const [name, setname] = useState(Category?.name || "");
  //-------------------------------------------------------------------------------------------
  const user = UserInfoManager.ReadUserFromLocalStorage();
  async function SubmitHandler() {
    const newCategory = {
      id: id,
      name: name,
    } as CategoryModel;

    const result = await CategoryManager.Create(newCategory);

    if (result.isSuccess) {
      toast.success("Ok");
      model.afterSuccesfullSave(false);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div>


      <Grid container spacing={2}>
        <Grid item xs={6} ><h3>Category Edit/Create</h3> </Grid>
        <Grid item xs={4}><TextField size="small" fullWidth id="outlined-basic1" onChange={(x) => { setname(x.target.value); }} value={name} label="Name" variant="outlined" /></Grid>

        <Grid item xs={12}>
          <Button onClick={SubmitHandler} fullWidth variant="contained" color="primary" >  Qeyd Et </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryCreateUpdateUI;
