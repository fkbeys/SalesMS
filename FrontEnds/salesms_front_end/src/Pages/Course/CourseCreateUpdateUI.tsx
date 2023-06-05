import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { CourseModel } from "../../Models/Course/CourseModel";
import CourseManager from "../../Managers/CourseManager";
import { GuidGenerator } from "../../Consts/GuidGenerator";
import GenericNumericInput from "../../Components/Inputs/GenericNumericInput";
import moment from "moment";
import { ConvertDbDateFormatToDayMonthYear } from "../../Consts/DbTarihFormatiniNormaleCevir";
import UserInfoManager from "../../Authorization/UserInfoManager";
import { FeatureModel } from "../../Models/Course/FeatureModel";
import YanyanaGetir from "../../Components/UiComponents/YanyanaGetir";
import CategorySelectPage from "../SelectPages/CategorySelectPage";
import { CategoryModel } from "../../Models/Course/CategoryModel";
import { useAuthHeader } from "react-auth-kit";



interface model {
  obj: CourseModel;
  afterSuccesfullSave: Function;
}

const CourseCreateUpdateUI = (model: model) => {
  const authHeader = useAuthHeader();





  const dispatch = useDispatch<AppDispatch>();

  const course = model?.obj;

  //-------------------------------------------------------------------------------------------
  const [id, setid] = useState(course?.id || GuidGenerator());
  const [name, setname] = useState(course?.name || "");
  const [decription, setdecription] = useState(course?.decription || "");
  const [price, setprice] = useState(course?.price || 0);
  const [picture, setpicture] = useState(course?.picture || "");
  const [createdDateTime] = useState(course?.createdDateTime || moment().format("YYYY-MM-DD"));
  const [userId, setuserId] = useState(course?.userId || "");
  const [feature, setfeature] = useState(course?.feature || {} as FeatureModel);
  const [category, setcategory] = useState(course?.category || { name: "" });
  //-------------------------------------------------------------------------------------------

  const user = UserInfoManager.ReadUserFromLocalStorage();
  async function SubmitHandler() {

    const newCourse = {
      name: name,
      decription: decription,
      price: price,
      userId: user.id,
      feature: feature,
      categoryId: category?.id
    };

    const result = await CourseManager.Create(newCourse, authHeader());

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
        <Grid item xs={6} ><h3>Course Edit/Create</h3> </Grid>
        <Grid item xs={6} textAlign="end"><h5>{ConvertDbDateFormatToDayMonthYear(createdDateTime, true)}</h5> </Grid>
        <Grid item xs={4}><TextField size="small" fullWidth onChange={(x) => { setname(x.target.value); }} value={name} label="Name" variant="outlined" /></Grid>
        <Grid item xs={8}><TextField size="small" fullWidth onChange={(x) => { setdecription(x.target.value); }} value={decription} label="Description" variant="outlined" /></Grid>
        <Grid item xs={2}> <GenericNumericInput setValue={setprice} value={price} title="Price" /> </Grid>

        <Grid item xs={10}>
          <YanyanaGetir
            compA={<TextField size="small" fullWidth value={category?.name} label="* Category Name" placeholder="* Category Name" variant="outlined" />}
            compB={<CategorySelectPage afterSelection={(x: CategoryModel) => { setcategory(x); }} buttonTitle="Category" />}
            sizeA={8}
            sizeB={4}
            stil={{}}
          />
        </Grid>


        <Grid item xs={12}>
          <Button onClick={SubmitHandler} fullWidth variant="contained" color="primary" >  Qeyd Et </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CourseCreateUpdateUI;
