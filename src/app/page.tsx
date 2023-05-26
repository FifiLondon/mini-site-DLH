import Image from 'next/image'

export default function Home() {
  return (
    <main className="carte flex justify-center items-center h-screen flex-col text-center">

      <div className="cadre background gradient bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-lg flex gap-3 items-center animate-bounce duration-500" >

        <img src="/photoprofil.jpeg" className="w-32 h-32 rounded-full border shadow" />

        <div className="text flex flex-col text-left gap-2">

          <p className="text-xl"> Philippe JOURDAN</p>
          <p className="text-xl"> Senior Tech. recruiter</p>
          <p className="text-xl"> SFEIR Luxembourg🇱🇺</p>

        </div>

      </div>



    </main>
  )
}
