import { PageProps } from "@/interfaces/global.interface"

const DarkLayout = ({children}: PageProps) => {
  return (
    <div style={{
        backgroundColor: 'white',
        borderRadius: "5px",
        padding: "10px",
        color: "#2b2b2b"
    }}>
        {children}
    </div>
  )
}

export default DarkLayout