import { signIn, signOut } from 'next-auth/react';

export const authService = {
  loginWithProvider(provider: 'google' | 'github') {
    return signIn(provider);
  },

  logout() {
    return signOut({ callbackUrl: '/' });
  },
};

export async function verifyOtp(code: string) {
  // Placeholder implementation for type-checking and tests
  return Promise.resolve(code === '1234');
}
