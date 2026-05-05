import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/animations/custom-cursor";


const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "EMON  Portfolio",
  description: "A passionate full-stack developer and digital craftsman dedicated to building high-performance web applications with refined aesthetics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${manrope.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>

      </body>
    </html>
  );
}
