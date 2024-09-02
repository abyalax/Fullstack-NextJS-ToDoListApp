import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import { DetailsTodoProvider } from "@/provider/detail-provider";


export const metadata: Metadata = {
    title: "To Do List",
    description: "To Do List by Abya Laxx",
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ClerkProvider afterSignOutUrl={"/sign-in"} signUpUrl="/sign-up" signInUrl="/sign-in">
            <html lang="en">
                <head>
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                </head>
                <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <DetailsTodoProvider />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
