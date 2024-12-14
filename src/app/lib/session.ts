"use server"



import 'server-only'
import { importX509, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import axios from 'axios'
import base64url from 'base64url'

 
export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const cookieStore = await cookies();
  
  cookieStore .set(
    'session',
    token,
    {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
    });
  
}


export async function decrypt(token = '') {
  try {
    if (!token || typeof token !== 'string') {
      throw new Error('Token is undefined or empty.');
    }

    // Fetch public keys from Firebase
    const { data: publicKeys } = await axios.get(
      'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com'
    );

    // Decode the JWT header
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format. Expected a JWT with three parts.');
    }
    const header = JSON.parse(base64url.decode(parts[0]));
    // const header = JSON.parse(Buffer.from(token.split('.')[0], 'base64').toString());
    // const kid = publicKeys[header.kid];
    const kid = header.kid;

    if (!kid) {
      throw new Error('Missing "kid" in token header.');
    }

    // Retrieve the public key PEM
    const publicKeyPem = publicKeys[kid];
    if (!publicKeyPem) {
      throw new Error(`Public key not found for kid: ${kid}`);
    }
    // console.log(kid);
    // const jwk = {
    //   kty: 'RSA',
    //   e: kid.e,
    //   n: kid.n
    // };
    const key = await importX509(publicKeyPem, 'RS256');
    // Convert PEM to CryptoKey
    // const publicKey = await pemToCryptoKey(publicKeyPem);

    // Verify the JWT
    const {payload}  = await jwtVerify(token, key, {
      algorithms: ['RS256']
    }); 
    
    return payload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

export async function updateSession() {
    const session = (await cookies()).get('session')?.value
    const payload = await decrypt(session)
   
    if (!session || !payload) {
      return null
    }
   
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
   
    const cookieStore = await cookies()
    cookieStore.set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expires,
      sameSite: 'lax',
      path: '/',
    })
  }

  export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
  }