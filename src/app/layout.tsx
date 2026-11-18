import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "EventSphere | The Modern Platform for Events",
  description:
    "Discover, organize, and experience unforgettable events. Powered by intelligent scheduling, instant RSVPs, and interactive live spaces.",
  keywords: ["events", "conferences", "meetups", "tickets", "workshops", "networking"],
  authors: [{ name: "EventSphere Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-yellow-400 selection:text-zinc-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
