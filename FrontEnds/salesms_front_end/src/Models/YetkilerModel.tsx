export interface YetkilerModel {
    yetkiId: string
    yetkiAdi: string
    worfFlowagirebilir: boolean
    isAkisagirebilir: boolean
    wf_sadece_kendini_ilgilendiren_is_taleplerini_gorebilir: boolean
    wf_sadece_kendi_departmanina_ait_is_taleplerini_gorebilir: boolean
    wf_tum_is_taleplerini_gorebilir: boolean
    wf_talepYaratabilir: boolean
    wf_talepSilebilir: boolean
    wf_talepDuzenleyebilir: boolean
    wf_taleplerde_kullanici_atamasi_yapabilir: boolean
    wf_mesaj_silebilir: boolean
    wf_dosya_silebilir: boolean
}
