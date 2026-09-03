"use client";

import Navbar from "@/components/NavBar";
import MobileMenu from "./MobileMenu";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/*
       * A navbar tradicional existe apenas no desktop.
       * No mobile, toda a navegação fica concentrada na barra inferior.
       */}
      <Navbar />
      <MobileMenu />

      {/*
       * `min-h-0` é importante para permitir que #page-scroll seja realmente
       * um container interno de rolagem dentro do layout flex.
       * O padding inferior evita que a barra mobile cubra o conteúdo final.
       */}
      <main className="min-h-0 flex-1 pt-0 pb-24 lg:pt-16 lg:pb-0">
        {children}
      </main>
    </>
  );
}
