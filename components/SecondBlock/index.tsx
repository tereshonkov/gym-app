"use client"
import Image from "next/image"
import { useState } from "react"

export default function index() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleOpen = (): void => {
        setModalOpen(!modalOpen);
    }
  return (
    <section className="p-8 flex flex-col items-center gap-8 w-full relative">
<h2 className="text-5xl text-center">Unsere Produktpalette</h2>

<div className="flex gap-4 flex-wrap justify-center w-full">
<div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/oblad1.jpg"
    alt="Gym Image"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 flex flex-col items-end justify-start p-4 z-10 gap-4">
    <h1 className="text-2xl font-bold text-white">Welcome to Our Gym</h1>
    <p className="mt-2 text-base text-gray-200">Your fitness journey starts here</p>
    <button onClick={handleOpen} className="hover:bg-emerald-500 text-l flex justify-center items-center w-[100px] h-[25px] p-2 bg-emerald-800 rounded-3xl">Read more</button>
  </div>
</div>

<div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/oblad2.jpg"
    alt="Gym Image"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 flex flex-col items-end justify-start p-4 z-10 gap-4">
    <h1 className="text-2xl font-bold text-white">Welcome to Our Gym</h1>
    <p className="mt-2 text-base text-gray-200">Your fitness journey starts here</p>
    <button className="hover:bg-emerald-500 text-l flex justify-center items-center w-[100px] h-[25px] p-2 bg-emerald-800 rounded-3xl">Read more</button>
  </div>
</div>

<div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/oblad3.jpg"
    alt="Gym Image"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 flex flex-col items-end justify-start p-4 z-10 gap-4">
    <h1 className="text-2xl font-bold text-white">Welcome to Our Gym</h1>
    <p className="mt-2 text-base text-gray-200">Your fitness journey starts here</p>
    <button className="hover:bg-emerald-500 text-l flex justify-center items-center w-[100px] h-[25px] p-2 bg-emerald-800 rounded-3xl">Read more</button>
  </div>
</div>

<div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/oblad4.jpg"
    alt="Gym Image"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 flex flex-col items-end justify-start p-4 z-10 gap-4">
    <h1 className="text-2xl font-bold text-white">Welcome to Our Gym</h1>
    <p className="mt-2 text-base text-gray-200">Your fitness journey starts here</p>
    <button className="hover:bg-emerald-500 text-l flex justify-center items-center w-[100px] h-[25px] p-2 bg-emerald-800 rounded-3xl">Read more</button>
  </div>
</div>

<div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/oblad5.jpg"
    alt="Gym Image"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 flex flex-col items-end justify-start p-4 z-10 gap-4">
    <h1 className="text-2xl font-bold text-white">Welcome to Our Gym</h1>
    <p className="mt-2 text-base text-gray-200">Your fitness journey starts here</p>
    <button className="hover:bg-emerald-500 text-l flex justify-center items-center w-[100px] h-[25px] p-2 bg-emerald-800 rounded-3xl">Read more</button>
  </div>
</div>

<div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/oblad6.jpg"
    alt="Gym Image"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 flex flex-col items-end justify-start p-4 z-10 gap-4">
    <h1 className="text-2xl font-bold text-white">Welcome to Our Gym</h1>
    <p className="mt-2 text-base text-gray-200">Your fitness journey starts here</p>
    <button className="hover:bg-emerald-500 text-l flex justify-center items-center w-[100px] h-[25px] p-2 bg-emerald-800 rounded-3xl">Read more</button>
  </div>
</div>
{modalOpen && (
    <div className="fixed z-20 inset-0 flex items-center justify-center bg-black/50 w-screen h-screen">
      <div className="p-4 rounded-lg shadow-lg w-[90%] h-[90%] bg-gray-500">
        <h2 className="text-xl font-bold">Modal Title</h2>
        <p className="mt-2">This is a modal content.</p>
        <button onClick={handleOpen} className="mt-4 text-red-500">X</button>
      </div>
    </div>
)}
</div>

    </section>
  )
}
