import axios from "axios";

import { RequestDataWithPaginationModel } from "../Models/Generic/RequestDataWithPaginationModel";
import { GenericApiResultModel, GenericApiResultModelWithPagination } from "../Models/Generic/ApiResultModel";
import { CourseModel } from "../Models/Course/CourseModel";
import Url from "../Consts/Url";
import { useAuthUser } from "react-auth-kit";

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


const Create = async (model: any, token: string) => {

    console.log(token);


    let resx = { isSuccess: false } as GenericApiResultModel<CourseModel>;

    try {
        const url = Url.CourseCreateUrl;
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

const Delete = async (courseId: string, token: string) => {

    let resx = { isSuccess: false } as GenericApiResultModel<boolean>;

    try {
        const url = Url.CourseDeleteUrl + '/' + courseId;
        const result = await axios.delete<GenericApiResultModel<CourseModel>>(url, {
            headers: { Authorization: token }
        });

        if (result.status === 200) {
            resx.isSuccess = true;
            resx.data = true;
        }
        return resx;
    } catch (error) {
        resx.message += ' ' + error;
        resx.isSuccess = false;
        return resx;
    }
}

const CourseManager = {
    GetAll, Create, Delete
};

export default CourseManager;

