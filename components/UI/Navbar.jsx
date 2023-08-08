import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Category from "./Category";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md bg-white z-50">
      <div
        className={`${
          isOpen ? "block md:hidden" : "hidden"
        } fixed z-50 bg-neutral-900/70  inset-0 `}
      >
        <div
          style={{ transition: "all 0.3s ease-in-out" }}
          className={`
                    translate duration-300 w-4/6 pt-20  gap-4 h-full bg-primary flex flex-col text-xl font-semibold relative sm:text-blue-grayishBlue  bg-white
        

        `}
        >
          <Image
            onClick={setOpen}
            className=" absolute top-4 left-4"
            src="/icon-close.svg"
            alt="Image"
            width="12"
            height="12"
          />

          <div className={`ml-20 flex flex-col gap-5 md:hidden text-black`}>
            <Link href="/pcBuilder">PC Builder</Link>
            <span>
              <Category />
            </span>
          </div>

          <div className={`ml-20 flex flex-col gap-5 md:hidden`}>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-6 container mx-auto">
        <div className="flex gap-3 items-center justify-center">
          <Image
            onClick={setOpen}
            className="md:hidden"
            src="/icon-menu.svg"
            alt="Image"
            width="15"
            height="15"
          />
          <Link href="/">
            <h1 className="text-4xl">PC craftsmen</h1>
          </Link>

          <div className={`ml-20 md:flex gap-5 hidden`}>
            <Link href="/pcBuilder">PC Builder</Link>
            <span>
              <Category />
            </span>
          </div>
        </div>

        <div className={`ml-20 md:flex gap-5 hidden`}>
          <Link href="/profile">Profile</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
