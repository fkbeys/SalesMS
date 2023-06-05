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
import { CategoryModel } from "../../Models/Category/CategoryModel";
import { useAuthHeader } from "react-auth-kit";
import { CourseCreateModel } from "../../Models/Course/CourseCreateModel";
import { LoadingButton } from "@mui/lab";
import PhotoApiManager from "../../Managers/PhotoApiManager";
import Url from "../../Consts/Url";



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
  const [photo, setphoto] = useState<File | null>(null);
  const [busy, setbusy] = useState(false);
  //-------------------------------------------------------------------------------------------

  const user = UserInfoManager.ReadUserFromLocalStorage();


  async function SavePhoto() {
    try {
      const photoResult = await PhotoApiManager.SavePhoto(photo as File, authHeader());
      if (!photoResult.isSuccess) {
        toast.error("Photo upload failed: " + photoResult.message);
        return false;
      }

      toast.success("Photo uploaded successfully.");
      return true;
    } catch (error) {
      console.error("Error uploading photo:", error);
      toast.error("Unexpected error occurred while uploading photo.");
      return false;
    }
  }

  async function saveCourse() {
    try {
      const newCourse = {
        name: name,
        decription: decription,
        price: price,
        userId: user.id,
        feature: feature,
        categoryId: category?.id,
        picture: photo?.name
      } as CourseCreateModel;

      const result = await CourseManager.Create(newCourse, authHeader());
      if (!result.isSuccess) {
        toast.error(result.message);
        return false;
      }

      toast.success("Course Created...");
      model.afterSuccesfullSave(false);
      return true;
    } catch (error) {
      console.error("Error creating course:", error);
      toast.error("Unexpected error occurred while creating course.");
      return false;
    }
  }

  async function SubmitHandler() {
    try {
      setbusy(true);
      // toast.loading("Course Upload Started");

      const [isCourseSaved, isPhotoSaved] = await Promise.all([saveCourse(), SavePhoto()]);

      if (isCourseSaved && isPhotoSaved) {
        toast.success("Course and photo uploaded successfully.");
      } else if (!isCourseSaved) {
        toast.error("Course creation failed.");
      } else if (!isPhotoSaved) {
        toast.error("Photo upload failed.");
      }

    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Unexpected error occurred during submission.");
    } finally {
      setbusy(false);
    }
  }


  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let file = e.target.files && e.target.files[0];
  //   if (file) {
  //     setphoto(file);
  //   }
  // };



  // const Imagefxx = () => {
  //   const imageUrl = `${Url.PhotoShowUrl}/${picture}`;
  //   const imageStyle = {
  //     width: '100px',
  //     height: '100px'
  //   };

  //   return (
  //     <img src={imageUrl} alt="Your alt text here" style={imageStyle} />
  //   );
  // }

  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files && e.target.files[0];
    if (file) {
      setphoto(file);
      setPreviewImage(URL.createObjectURL(file)); // preview image set
    }
  };

  const Imagefxx = () => {
    const imageUrl = previewImage ? previewImage : `${Url.PhotoShowUrl}/${picture}`;
    const imageStyle = {
      width: '100px',
      height: '100px'
    };

    return (
      <img src={imageUrl} alt="Your alt text here" style={imageStyle} />
    );
  }

  return (
    <div>


      <Grid container spacing={2}>

        <Grid item xs={4} > <Imagefxx /> </Grid>
        <Grid item xs={6} ><h3>Course Edit/Create</h3> </Grid>
        <Grid item xs={2} textAlign="end"><h5>{ConvertDbDateFormatToDayMonthYear(createdDateTime, true)}</h5> </Grid>
        <Grid item xs={4}><TextField size="small" fullWidth onChange={(x) => { setname(x.target.value); }} value={name} label="Name" variant="outlined" /></Grid>
        <Grid item xs={8}><TextField size="small" fullWidth onChange={(x) => { setdecription(x.target.value); }} value={decription} label="Description" variant="outlined" /></Grid>

        <Grid item xs={2}> <GenericNumericInput setValue={setprice} value={price} title="Price" /> </Grid>
        <Grid item xs={10}><input accept="image/*" type="file" onChange={handleImageChange} /></Grid>

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
          <LoadingButton loading={busy} onClick={SubmitHandler} fullWidth variant="contained" color="primary">Save</LoadingButton>

        </Grid>
      </Grid>
    </div>
  );
};

export default CourseCreateUpdateUI;
