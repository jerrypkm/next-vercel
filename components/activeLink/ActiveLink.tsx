import { CSSProperties } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps{
    href: string;
    label: string;
}

const activeStyles: CSSProperties  = {
    color: "aqua",
    textDecoration: "underline",
}

const ActiveLink = ({
    href,
    label,
}: ActiveLinkProps) => {
    const {asPath} = useRouter();
  return (
    <Link style={asPath == href ? activeStyles : undefined} href={href}>{label}</Link>
  )
}

export default ActiveLink