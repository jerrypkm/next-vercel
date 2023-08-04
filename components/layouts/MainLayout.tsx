import { Inter } from 'next/font/google'
import Head from "next/head"
import Navbar from "../navbar/Navbar"
import styles from './MainLayout.module.css'
import { PageProps } from '@/interfaces/global.interface'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({children}: PageProps) => {
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main className={`${styles.main} ${inter.className}`}>
            {children}
        </main>
    </div>
  )
}