// components/AuthGuard.tsx

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
