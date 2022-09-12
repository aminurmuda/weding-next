import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="mt-2">
        <button className="action-button" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="mt-2">
      <button className="action-button" onClick={() => signIn("google")}>
        Sign in
      </button>
    </div>
  );
}
