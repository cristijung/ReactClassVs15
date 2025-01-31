export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 px-8 md:px-12 lg:px-20 mt-auto">
        <div className="container mx-auto text-center text-white text-sm md:text-base">
          {/* seção para o footer ------ assim é um comentário no react */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cristina Jung. Todos os direitos reservados.
            </div>
            <div> 
              <a href="/politica-de-privacidade" className="mr-4 hover:underline">Política de Privacidade</a>
              <a href="/termos-de-uso" className="hover:underline">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }