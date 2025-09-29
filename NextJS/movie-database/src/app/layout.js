import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";


export const metadata = {
  title: "Movie Database",
  description: "A comprehensive movie database application built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />
                <main className="min-h-screen bg-gray-900 text-white">

        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
