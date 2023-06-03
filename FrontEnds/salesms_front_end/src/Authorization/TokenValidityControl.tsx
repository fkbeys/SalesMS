
import Moment from 'moment';
import { UserLoginResultModel } from '../Models/UserLogin/UserLoginResultModel';

function TokenValidityControl(): Boolean {

    try {


        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "") as UserLoginResultModel;

        const simdikiTarih = Moment().format("YYYY-MM-DD hh:mm:ss")

        if (userInfo.data.kullaniciTokenExpiration > simdikiTarih) {

            return true;
        }
        else {

            return false;
        }
    } catch (error) {

        return false;
    }

}

export default TokenValidityControl