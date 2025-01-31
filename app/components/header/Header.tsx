

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 px-8 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight">          
          <span className="mr-2">React</span><span className="text-yellow-300"> & Next.Js</span> 
        </div>
        
      </div>
    </header>
  );
}