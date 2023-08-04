import { MainLayout } from "@/components/layouts/MainLayout"
import DarkLayout from "@/components/layouts/DarkLayout"

export default function Home() {
  return (
    <>
      <h1>Este el about</h1>
    </>
  )
}

Home.getLayout = function getLayout (page: React.ReactNode) {
  return(    
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}