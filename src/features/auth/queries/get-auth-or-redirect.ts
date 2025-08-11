import { redirect } from "next/navigation";
import { getAuth } from "./get-auth";
import { signInPath } from "@/paths";

export const getAuthOrRedirect = async () => {
      const { user } = await getAuth();

  if (!user) {
    redirect(signInPath());
  }
}