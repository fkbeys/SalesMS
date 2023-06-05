import axios from "axios";

import { RequestDataWithPaginationModel } from "../Models/Generic/RequestDataWithPaginationModel";
import { GenericApiResultModel, GenericApiResultModelWithPagination } from "../Models/Generic/ApiResultModel";

import Url from "../Consts/Url";
import { CategoryModel } from "../Models/Course/CategoryModel";

const GetAll = async (model: RequestDataWithPaginationModel) => {

    let resx = { isSuccess: false } as GenericApiResultModelWithPagination<CategoryModel>;

    try {
        const url = Url.CategoryGetAllUrl;
        const token = "";
        const apiResult = await axios.get<GenericApiResultModelWithPagination<CategoryModel>>(url, {
            headers: { Authorization: token }
        });
        resx = apiResult.data;
    } catch (error) {
        resx.message += ' ' + error;
    }
    return resx;
}


const Create = async (model: CategoryModel) => {

    let resx = { isSuccess: false } as GenericApiResultModel<CategoryModel>;

    try {
        const url = Url.CategoryCreateUrl;
        const token = "";
        const result = await axios.post<GenericApiResultModel<CategoryModel>>(url, model, {
            headers: { Authorization: token }
        });

        resx = result.data;
        return resx;
    } catch (error) {
        resx.message += ' ' + error;
        return resx;
    }

}


const CategoryManager = {
    GetAll, Create
};

export default CategoryManager;

