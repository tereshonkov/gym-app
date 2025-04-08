"use client"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center md:items-start lg:flex-col">
                        <a href="/cookie" className="text-gray-400 hover:text-white transition duration-300">Cookie</a>
                        <a href="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
                        <a href="/terms" className="text-gray-400 hover:text-white transition duration-300">Terms & Use</a>
                    </div>
                    <div className="flex flex-col gap-4 mt-6 md:mt-0">
                        <div className="text-gray-400">
                            <p>Adresse: Beispielstraße 12, 10115 Berlin, Deutschland</p>
                            <p>Telefon: +49 30 84956734</p>
                            <p>E-Mail: info@fitnesstoredege.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                <p>&copy; 2025. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    )
}
