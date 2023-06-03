//const baseUrl = "http://localhost:5097";
const baseUrl = "http://192.168.51.100:1801";
//const baseUrl = "http://10.45.5.20:9001";

const customBg = "#008f62";

const BildirimlerCreateUrl = baseUrl + "/Api/Bildirimler/Create";
const BildirimlerGetAllUrl = baseUrl + "/Api/Bildirimler/GetAll";
const BildirimlerGetByIdUrl = baseUrl + "/api/Bildirimler/GetById";
const BildirimlerUpdateUrl = baseUrl + "/Api/Bildirimler/Update";
const BildirimlerDeleteUrl = baseUrl + "/Api/Bildirimler/Delete";

const DepartmanlarCreateUrl = baseUrl + "/Api/Departmanlar/Create";
const DepartmanlarGetAllUrl = baseUrl + "/Api/Departmanlar/GetAll";
const DepartmanlarGetByIdUrl = baseUrl + "/api/Departmanlar/GetById";
const DepartmanlarUpdateUrl = baseUrl + "/Api/Departmanlar/Update";
const DepartmanlarDeleteUrl = baseUrl + "/Api/Departmanlar/Delete";

const IsTalepAtamalariCreateUrl = baseUrl + "/Api/IsTalepAtamalari/Create";
const IsTalepAtamalariGetAllUrl = baseUrl + "/Api/IsTalepAtamalari/GetAll";
const IsTalepAtamalariGetByIdUrl = baseUrl + "/api/IsTalepAtamalari/GetById";
const IsTalepAtamalariUpdateUrl = baseUrl + "/Api/IsTalepAtamalari/Update";
const IsTalepAtamalariDeleteUrl = baseUrl + "/Api/IsTalepAtamalari/Delete";

const IsTalepleriCreateUrl = baseUrl + "/Api/IsTalepleri/Create";
const IsTalepleriGetAllUrl = baseUrl + "/Api/IsTalepleri/GetAll";
const IsTalepleriGetByIdUrl = baseUrl + "/api/IsTalepleri/GetById";
const IsTalepleriUpdateUrl = baseUrl + "/Api/IsTalepleri/Update";
const IsTalepleriDeleteUrl = baseUrl + "/Api/IsTalepleri/Delete";

const IsTalepMesajlariCreateUrl = baseUrl + "/Api/IsTalepMesajlari/Create";
const IsTalepMesajlariGetAllUrl = baseUrl + "/Api/IsTalepMesajlari/GetAll";
const IsTalepMesajlariGetByIdUrl = baseUrl + "/api/IsTalepMesajlari/GetById";
const IsTalepMesajlariUpdateUrl = baseUrl + "/Api/IsTalepMesajlari/Update";
const IsTalepMesajlariDeleteUrl = baseUrl + "/Api/IsTalepMesajlari/Delete";

const IsTalepLoglariCreateUrl = baseUrl + "/Api/IsTalepLoglari/Create";
const IsTalepLoglariGetAllUrl = baseUrl + "/Api/IsTalepLoglari/GetAll";
const IsTalepLoglariGetByIdUrl = baseUrl + "/api/IsTalepLoglari/GetById";
const IsTalepLoglariUpdateUrl = baseUrl + "/Api/IsTalepLoglari/Update";
const IsTalepLoglariDeleteUrl = baseUrl + "/Api/IsTalepLoglari/Delete";

const KullanicilarCreateUrl = baseUrl + "/Api/Kullanicilar/Create";
const KullanicilarGetAllUrl = baseUrl + "/Api/Kullanicilar/GetAll";
const KullanicilarGetByUserNameUrl =
  baseUrl + "/api/Kullanicilar/GetByUserName";
const KullanicilarUpdateUrl = baseUrl + "/Api/Kullanicilar/Update";
const KullanicilarDeleteUrl = baseUrl + "/Api/Kullanicilar/Delete";

const YetkilerCreateUrl = baseUrl + "/Api/Yetkiler/Create";
const YetkilerGetAllUrl = baseUrl + "/Api/Yetkiler/GetAll";
const YetkilerGetByIdUrl = baseUrl + "/api/Yetkiler/GetById";
const YetkilerUpdateUrl = baseUrl + "/Api/Yetkiler/Update";
const YetkilerDeleteUrl = baseUrl + "/Api/Yetkiler/Delete";

const LoginUrl = baseUrl + "/Api/Authenticate/Login";
const ValidateTokenUrl = baseUrl + "/Api/Authenticate/validate";

const CarilerGetAllUrl = baseUrl + "/Api/Cariler/GetAll";

const UploadUrl = baseUrl + "/Api/Dosyalar/Upload";
const DownloadMultipleFilesUrl = baseUrl + "/Api/Dosyalar/Download";
const DownloadSingleUrl = baseUrl + "/Api/Dosyalar/DownloadSingle";
const DosyalarGetAll = baseUrl + "/Api/Dosyalar/GetAll";
const DosyalarDeleteUrl = baseUrl + "/Api/Dosyalar/Delete";

const PaketHareketleriCreateUrl = baseUrl + "/Api/PaketHareketleri/Create";
const PaketHareketleriGetAllUrl = baseUrl + "/Api/PaketHareketleri/GetAll";
const PaketHareketleriGetByIdUrl = baseUrl + "/Api/PaketHareketleri/GetById";
const PaketHareketleriGetByBarcodeUrl =
  baseUrl + "/Api/PaketHareketleri/GetByBarcode";
const PaketHareketleriGenerateBarcodeUrl =
  baseUrl + "/Api/PaketHareketleri/GenerateBarcode";
const PaketHareketleriUpdateUrl = baseUrl + "/Api/PaketHareketleri/Update";
const PaketHareketleriDeleteUrl = baseUrl + "/Api/PaketHareketleri/Delete";

const TeslimEdilenPaketlerGetAllUrl =
  baseUrl + "/Api/TeslimEdilenPaketlerView/GetAll";
const BekleyenPaketlerGetAllUrl = baseUrl + "/Api/BekleyenPaketlerView/GetAll";

const TeslimEdileniBeklemeyeCekUrl =
  baseUrl + "/Api/PaketHareketleri/TeslimEdileniBeklemeyeCek";

const CariPersonellerGetAllUrl = baseUrl + "/Api/F10lar/CariPersonellerGetAll";
const StokReyonlariGetAllUrl = baseUrl + "/Api/F10lar/StokReyonlariGetAll";

const Url = {
  LoginUrl,
  ValidateTokenUrl,

  CariPersonellerGetAllUrl,
  StokReyonlariGetAllUrl,

  UploadUrl,
  DownloadMultipleFilesUrl,
  DownloadSingleUrl,
  DosyalarGetAll,
  DosyalarDeleteUrl,

  CarilerGetAllUrl,

  BildirimlerCreateUrl,
  BildirimlerGetAllUrl,
  BildirimlerGetByIdUrl,
  BildirimlerUpdateUrl,
  BildirimlerDeleteUrl,

  DepartmanlarCreateUrl,
  DepartmanlarGetAllUrl,
  DepartmanlarGetByIdUrl,
  DepartmanlarUpdateUrl,
  DepartmanlarDeleteUrl,

  IsTalepAtamalariCreateUrl,
  IsTalepAtamalariGetAllUrl,
  IsTalepAtamalariGetByIdUrl,
  IsTalepAtamalariUpdateUrl,
  IsTalepAtamalariDeleteUrl,

  IsTalepleriCreateUrl,
  IsTalepleriGetAllUrl,
  IsTalepleriGetByIdUrl,
  IsTalepleriUpdateUrl,
  IsTalepleriDeleteUrl,

  IsTalepMesajlariCreateUrl,
  IsTalepMesajlariGetAllUrl,
  IsTalepMesajlariGetByIdUrl,
  IsTalepMesajlariUpdateUrl,
  IsTalepMesajlariDeleteUrl,

  IsTalepLoglariCreateUrl,
  IsTalepLoglariGetAllUrl,
  IsTalepLoglariGetByIdUrl,
  IsTalepLoglariUpdateUrl,
  IsTalepLoglariDeleteUrl,

  KullanicilarCreateUrl,
  KullanicilarGetAllUrl,
  KullanicilarGetByUserNameUrl,
  KullanicilarUpdateUrl,
  KullanicilarDeleteUrl,

  YetkilerCreateUrl,
  YetkilerGetAllUrl,
  YetkilerGetByIdUrl,
  YetkilerUpdateUrl,
  YetkilerDeleteUrl,
  customBg,

  PaketHareketleriCreateUrl,
  PaketHareketleriGetAllUrl,
  PaketHareketleriGetByIdUrl,
  PaketHareketleriUpdateUrl,
  PaketHareketleriDeleteUrl,
  TeslimEdileniBeklemeyeCekUrl,
  PaketHareketleriGetByBarcodeUrl,
  PaketHareketleriGenerateBarcodeUrl,

  TeslimEdilenPaketlerGetAllUrl,
  BekleyenPaketlerGetAllUrl,
};
export default Url;
