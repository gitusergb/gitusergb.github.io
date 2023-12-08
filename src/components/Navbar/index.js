/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink ,ResumeButton} from './NavbarStyledComponent'
// import { DiCssdeck } from 'react-icons/di';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import resume from './Gauri-Bidwai-Resume.pdf';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <ChevronLeftIcon style={{fontSize:"40",color:"#626970"}}/> 
          <Span><img src='https://i.ibb.co/9Yx78x8/logo.png' alt='GB' style={{height:"30px",width:"40px"}}/> </Span><Span style={{color:"#626970"}}>/</Span>
          <ChevronRightIcon style={{fontSize:"40",marginLeft:"-8",color:"#626970"}}/>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems id="nav-menu" className='nav-link'>
        <NavLink href="#home" className='nav-link home'>Home</NavLink>
          <NavLink href="#about" className='nav-link about'>About</NavLink>
          <NavLink href='#skills' className='nav-link skills'>Skills</NavLink>
          <NavLink href='#experience' className='nav-link experience'>Experience</NavLink>
          <NavLink href='#projects' className='nav-link projects'>Projects</NavLink>
          {/* <NavLink href='#education' className='education'>Education</NavLink> */}
          <NavLink href='#contact' className='nav-link contact'>Contact</NavLink> 
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <ResumeButton 
          id="resume-button-1"
          className='nav-link resume'
          onClick={()=>{
            window.open(
              `${Bio.resume}`,"_blank"
            )
          }}
          //  href={Bio.resume}
          //  download='Gauri-Bidwai-Resume' 
             href={resume}
           download='Gauri-Bidwai-Resume' > Resume</ResumeButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
             <MobileLink href="#home" className='home' onClick={() => {
              setIsOpen(!isOpen)
            }}>Home</MobileLink>
            <MobileLink href="#about" className='about' onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' className='skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' className='experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' className='projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            {/* <MobileLink href='#education' className='education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink> */}
            <MobileLink href='#contact' className='contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar