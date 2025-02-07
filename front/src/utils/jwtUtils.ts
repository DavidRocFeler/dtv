import * as CryptoJS from 'crypto-js';

export const jwtEncode = (token: string): string => {
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET || 'default-secret-key';
  return CryptoJS.AES.encrypt(token, secretKey).toString();
};

export const jwtDecode = (hashedToken: string): string => {
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET || 'default-secret-key';
  const bytes = CryptoJS.AES.decrypt(hashedToken, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};