import crypto from 'crypto';


const bcryptHash = process.env.AUTH_BCRYPT as string;

/**
 * 加密函数
 * @param text
 * @param password
 */
export function encrypt(password: string): string {
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(password, 'salt', 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = Buffer.concat([cipher.update(bcryptHash, 'utf8'), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

/**
 * 解密函数
 * @param encrypted
 * @param password
 */
export function decrypt(encrypted: string, password: string): boolean {
    try {
        const textParts = encrypted.split(':');
        const iv = Buffer.from(textParts.shift() as string, 'hex');
        const key = crypto.scryptSync(password, 'salt', 32);
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        const encryptedText = Buffer.from(textParts.join(':'), 'hex');
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString() === bcryptHash;
    } catch (error) {
        return false;
    }
}

// export function decrypt(encrypted: string, password: string):string {
//     const textParts = encrypted.split(':');
//     const iv = Buffer.from(textParts.shift() as string, 'hex');
//     const key = crypto.scryptSync(password, 'salt', 32);
//     const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
//     const encryptedText = Buffer.from(textParts.join(':'), 'hex');
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
// }