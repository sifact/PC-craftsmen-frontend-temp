import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-16 text-white mt-20">
      <div className="container mx-auto md:grid md:grid-cols-[30%,auto,auto,40%] xsm:flex xsm:flex-col gap-8 justify-center">
        <div className="flex flex-col gap-4">
          <h1>About us</h1>
          <hr />
          <p>
            Elevate your computing experience using our diverse range of
            expertly designed PC customization templates.
          </p>
          <button
            className="border border-white py-2 px-16 rounded-sm text-white"
            style={{ width: "fit-content" }}
          >
            Read More
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Quick Links</h1>
          <hr />
          <Link href="/categories/cpu">Cpu</Link>
          <Link href="/categories/gpu">Gpu</Link>
          <Link href="/categories/monitor">Monitor</Link>
          <Link href="/categories/motherboard">Motherboard</Link>
          <Link href="/categories/ssd">Ssd</Link>
          <Link href="/categories/ram">Ram</Link>
          <Link href="/categories/mouse">Mouse</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Follow us</h1>
          <hr />
          <Link href="">Facebook</Link>
          <Link href="">Twitter</Link>
          <Link href="">Google</Link>
          <Link href="">Instagram</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Instagram</h1>
          <hr />
          <div className="grid xsm:grid-cols-2 md:grid-cols-3 gap-2">
            <img
              className="w-full h-full object-cover"
              src="/img/cpu-1.jpg"
              alt=""
            />
            <img
              className="w-full h-full object-cover"
              src="/img/gpu-1.jpg"
              alt=""
            />
            <img
              className="w-full h-full object-cover"
              src="/img/monitor-3.jpg"
              alt=""
            />
            <img
              className="w-full h-full object-cover"
              src="/img/mouse-1.jpg"
              alt=""
            />
            <img
              className="w-full h-full object-cover"
              src="/img/ram-2.jpg"
              alt=""
            />
            <img
              className="w-full h-full object-cover"
              src="/img/ssd-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
