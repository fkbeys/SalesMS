import Moment from 'moment';
import { StringToInt } from './StringToInt';

export function DbTarihFormatiniNormaleCevir(tarih: string) {

    if (tarih === null) {
        return "";
    }

    if (tarih === undefined) {
        return "";
    }

    const yil = tarih.substring(0, 4).replace('_', '').replace('-', '');
    const ay = tarih.substring(5, 7).replace('_', '').replace('-', '');
    const gun = tarih.substring(8, 10).replace('_', '').replace('-', '');

    // const month = StringToInt(ay);

    const result = gun + "-" + ay + "-" + yil;

    return result;
}