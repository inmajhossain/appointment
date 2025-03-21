"use client";
// components/withAdminAuth.tsx
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

const withAdminAuth = (WrappedComponent: React.FC) => {
  const WithAdminAuth = (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user || user.role !== "admin") {
        router.push("/signin"); // Redirect to sign-in if not admin
      }
    }, [user, router]);

    // If user is not an admin, return null or a loading state
    if (!user || user.role !== "admin") {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return WithAdminAuth;
};

export default withAdminAuth;
