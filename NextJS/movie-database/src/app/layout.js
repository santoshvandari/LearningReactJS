import "./globals.css";


export const metadata = {
  title: "Movie Database",
  description: "A comprehensive movie database application built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
