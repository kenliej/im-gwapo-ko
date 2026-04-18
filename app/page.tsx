// app/page.tsx
export default function Home() {
  const members = [
    { id: 1, name: "Kenlie", role: "Useless", image: "/images/kenlie-gwapo.jpg" },
    { id: 2, name: "Charlie", role: "Leader", image: "/images/charlie-gwapa.PNG" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center font-medium text-violet-700">
          B
        </div>
        <div>
          <h1 className="text-lg font-medium text-gray-900">BSIT 2A</h1>
          <p className="text-sm text-gray-500">Mga Gwapo nga Miyembro</p>
        </div>
      </header>

      <main className="px-8 py-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Members</p>

        <div className="grid grid-cols-2 gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-xl p-5 text-center"
            >
              <img 
                src={member.image}
                alt={member.name}
                className="w-14 h-14 rounded-full mx-auto mb-3 object-cover"
              />
              <p className="font-medium text-gray-900">{member.name}</p>
              <p className="text-xs text-gray-500 mt-1 mb-3">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Impormasyon</p>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">In here we use tailwind base css instead of custom css we use tailwind css to achieve our desired styling.</h2>
            <h2 className="text-1xl text-gray-900 mb-4">Using grid is kinda messy if using custom css but tailwind makes it easy.</h2>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-medium text-violet-900 mb-2">Our Goals</h3>
                <p className="text-sm text-gray-600">It shows here using tailwind css to achieve our desired styling.</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-medium text-violet-900 mb-2">Gwapoko</h3>
                <p className="text-sm text-gray-600">Basta using tailwind css makes your life easier that using custom css sir pls 1.0</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
