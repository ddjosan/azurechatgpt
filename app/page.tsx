import { LogIn } from "@/components/login/login";
import { Card } from "@/components/ui/card";
import { userSession } from "@/features/auth/helpers";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await userSession();
  if (user) {
    redirect("/chat");
  }
  return (
      <LogIn />
  );
}
