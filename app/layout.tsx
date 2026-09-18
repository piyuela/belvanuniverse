import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hola Amor | Nuestra historia",
  description: "Un pequeño museo de nuestra historia de amor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
