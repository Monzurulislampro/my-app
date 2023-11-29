import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap.min.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
