/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink ,ResumeButton} from './NavbarStyledComponent'
// import { DiCssdeck } from 'react-icons/di';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <ChevronLeftIcon style={{fontSize:"40",color:"#626970"}}/> 
          <Span>GB</Span><Span style={{color:"#626970"}}>/</Span>
          <ChevronRightIcon style={{fontSize:"40",marginLeft:"-8",color:"#626970"}}/>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems id="nav-menu" className='nav-link'>
        <NavLink href="#home" className='home'>Home</NavLink>
          <NavLink href="#about" className='about'>About</NavLink>
          <NavLink href='#skills' className='skills'>Skills</NavLink>
          <NavLink href='#experience' className='experience'>Experience</NavLink>
          <NavLink href='#projects' className='projects'>Projects</NavLink>
          {/* <NavLink href='#education' className='education'>Education</NavLink> */}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <ResumeButton 
          id="resume-button-1"
          onClick={()=>{
            window.open(
              "https://drive.google.com/file/d/1OKFTjY4RAb8Tv2T-Fmaxdx0Pf2_gbEOK/view?usp=sharing","blank"
            )
          }}
           href={Bio.resume} 
           target='display' 
           download='Gauri-Bidwai-Resume' 
           >Resume</ResumeButton>
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
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar