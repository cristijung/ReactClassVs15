"use client";
import MenuLink from "../menuLink/MenuLink";

export default function NavBar() {
  return (
    <>
      <nav className="h-20 flex items-center justify-between px-4 gap-4">        
        <MenuLink texto="Home" href="/" />
        <MenuLink texto="Galeria" href="/gallery" />
        <MenuLink texto="Documentos" href="/documents" />
        <MenuLink texto="Contato" href="/contact" />
       
      </nav>
    </>
  );
}
