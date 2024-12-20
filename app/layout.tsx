import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";
import Link from "next/link";
import { config } from "@/appconfig";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="flex items-center justify-between p-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div className="relative">
                {/* Adding a fixed width and height to the container */}
                <div className="w-12 h-12">
                  <UserButton />
                </div>
              </div>
              <Link href={`${config.frontendUrl}/add-metric`}>Add metric</Link>
            </SignedIn>
          </header>
          <Providers>
            <main>{children}</main>
          </Providers>
          <Toaster position={"top-right"} reverseOrder={false} />
        </body>
      </html>
    </ClerkProvider>
  );
}
