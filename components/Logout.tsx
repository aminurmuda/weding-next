import { signOut } from "next-auth/react";

export default function Component({ children }: any) {
  return (
    <>
      {children ? (
        <span onClick={() => signOut()}>{children}</span>
      ) : (
        <button
          className="action-button fullwidth mt-1"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      )}
    </>
  );
}
