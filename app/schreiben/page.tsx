"use client"
import { useState } from "react"

type FormValue = {
    name: string;
    email: string;
    category: string;
    privacyPolicy: boolean;
}

export default function Index() {
    const [value, setValue] = useState<FormValue>({
        name: "",
        email: "",
        category: "1",
        privacyPolicy: false,  // Додано стан для чекбоксу
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value.privacyPolicy) {
            alert("Bitte akzeptieren Sie die Datenschutzerklärung.");  // Попередження, якщо чекбокс не відмічено
            return;
        }

        // Виведення значень форми в консоль
        console.log(value);
        setValue({
            name: "",
            email: "",
            category: "1",
            privacyPolicy: false,  // Скидаємо значення чекбоксу після відправки форми
        });
        setShowPopup(true); 
        setTimeout(()=> {setShowPopup(false)}, 3000);
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center justify-center gap-6 p-6">
            <h2 className="text-5xl font-bold text-center mb-4">Haben Sie Fragen zur Ausrüstung oder zur Arbeitsorganisation, hatten Sie Probleme mit der Auswahl der Ausrüstung oder etwas anderes? Hinterlassen Sie eine Anfrage und wir werden Ihnen helfen!</h2>
            {/* <h3 className="text-4xl text-center max-w-3xl mb-6 px-4">
                Haben Sie Fragen oder benötigen Sie ein Beratungsgespräch mit unserem Spezialisten? Hinterlassen Sie Ihre E-Mail und wir werden Sie so schnell wie möglich kontaktieren!
            </h3> */}
            <form className="flex flex-col gap-6 w-full max-w-lg p-6 bg-gray-900 rounded-xl shadow-2xl">
                <input
                    value={value.name}
                    onChange={(e) => setValue({ ...value, name: e.target.value })}
                    type="text"
                    placeholder="Name"
                    className="p-4 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300"
                />
                <input
                    value={value.email}
                    onChange={(e) => setValue({ ...value, email: e.target.value })}
                    type="email"
                    placeholder="Email"
                    className="p-4 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300"
                />
                <select
                    value={value.category}
                    onChange={(e) => setValue({ ...value, category: e.target.value })}
                    name="category"
                    id="category"
                    className="p-4 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300"
                >
                    <option value="1">Fitnessstudio</option>
                    <option value="2">Für Zuhause</option>
                    <option value="3">Andere</option>
                </select>

                {/* Чекбокс для політики конфіденційності */}
                <label className="text-sm text-gray-400 flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={value.privacyPolicy}
                        onChange={(e) => setValue({ ...value, privacyPolicy: e.target.checked })}
                        className="focus:ring-2 focus:ring-emerald-600"
                    />
                    Ich akzeptiere die <a href="#" className="text-emerald-500">Datenschutzerklärung</a>.
                </label>

                <button 
                    onClick={handleSubmit} 
                    className="p-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-semibold transition duration-300"
                >
                    Absenden
                </button>
            </form>
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-black">
                        <p>Wir danken Ihnen für Ihre Bewerbung. Unser Support-Team wird Sie innerhalb einer Stunde kontaktieren</p>
                    </div>
                </div>
            )}
        </div>
    )
}
