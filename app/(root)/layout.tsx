import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Adila", lastName: "Arshad" };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      {/* Mobile Nav Bar */}
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
