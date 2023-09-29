"use client";
import { signIn } from "next-auth/react";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const LogIn = () => {
  const containerStyle = {
    backgroundImage: `url(/login.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
  };

  const buttonLogin = {
    backgroundColor: '#fff',
    borderRadius: '.5rem',
    width: 300,
    height: 45,
    border: 'none',
    fontSize: '1.2em',
    color: '#000',
    cursor: 'pointer',
    marginTop: 10,
    marginRight: 'auto',
    boxShadow: '0 2px 10px rgba(0, 0, 150, .15)'
  }
  return (
    <div className="flex -m-2 w-screen">
      <div className="flex flex-col justify-center items-center w-1/2">
        <img src='/undp-logo.png' className="w-1/5"/>
        <CardHeader className="items-center">
          <CardTitle className="text-2xl flex gap-2">
            <span>
              Azure<span className="text-muted-foreground">ChatGPT</span>
            </span>
          </CardTitle>
          <CardDescription>
            Login in with your UNDP account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid">
          <button onClick={() => signIn("azure-ad")} style={buttonLogin}> UNDP User</button>
          <button onClick={() => signIn("github")} style={buttonLogin}>GitHub</button>
        </CardContent>
      </div>
      <div style={containerStyle} />
    </div>
  );
};
