import {jwtVerify, SignJWT} from "jose";

/**
 * Create a JWT token
 * @param data
 */
export async function createJwt(data: {username: string, id: number, roleId: number}) {
    const token = await new SignJWT({
        username: data.username,
        id: data.id,
        roleId: data.roleId
    })
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime(process.env.AUTH_EXPIRE as string)
        .sign(new TextEncoder().encode(process.env.AUTH_SECRET as string));
    return token;
}

/**
 * Verify a JWT token
 * @param token
 */
export async function verifyJwt(token: string) {
    try {
        const {payload} = await jwtVerify(token, new TextEncoder().encode(process.env.AUTH_SECRET as string), {
            algorithms: ["HS256"]
        });
        return payload;
    }
    catch (e) {
        return false;
    }
}