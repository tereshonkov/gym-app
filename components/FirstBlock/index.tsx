"use client"
import Image from "next/image"
import { motion } from "framer-motion"


export default function First() {
  return (
    <section className="w-screen flex flex-col text-white bg-gradient-to-b from-black to-gray-800">
      <h2 className="text-5xl text-center py-15">Für wen ist unser Fitness-Equipment genau richtig?</h2>

{/* 1. Für Fitnessstudios */}
<motion.div 
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="flex flex-col md:flex-row gap-5 justify-center items-center w-[70%] h-[300px] m-10 p-7 border border-gray-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] rounded-2xl">
  <div className="flex flex-col gap-7 md:w-1/2">
    <h3 className="text-center text-3xl md:text-left">Fitnessstudios</h3>
    <p className="hidden md:block text-xl text-left">
      Hochwertige Geräte für professionelle Studios – bieten Sie Ihren Mitgliedern eine erstklassige Trainingsumgebung mit modernen Kraft- und Ausdauergeräten.
    </p>
  </div>
  <Image
    width={400}
    height={400}
    src="/gym1.jpg"
    alt="trainer"
   className="md:w-1/2 h-full object-cover rounded-xl"
  />
</motion.div>

{/* 2. Für Personal Trainer */}
<motion.div 
initial={{ opacity: 0, x: 100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ amount: 0.4 }}
className="flex flex-col md:flex-row md:self-end gap-5 justify-center items-center w-[70%] h-[300px] m-10 p-7 border border-gray-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] rounded-2xl">
  <div className="flex flex-col gap-7 md:w-1/2">
    <h3 className="text-center text-3xl md:text-left">Personal Trainer</h3>
    <p className="hidden md:block text-xl text-left">
    Platzsparendes Equipment für Personal Trainer – ideal für effektives 1:1 Training überall.
    </p>
  </div>
  <Image
    width={400}
    height={400}
    src="/gym2.jpg"
    alt="trainer"
    className="md:w-1/2 h-full object-cover rounded-xl"
  />
</motion.div>

{/* 3. Für Home-Gyms */}
<motion.div 
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ amount: 0.4 }}
className="flex flex-col md:flex-row gap-5 justify-center items-center w-[70%] h-[300px] m-10 p-7 border border-gray-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] rounded-2xl">
  <div className="flex flex-col gap-7 md:w-1/2">
    <h3 className="text-3xl text-left">Home-Gyms</h3>
    <p className="hidden md:block text-xl text-left">
      Kompakte und multifunktionale Geräte für Ihr persönliches Training zu Hause – platzsparend, modern und einfach zu bedienen.
    </p>
  </div>
  <Image
    width={400}
    height={400}
    src="/gym3.jpg"
    alt="trainer"
    className="md:w-1/2 h-full object-cover rounded-xl"
  />
</motion.div>

{/* 4. Für Reha-Zentren */}
<motion.div 
initial={{ opacity: 0, x: 100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ amount: 0.4 }}
className="flex flex-col md:flex-row gap-5 md:self-end justify-center items-center w-[70%] h-[300px] m-10 p-7 border border-gray-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] rounded-2xl">
  <div className="flex flex-col gap-7 md:w-1/2">
    <h3 className="text-3xl text-left">Reha-Zentren</h3>
    <p className="hidden md:block text-xl text-left">
      Ergonomische Trainingsgeräte für sichere und effektive Rehabilitation – individuell anpassbar für jede Phase der Genesung.
    </p>
  </div>
  <Image
    width={400}
    height={400}
    src="/gym4.jpg"
    alt="trainer"
    className="md:w-1/2 h-full object-cover rounded-xl"
  />
</motion.div>


    </section>
  )
}
