import Image from "next/image";


export default function index() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white  flex sm:flex-row flex-col items-center">
        <Image src={"/support.jpg"} width={400} height={400} alt="support" className="sm:w-1/2"/>
        <div className="flex flex-col items-center justify-center sm:w-1/2">
            <h1 className="text-5xl font-bold text-center mb-8">Support</h1>
            <p className="text-xl text-center px-4 max-w-2xl mx-auto">
                Our support team is here to assist you with any questions or issues you may have. 
                Feel free to reach out to us through the contact form below or via email.
            </p>
        </div>
    </div>
  );
}


