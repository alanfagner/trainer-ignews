import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

import { signIn, useSession, signOut } from "next-auth/client";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button
      onClick={() => signOut()}
      className={styles.signButton}
      type="button"
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      className={styles.signButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
