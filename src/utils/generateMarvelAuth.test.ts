import { generateMarvelAuth } from './generateMarvelAuth'
import CryptoJS from 'crypto-js'

describe('generateMarvelAuth', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should generate the correct ts and hash', () => {
    const publicKey = 'publicKey123'
    const privateKey = 'privateKey456'
    const mockedTime = 1234567890
    const mockedTs = mockedTime.toString()

    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(mockedTime)

    const result = generateMarvelAuth(publicKey, privateKey)

    const expectedHash = CryptoJS.MD5(
      mockedTs + privateKey + publicKey
    ).toString()

    expect(result.ts).toBe(mockedTs)
    expect(result.hash).toBe(expectedHash)
  })
})
