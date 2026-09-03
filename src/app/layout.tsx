import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import ClientLayout from "@/components/ClientLayout";
import SectionObserver from "@/components/SectionObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talles Furtado - Personal Trainer",
  description:
    "Transforme seu corpo com a metodologia do Personal Trainer Talles Furtado. Especialista em hipertrofia e emagrecimento.",
  keywords:
    "personal trainer, hipertrofia, emagrecimento, musculação, treino, dieta, Talles Furtado",
  openGraph: {
    title: "Talles Furtado | Personal Trainer",
    description:
      "Transforme seu corpo com o Time TF. Treinos e dietas personalizadas.",
    url: "https://talles-personal.vercel.app",
    siteName: "Talles Furtado Personal Trainer",
    images: [
      {
        url: "https://talles-personal.vercel.app/img/Seo_img/t1.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talles Furtado | Personal Trainer",
    description: "Consultoria fitness e treinos personalizados.",
    images: ["https://talles-personal.vercel.app/img/Seo_img/t1.jpeg"],
  },
  icons: {
    icon: "/img/Logo/dumbell.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-deepBlue text-myWhite flex h-dvh min-h-full flex-col">
        <ClientLayout>
          {/*
           * O observer fica em um ponto global da aplicação.
           * Assim não precisamos colocar useSectionObserver manualmente em
           * cada seção e não corremos o risco de esquecer alguma delas.
           */}
          <SectionObserver />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
