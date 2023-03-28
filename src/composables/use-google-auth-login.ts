import { WAVVE_EMAIL_DOMAIN } from "@/constants/auth";
import { fireauth } from "@/lib/firebase";
import {
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from "@firebase/auth";

const _checkIfUserIsWavvie = (email: string) => {
  if (email.endsWith(WAVVE_EMAIL_DOMAIN)) {
    return true;
  }
  return false;
};

const useGoogleAuthLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.addScope("email");

  const login = async () => {
    try {
      const loginResult = await signInWithPopup(fireauth, googleProvider);
      const { email } = loginResult.user;
      if (!email || !_checkIfUserIsWavvie(email)) {
        throw { code: "auth/not-wavvie", user: loginResult.user };
      }
    } catch (error) {
      console.log(error);

      if (typeof error !== "object" || error === null) {
        throw error;
      }

      if (
        "code" in error &&
        "user" in error &&
        error.code === "auth/not-wavvie"
      ) {
        alert("Wavve 사내 메일로 가입해주세요 🌊");

        await deleteUser(error.user as User);
      }

      throw error;
    }
  };

  const logout = async () => {
    try {
      await fireauth.signOut();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return {
    login,
    logout,
  };
};

export default useGoogleAuthLogin;
