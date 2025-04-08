import Nav from "@/components/Nav/nav";


export default function Header() {

  return (
    <header className="bg-[url('/hero.jpg')] bg-cover h-[80vh] sm:h-[100vh] w-full">
      <Nav />
      <div className="flex flex-col gap-4 items-center justify-center h-[80vh]">
        <h1 className="text-4xl text-center sm:text-5xl md:text-left text-white md:w-1/2">
          Qualitativ hochwertiges Fitness-Equipment für Ihr Training
        </h1>
        <p className="text-xl text-center sm:text-xl md:text-left text-white md:w-1/2">
          Entdecken Sie erstklassige Fitnessgeräte für Ihr Fitnessstudio,
          Heimtraining oder Fitnesscenter. Wir bieten eine breite Auswahl an
          hochwertigen Trainingsgeräten, die Ihre Fitnessziele unterstützen.
          Beginnen Sie noch heute mit Ihrem Training – für mehr Kraft, Ausdauer
          und Gesundheit!
        </p>
      </div>
    </header>
  );
}
