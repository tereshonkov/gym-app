import Image from "next/image";


export default function Index() {
  return (
    <div id="dienstleistungen" className="w-full bg-gradient-to-b from-gray-800 to-black text-white  flex sm:flex-row flex-col items-center">
        <Image src={"/support.jpg"} width={400} height={400} alt="support" className="sm:w-1/2"/>
        <div className="flex flex-col items-center justify-center sm:w-1/2">
            <h1 className="text-5xl font-bold text-center mb-8">Unterstützung</h1>
            <p className="text-xl text-center px-4 max-w-2xl mx-auto">
            Unser Support-Team steht Ihnen bei Fragen oder Problemen gerne zur Verfügung.
            Zögern Sie nicht, uns über das untenstehende Kontaktformular oder per E-Mail zu kontaktieren.
            </p>
        </div>
    </div>
  );
}


