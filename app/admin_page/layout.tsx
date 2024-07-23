import Admin_Header from "@/components/layout/admin_header"
import Footer from "@/components/layout/footer"
import StoreProvider from "@/store/storeProvider"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <StoreProvider>
        {children}
      </StoreProvider>
    </div>
  )
}