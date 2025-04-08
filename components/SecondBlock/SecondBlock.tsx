"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Index() {
  return (
    <section id="unsere" className=" min-h-screen w-screen p-8 flex flex-col justify-around items-center gap-8 relative bg-gradient-to-b from-gray-800 to-black text-white">
      <h2 className="text-5xl text-center">Unsere Produktpalette</h2>

      <div className="flex gap-4 flex-wrap justify-center w-full">
        <div 

        className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/oblad1.jpg"
            alt="Gym Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-end justify-start p-4 z-10 gap-4">
            <h1 className="text-2xl font-bold text-white">Kraftreifen für Crossfit</h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-base text-gray-200 h-[100%]">Professionelles Trainingsgerät für funktionelles Training. Perfekt für Fitnessstudios und Outdoor-Bereiche.</motion.p>
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
            <h1 className="text-2xl font-bold text-white">Professionelles Laufband</h1>
            <motion.p 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
            className="mt-2 text-base text-gray-200 h-[100%]">Stabil, leistungsstark und leise – ideal für den intensiven Einsatz in Fitnessstudios und Trainingsräumen.</motion.p>
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
            <h1 className="text-2xl font-bold text-white">Multifunktionales Trainingsrack</h1>
            <motion.p 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
            className="mt-2 text-base text-gray-200 h-[100%]">Perfekt für Kraft-, Functional- und TRX-Training. Maximale Stabilität und Vielseitigkeit für jedes Fitnessstudio.</motion.p>
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
            <h1 className="text-2xl font-bold text-white">Verstellbare Kurzhanteln</h1>
            <motion.p 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
            className="mt-2 text-base text-gray-200 h-[100%]">Die ideale Lösung für Zuhause und Fitnessstudio. Gewicht blitzschnell wechseln – platzsparend und effizient trainieren.</motion.p>
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
            <h1 className="text-2xl font-bold text-white">Bauch- und Dip-Station</h1>
            <motion.p 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
            className="mt-2 text-base text-gray-200 h-[100%]">Optimal für Bauch-, Arm- und Core-Training. Kompakt, stabil und benutzerfreundlich – für effektive Workouts zu Hause oder im Studio.</motion.p>
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
            <h1 className="text-2xl font-bold text-white">Kraftstation mit Hantelbank und Langhantel</h1>
            <motion.p 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
            className="mt-2 text-base text-gray-200 h-[100%]">Robuste Ausrüstung für Grundübungen wie Bankdrücken und Kniebeugen. Perfekt für Homegym oder professionelle Studios.</motion.p>
          </div>
        </div>
      </div>

    </section>
  )
}
