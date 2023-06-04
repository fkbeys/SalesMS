
const baseUrl = "http://localhost:5001";
//const baseUrl = "http://10.45.5.20:9001";

const customBg = "#008f62";

const BildirimlerCreateUrl = baseUrl + "/Api/Bildirimler/Create";
const GetTokenUrl = baseUrl + "/connect/token";
const GetUserUrl = baseUrl + "/api/User/GetUser";



const Url = {
  baseUrl,
  customBg,
  GetTokenUrl,
  GetUserUrl,

  BildirimlerCreateUrl
};
export default Url;
