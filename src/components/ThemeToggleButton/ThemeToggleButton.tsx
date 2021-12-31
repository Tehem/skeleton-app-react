import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoonStars, faSun } from '@fortawesome/pro-regular-svg-icons'

import styled from '@emotion/styled'

import transientOptions from '../../utils/general'

// PROP TYPES
type ThemeToggleButtonProps = Omit<IconButtonProps, 'aria-label'>

// CONSTS and LETS
const iconSize = 20

const RoundButton = styled(IconButton, transientOptions)`
    box-shadow: 0 0 100px 20px
        ${({ $colorMode }) => ($colorMode === 'light' ? 'black' : 'white')};
    & svg {
        width: ${iconSize}px;
        height: ${iconSize}px;
    }
`

const ThemeToggleButton = (props: ThemeToggleButtonProps): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <RoundButton
            $colorMode={colorMode}
            onClick={toggleColorMode}
            icon={
                colorMode === 'light' ? (
                    <FontAwesomeIcon icon={faMoonStars} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )
            }
            aria-label={`Activate ${
                colorMode === 'light' ? 'dark' : 'light'
            } mode`}
            isRound
            {...props}
        />
    )
}

export default ThemeToggleButton
