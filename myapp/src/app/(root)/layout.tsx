import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import '../globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {

    return (

        <html>
            <body>

                <div className="min-h-screen bg-gray-50 flex flex-col">
                    <Navbar />

                    <div className="flex flex-1">

                        <Sidebar />


                        <main className="flex-1 p-6">
                            
                                {children}
                            
                        </main>
                    </div>

                    <Footer />
                </div>
            </body>
        </html>

    )
}