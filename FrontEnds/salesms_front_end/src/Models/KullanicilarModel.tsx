

import { YetkilerModel } from "./YetkilerModel"


export interface KullanicilarModel {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: string
    lockoutEnabled: boolean
    accessFailedCount: number
    kullaniciId: string
    kullaniciSifreStr: string
    kullaniciEvrakSeri: string
    kullaniciUzunAdi: string
    kullaniciIsAdmin: boolean
    kullaniciIsActive: boolean
    kullanicininBagliOlduguDepartmanId: string
    departmanAdi: string
    kullanicininBagliOlduguYetkiId: string
    yetkiAdi: string
    kullaniciToken: string
    kullaniciTokenExpiration: string
    kullaniciCariPersonelKodu: string
    kullaniciCariPersonelAdi: string

    kullaniciBarcodeWidth: number
    kullaniciBarcodeHeight: number
    kullaniciBarcodeNumberOfCopies: number



}


