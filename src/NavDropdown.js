import React from 'react'
import styled from 'styled-components'
import {ChevronDown} from '@githubprimer/octicons-react'
import {Text, Relative, StyledOcticon, Absolute, Box} from '@primer/components'
import getDirectionStyles from './NavDropdownStyles'
import Details from './Details'

const DropdownMenu = styled.div`
  box-shadow: 0px 4px 12px rgba(27, 31, 35, 0.15);
  border: 1px solid rgba(219, 237, 255, 0.3);
  border-radius: 4px;
  max-width: 215px;
  overflow: hidden;
  ${props => (props.direction ? getDirectionStyles(props.theme, props.direction) : '')};
`
export default function NavDropdown({children, title, direction = 'se'}) {
  return (
    <Box>
      <Details
        overlay
        mx={3}
        render={({toggle}) => (
          <>
            <Text fontWeight="bold" color="blue.2" as="summary" onClick={toggle}>
              {title} <StyledOcticon icon={ChevronDown} />
            </Text>
            <Relative>
              <DropdownMenu as={Absolute} zIndex={90} bg="black" direction={direction}>
                {children}
              </DropdownMenu>
            </Relative>
          </>
        )}
      />
    </Box>
  )
}
