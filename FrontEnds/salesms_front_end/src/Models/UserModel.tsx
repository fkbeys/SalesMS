export interface UserModel {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: any
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: any
    lockoutEnabled: boolean
    accessFailedCount: number
}
