import CryptoJS from 'crypto-js'

export const generateMarvelAuth = (publicKey: string, privateKey: string) => {
  const ts = new Date().getTime().toString()
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()

  return { ts, hash }
}
