import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#1Bbf71' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: solid 1px #1bbf71;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01bf71')};
    box-shadow: 0px 0px 15px 6px rgba(1,191,113,0.73);
    /* text-shadow: 0px 0px 5px 5px rgba(0,0,0,0.73); */
  }
`
