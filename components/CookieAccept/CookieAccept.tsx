"use client"
import { useState } from "react"

export default function CookieAccept() {
    const [show, setShow] = useState(true);
    const handleAccept = () => {
        setShow(false);
        // Logic to accept cookies
    }
  return (
    <div className="fixed bottom-5 left-4">
        {show && (
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <p className="text-sm">
            Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website akzeptieren Sie unsere Cookie-Richtlinie.
            </p>
            <div className="flex gap-5">
            <button
                onClick={handleAccept}
                className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Zustimmen
            </button>
            <a href="/cookie"
                onClick={handleAccept}
                className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Ablehnen
            </a>
            </div>
            </div>
        )}
    </div>
  )
}
