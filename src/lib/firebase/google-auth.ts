import { WAVVE_EMAIL_DOMAIN } from "@/constants/auth";
import {
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  type User,
} from "@firebase/auth";
import { fireauth } from "./firebase";

const _checkIfUserIsWavvie = (email: string) => {
  if (email.endsWith(WAVVE_EMAIL_DOMAIN)) {
    return true;
  }
  return false;
};
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  hd: WAVVE_EMAIL_DOMAIN,
});
googleProvider.addScope("email");

const loginGoogle = async () => {
  try {
    const loginResult = await signInWithPopup(fireauth, googleProvider);
    const { email, displayName } = loginResult.user;
    if (!email || !_checkIfUserIsWavvie(email)) {
      throw { code: "auth/not-wavvie", user: loginResult.user };
    }

    if (!displayName) {
      await updateProfile(loginResult.user, {
        displayName: email.split("@")[0],
      });
    }
  } catch (error) {
    console.error(error);

    if (typeof error !== "object" || error === null) {
      throw error;
    }

    if (
      "code" in error &&
      "user" in error &&
      error.code === "auth/not-wavvie"
    ) {
      await deleteUser(error.user as User);
      alert("Wavve 사내 메일로 가입해주세요 🌊");
    }

    throw error;
  }
};

const logoutGoogle = async () => {
  try {
    await fireauth.signOut();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { loginGoogle, logoutGoogle };
