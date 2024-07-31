import { ModalContextProvider } from "@/lib/context";

export default function DashboardLayout({ children } : { children: React.ReactNode}){
    
    
    return (
        <ModalContextProvider> 
            {children}
        </ModalContextProvider>
    )
}