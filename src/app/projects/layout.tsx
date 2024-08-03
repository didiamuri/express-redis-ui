import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Express Redis Session",
    description: "Express Redis Session App",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="">
            <div className="flex justify-between items-center border-b shadow px-20 py-4 bg-white">
                <h1 className="text-xl font-bold">Express Redis Session</h1>
                <div>
                    <button>Logout</button>
                </div>
            </div>
            <div className="px-80 py-4">
                {children}
            </div>
        </div>
    );
}
