import { Kufam } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";


export const revalidate = 2

const kufam = Kufam({
  subsets: ['latin'],
  variable: '--font-kufam',
})


export const metadata = {
  title: "Properland",
  description: "A real Estate website built with Next.js",
  image: "/images/hero.png",
  url: "https://properland.com",
  type: "website",
  keywords: ["real estate", "properties", "houses", "apartments"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kufam.variable}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}