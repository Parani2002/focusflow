import Navbar from "../../components/Navbar";
import '../globals.css';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <html>
                  <body>
                <Navbar />
                      {children}
                     </body>
               </html>

    )
}