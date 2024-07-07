import Image from "next/image";
import Login from "./components/login/login";
import { useState } from "react";

export default function Home() {
  const[showCompo,setShowCompo] = useState(true)
    function toggleCompo(){
        setShowCompo(!showCompo)
    }
  return (
    <main className="">
      <Login />
    </main>
  );
}
