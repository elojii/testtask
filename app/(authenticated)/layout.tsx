import { Toaster } from "react-hot-toast";
import { SignedIn, UserButton } from "@clerk/nextjs";

import Providers from "../providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between p-4">
          <SignedIn>
            <div className="w-12 h-12">
              <UserButton />
            </div>
          </SignedIn>
        </header>
        <Providers>
          <main>{children}</main>
        </Providers>
        <Toaster position={"top-right"} reverseOrder={false} />
      </body>
    </html>
  );
}
