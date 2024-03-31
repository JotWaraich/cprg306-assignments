"use client";

import { BsGoogle } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { UseUserAuth } from "./_uttils/auth-context";
import Page from "./shopping-list/page.js";
export default function page() {
  const { user, gitHubSignIn, firebaseSignOut, googleSignIn } = UseUserAuth();

  async function signInGithub() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function signInGoogle() {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="">
      {user ? (
        <Page signOut={signOut} user={user} />
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col justify-center items-center gap-10 text-2xl">
            <h1 className="text-5xl font-bold m-2 justify-center flex">
              Sign in to continue
            </h1>
            <button
              className="text-white p-2 m-2 rounded-md bg-[#555555] flex flex-row w-80 gap-4 text-[25px]"
              onClick={signInGithub}
            >
              <AiFillGithub className="mt-1 ml-4" />
              Sign in with GitHub
            </button>
            <button
              className="text-white p-2 m-2 rounded-md bg-blue-700 flex flex-row w-80 gap-4 text-[25px]"
              onClick={signInGoogle}
            >
              <BsGoogle className="mt-1 ml-4" />
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
