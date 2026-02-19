import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Orion | Multiply Your Efficiency",
  description: "Premium automation agency transforming business processes with AI and intelligent workflows.",
  openGraph: {
    title: "Orion | Multiply Your Efficiency",
    description: "Premium automation agency transforming business processes with AI and intelligent workflows.",
    type: "website",
    url: "https://orion.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orion | Multiply Your Efficiency",
    description: "Premium automation agency transforming business processes with AI and intelligent workflows.",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {GA_ID && (
              <>
                <Script
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                  strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                  `}
                </Script>
              </>
            )}

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ProfessionalService",
                  "name": "Orion",
                  "description": "Premium automation agency transforming business processes with AI and intelligent workflows.",
                  "url": "https://orion.dev"
                })
              }}
            />

            <Navbar />

            <ChatWidget />

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
