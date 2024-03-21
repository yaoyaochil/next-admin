import crypto, {createCipher} from 'crypto';


const bcrypt = process.env["Bcrypt"] as string;

/**
 * 加密函数
 * @param text
 * @param password
 */
export function encrypt(password: string): string {
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(password, 'salt', 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = Buffer.concat([cipher.update(bcrypt, 'utf8'), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

/**
 * 解密函数
 * @param encrypted
 * @param password
 */
export function decrypt(encrypted: string, password: string): string {
    const [iv, encryptedText] = encrypted.split(':').map(part => Buffer.from(part, 'hex'));
    const key = crypto.scryptSync(password, 'salt', 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return decrypted.toString('utf8');
}