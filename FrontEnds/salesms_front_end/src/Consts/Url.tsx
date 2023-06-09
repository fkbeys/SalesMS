
// Gateway       => 5000 
// AuthApi       => 5001
// CatalogApi    => 5011 catalog_fullpermition
// PhotoStockApi => 5012 photo_stock_fullpermition
// BasketApi     => 5013 basket_fullpermition
// DiscountApi   => 5014 discount_fullpermition
// OrderApi      => 5015 order_fullpermition
// PaymentApi    => 5016 payment_fullpermition

const baseUrl = process.env.REACT_APP_BASE_URL;
console.log(baseUrl);
console.log(process.env);




const customBg = "#008f62";

const BildirimlerCreateUrl = baseUrl + "/Api/Bildirimler/Create";
const GetTokenUrl = baseUrl + "/auth/connect/token";
const GetUserUrl = baseUrl + "/auth/api/User/GetUser";


const BasketGetUrl = baseUrl + "/Basket/Basket/GetBasket"
const BasketDeleteUrl = baseUrl + "/Basket/Basket/Delete"
const BasketSaveOrUpdateUrl = baseUrl + "/Basket/Basket/SaveOrUpdate"

const CategoryGetAllUrl = baseUrl + "/catalog/Category/GetAll"
const CategoryCreateUrl = baseUrl + "/catalog/Category/Create"
const CategoryFindByIdUrl = baseUrl + "/catalog/Category/FindById"
const CategoryUpdateUrl = baseUrl + "/catalog/Category/Update"
const CategoryDeleteUrl = baseUrl + "/catalog/Category/Delete"

const CourseGetAllUrl = baseUrl + "/catalog/Course/GetAll"
const CourseCreateUrl = baseUrl + "/catalog/Course/Create"
const CourseFindByIdUrl = baseUrl + "/catalog/Course/FindById"
const CourseGetAllByUserIdUrl = baseUrl + "/catalog/Course/GetAllByUserId"
const CourseUpdateUrl = baseUrl + "/catalog/Course/Update"
const CourseDeleteUrl = baseUrl + "/catalog/Course/Delete"

const DiscountGetAllUrl = baseUrl + "/Discount/Discount/GetAll"
const DiscountCreateUrl = baseUrl + "/Discount/Discount/Create"
const DiscountUpdateUrl = baseUrl + "/Discount/Discount/Update"
const DiscountDeleteUrl = baseUrl + "/Discount/Discount/Delete"
const DiscountGetByIdUrl = baseUrl + "/Discount/Discount/GetById"
const DiscountGetByCodeAndUserIdUrl = baseUrl + "/Discount/Discount/GetByCodeAndUserId"

const OrderGetUrl = baseUrl + "/Order/Order/GetOrders"
const OrderSaveUrl = baseUrl + "/Order/Order/SaveOrders"


const PaymentMakeUrl = baseUrl + "/Payment/Payment/MakePayment"

const PhotoSaveUrl = baseUrl + "/Photostock/Photo/SavePhoto"
const PhotoDeleteUrl = baseUrl + "/Photostock/Photo/DeletePhoto"
const PhotoShowUrl = baseUrl + "/GetPhoto/"

const Url = {
  baseUrl,
  customBg,
  GetTokenUrl,
  GetUserUrl,

  BasketGetUrl,
  BasketDeleteUrl,
  BasketSaveOrUpdateUrl,
  CategoryGetAllUrl,
  CategoryCreateUrl,
  CategoryFindByIdUrl,
  CategoryUpdateUrl,
  CategoryDeleteUrl,
  CourseGetAllUrl,
  CourseCreateUrl,
  CourseFindByIdUrl,
  CourseGetAllByUserIdUrl,
  CourseUpdateUrl,
  CourseDeleteUrl,
  DiscountGetAllUrl,
  DiscountCreateUrl,
  DiscountUpdateUrl,
  DiscountDeleteUrl,
  DiscountGetByIdUrl,
  DiscountGetByCodeAndUserIdUrl,
  OrderGetUrl,
  OrderSaveUrl,
  PaymentMakeUrl,

  PhotoSaveUrl,
  PhotoDeleteUrl,
  PhotoShowUrl,

  BildirimlerCreateUrl
};
export default Url;
