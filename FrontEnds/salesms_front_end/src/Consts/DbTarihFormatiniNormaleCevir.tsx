import Moment from 'moment';
import { StringToInt } from './StringToInt';

export function ConvertDbDateFormatToDayMonthYear(date: string) {

    if (date === undefined) {
        return "";
    }
    if (date === null) {
        return "";
    }
    const year = date.substring(0, 4).replace('_', '').replace('-', '');
    const month = date.substring(5, 7).replace('_', '').replace('-', '');
    const day = date.substring(8, 10).replace('_', '').replace('-', '');

    const result = day + "-" + month + "-" + year;

    return result;
}