import axios from "axios";

import { RequestDataWithPaginationModel } from "../Models/Generic/RequestDataWithPaginationModel";
import { GenericApiResultModel, GenericApiResultModelWithPagination } from "../Models/Generic/ApiResultModel";
import { CourseModel } from "../Models/Course/CourseModel";
import Url from "../Consts/Url";

const GetAll = async (model: RequestDataWithPaginationModel) => {

    let resx = { isSuccess: false } as GenericApiResultModelWithPagination<CourseModel>;

    try {
        const url = Url.CourseGetAllUrl;
        const token = "";
        const apiResult = await axios.get<GenericApiResultModelWithPagination<CourseModel>>(url, {
            headers: { Authorization: token }
        });
        resx = apiResult.data;
    } catch (error) {
        resx.message += ' ' + error;
    }
    return resx;
}


const Create = async (model: CourseModel) => {

    let resx = { isSuccess: false } as GenericApiResultModel<CourseModel>;

    try {
        const url = Url.CourseCreateUrl;
        const token = "";
        const result = await axios.post<GenericApiResultModel<CourseModel>>(url, model, {
            headers: { Authorization: token }
        });

        resx = result.data;
        return resx;
    } catch (error) {
        resx.message += ' ' + error;
        return resx;
    }

}


const CourseManager = {
    GetAll, Create
};

export default CourseManager;

