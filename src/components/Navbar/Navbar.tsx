import React from "react";
import Image from "next/image";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="flex  items-center gap-2 bg-white border-2  py-2 px-3">
      <Image src="/img/google-keep.png" width={20} height={50} alt="logo" />
      <h3 className="text-md text-slate-700 font-semibold"> Keep</h3>
    </nav>
  );
}

export default Navbar;
