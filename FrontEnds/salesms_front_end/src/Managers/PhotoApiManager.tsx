import axios from "axios";
import { GenericApiResultModelWithPagination } from "../Models/Generic/ApiResultModel";
import Url from "../Consts/Url";


const SavePhoto = async (model: File, token: string) => {
    let resx = { isSuccess: false } as GenericApiResultModelWithPagination<boolean>;

    try {
        const url = Url.PhotoSaveUrl;

        console.log('photoUrl:' + url);


        let formData = new FormData();
        formData.append('photo', model as File);
        const apiResult = await axios.post<GenericApiResultModelWithPagination<boolean>>(url, formData, {
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            }
        });
        resx = apiResult.data;
    } catch (error) {
        resx.message += ' ' + error;
    }
    return resx;
}



const DeletePhoto = async (filename: string, token: string) => {

    let resx = { isSuccess: false } as GenericApiResultModelWithPagination<boolean>;

    try {
        const url = Url.PhotoDeleteUrl + "/" + filename;
        const apiResult = await axios.post<GenericApiResultModelWithPagination<boolean>>(url, {
            headers: { Authorization: token }
        });
        resx = apiResult.data;
    } catch (error) {
        resx.message += ' ' + error;
    }
    return resx;
}


const PhotoApiManager = {
    SavePhoto, DeletePhoto
};

export default PhotoApiManager;

