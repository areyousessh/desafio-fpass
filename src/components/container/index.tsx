import { ReactNode } from "react"
import { StyledContainer } from "./Container.style"

type Props = {
    children: ReactNode
}

export function Container({children}: Props) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}