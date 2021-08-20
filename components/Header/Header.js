import styled from "styled-components"
import Link from "next/link"
import Styles from "./Header.styles"
import Settings from "./Icons/Settings"

export const DivHeader = styled.header`${Styles.divHeader}`
export const NavTitle = styled.h1`${Styles.navTitle}`
export const Button = styled.button`${Styles.button}`

export const Header = () => {
    return (
        <DivHeader>
            {/* Título, redes, ajustes */}
            <NavTitle>DinamizaThor | 2.0 </NavTitle>
            <Link href="/settings">
                <a>
                    <Button>
                        <Settings width={23} height={23} />
                    </Button>
                </a>
            </Link>

        </DivHeader>
    )
}

export default Header