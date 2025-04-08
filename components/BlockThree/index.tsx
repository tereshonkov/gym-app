"use client"
import Image from "next/image"
import {motion} from "framer-motion"

const fitnessStudioTips: string[] = [
    "1. Auswahl des Standorts für das Fitnessstudio: Wie man den besten Platz für ein Fitnessstudio im Haus oder im Freien wählt.",
    "2. Raumplanung: Wie man den Raum effizient aufteilt, um Komfort und Sicherheit während des Trainings zu gewährleisten.",
    "3. Auswahl von Fitnessgeräten: Wie man die besten Geräte für verschiedene Trainingsarten (Kardiotraining, Krafttraining, Yoga) auswählt.",
    "4. Optimales Design des Fitnessstudios: Stil und Farbgestaltung, um eine motivierende Atmosphäre zu schaffen.",
    "5. Beleuchtung im Fitnessstudio: Wie man die richtige Beleuchtung auswählt, um Komfort und Energie während des Trainings zu fördern.",
    "6. Soundsystem im Fitnessstudio: Wie man das richtige Audiosystem für Trainings und motivierende Musik auswählt.",
    "7. Bodenbelag für das Fitnessstudio: Welche Bodenmaterialien für Sicherheit und Komfort während des Trainings geeignet sind.",
    "8. Lagerung von Fitnesszubehör: Wie man Stauraum für Hanteln, Matten und andere Trainingshilfen organisiert.",
    "9. Sicherheit im Fitnessstudio: Wie man Sicherheit während des Trainings gewährleistet und was wichtig ist, um Verletzungen zu vermeiden.",
    "10. Verbesserung der Atmosphäre im Fitnessstudio: Wie man Düfte, Dekor und andere Details verwendet, um eine motivierende und gemütliche Atmosphäre zu schaffen."
  ];
  

export default function index() {
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-around bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <h2 className="text-5xl text-center z-10">Wie man ein Fitnessstudio einrichtet: Schritt-für-Schritt-Anleitung zur Schaffung des perfekten Trainingsraums</h2>
        <div className="flex items-center justify-center gap-5">
            <Image src="/img3.jpg" alt="Fitness" width={400} height={400} className="absolute top-0 left-0 z-0 w-full h-full"/>
            <ul className="flex flex-col items-start justify-center gap-2 z-10">
           {fitnessStudioTips.map((el,index) => (
            <motion.li
            key={index} 
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="text-2xl font-bold bg-gray-500/40 p-4 rounded-3xl shadow-lg w-full h-full">
            {el}</motion.li>
           ))}
        </ul>
        </div>
        <a href="#" className="flex mt-5 justify-center items-center self-center z-10 p-4 bg-emerald-800 hover:bg-emerald-500 rounded-3xl">Kostenlose Beratung</a>
    </div>
  )
}
