import type { Metadata } from "next";
import "./globals.css";
import "../css/typography.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

declare global {
  interface Window {
    dataLayer: any;
    ReactNativeWebView: any;
    fbq: any;
    gameData: any;
    selectedElement: any;
    MSStream: any;
    gtag: any;
    clipboardData: any;
    html2canvas: any;
    domtoimage: any;
  }
}
export const metadata: Metadata = {
  title: "Hostel Book",
  description: "Hostel Book",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
