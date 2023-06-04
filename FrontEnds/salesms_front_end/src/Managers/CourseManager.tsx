import axios from "axios";

import { RequestDataWithPaginationModel } from "../Models/Generic/RequestDataWithPaginationModel";
import { GenericApiResultModel } from "../Models/Generic/ApiResultModel";
import { CourseModel } from "../Models/Course/CourseModel";
import Url from "../Consts/Url";

const GetAll = async (model: RequestDataWithPaginationModel) => {

    let resx = { isSuccess: false } as GenericApiResultModel<CourseModel>;

    try {
        const url = Url.CourseGetAllUrl;
        const token = "";
        const apiResult = await axios.get<GenericApiResultModel<CourseModel>>(url, {
            headers: { Authorization: token }
        });
        resx = apiResult.data;
    } catch (error) {
        resx.message += ' ' + error;
    }
    return resx;
}


const CourseManager = {
    GetAll
};

export default CourseManager;

