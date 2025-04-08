import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center space-y-10">
      <h1 className="text-6xl font-bold">POLS</h1>
      <div className="overflow-hidden whitespace-nowrap w-full border-y border-white py-2">
        <div className="inline-block animate-marquee">
          <span className="text-2xl mx-4">¿DÓNDE ESTÁ POLS?</span>
          <span className="text-2xl mx-4">¿DÓNDE ESTÁ POLS?</span>
          <span className="text-2xl mx-4">¿DÓNDE ESTÁ POLS?</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        {['Remeras', 'Buzos', 'Joggings', 'Camisas', 'Camperas', 'Blazers', 'Guantes', 'Gorros'].map((item) => (
          <div key={item} className="border border-white p-4 rounded-xl">{item}</div>
        ))}
      </div>
    </div>
  )
}

export default App
