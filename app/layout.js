import "./globals.css";
import { Be_Vietnam_Pro, Silkscreen } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${beVietnamPro.className} ${silkscreen.className}`}>
        {children}
      </body>
    </html>
  );
}
