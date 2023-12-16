"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body className="dark:bg-black">
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </Providers>
            </body>
        </html>
    );
}

import {Providers} from "./providers";
