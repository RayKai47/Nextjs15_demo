import { Noto_Sans_TC, Noto_Sans_Mono } from "next/font/google";
import "#/styles/admin/admin.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Admin Page',
  description: 'Admin Page for Admin',
}

const AdminLayout = ({ children }) => {
  return (
    <html lang="zh-TW" suppressHydrationWarning >
      <body
        className={`${notoSansTC.variable} ${notoSansMono.variable} antialiased`}
      >
        <div className="min-h-[calc(100vh-300px)]">
          <p>type</p>
          {children}
        </div>
      </body>
    </html>
  )
}

export default AdminLayout;