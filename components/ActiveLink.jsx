import Link from "next/link"
import { useRouter } from "next/router"

const style = {
    color: 'red',
    textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }) => {
    const {asPath} = useRouter();
    return (
        <Link href={href} style={asPath === href ? style : null}>
            {text}
        </Link>
    )
}