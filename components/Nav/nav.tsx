"use client";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-center  py-4 text-emerald-500 px-30 relative">
      <nav>
        <ul className="hidden lg:flex justify-center space-x-4">
          <li>
            <a
              href="#"
              className="hover:bg-green-500 rounded-2xl p-2 w-[160px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
            >
              Startseite
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
            >
              Kunden
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-green-500 rounded-2xl p-2 w-[180px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
            >
              Unsere Produktpalette
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
            >
              Arrangement
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
            >
              Dienstleistungen
            </a>
          </li>
          <li>
            <a
              href="/schreiben"
              className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
            >
              Schreiben Sie Uns
            </a>
          </li>
        </ul>
      </nav>
      <div
        onClick={handleOpen}
        className="flex flex-col gap-2 cursor-pointer lg:hidden absolute top-[10px] right-[10px]"
      >
        <span className="w-[50px] h-[3px] bg-white"></span>
        <span className="w-[50px] h-[3px] bg-white"></span>
        <span className="w-[50px] h-[3px] bg-white"></span>
      </div>
      {isOpen && (
        <nav className="flex justify-center items-center w-screen h-screen bg-gray-700 absolute top-0 left-0">
          <div
            onClick={handleOpen}
            className="w-[50px] h-[50px] absolute top-[20px] right-[5px] flex justify-center items-center"
          >
            <span className="block w-[30px] h-[1px] bg-white rotate-45 absolute"></span>
            <span className="block w-[30px] h-[1px] bg-white rotate-135 absolute"></span>
          </div>
          <ul className="flex flex-col gap-4 justify-center items-center">
            <li>
              <a
                href="#"
                className="hover:bg-green-500 rounded-2xl p-2 w-[160px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
              >
                Startseite
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
              >
                Kunden
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-green-500 rounded-2xl p-2 w-[180px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
              >
                Unsere Produktpalette
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
              >
                Arrangement
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
              >
                Dienstleistungen
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-green-500 rounded-2xl p-2 w-[150px] h-[30px] text-white flex items-center justify-center cursor-pointer bg-emerald-700"
              >
                Schreiben Sie Uns
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
