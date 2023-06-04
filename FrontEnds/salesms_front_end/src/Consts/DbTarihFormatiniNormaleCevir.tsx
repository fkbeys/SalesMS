import Moment from 'moment';
import { StringToInt } from './StringToInt';
import moment from 'moment';

export function ConvertDbDateFormatToDayMonthYear(tarihDBFormatinda: string, yilGoster: boolean) {


    try {
        const tarih = moment(tarihDBFormatinda).format("YYYY-MM-DD");

        const year = tarih.substring(0, 4).replace('_', '').replace('-', '');
        const month = tarih.substring(5, 7).replace('_', '').replace('-', '');
        const date = tarih.substring(8, 10).replace('_', '').replace('-', '');



        if (yilGoster) {
            return date + "-" + month + "-" + year;
        } else {
            return date + "-" + month;
        }
    } catch (error) {
        return error as string;
    }

}