import { Noto_Sans_TC, Noto_Sans_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "#/styles/frontStage/front.css";
// import Providers from "#/components/Providers";
import Header from "#/components/(frontStageCompo)/Header";
import Footer from "#/components/(frontStageCompo)/Footer";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "2025 Next_Django_Yarn App",
  description: "2025 First Project for Next_Django_Yarn App",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="zh-TW" suppressHydrationWarning >
      <body
        className={`${notoSansTC.variable} ${notoSansMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header/>
          <div className="min-h-[calc(100vh-300px)]">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;