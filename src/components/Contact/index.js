/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaHome, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`


const Contact = () => {

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or suggetions!</Desc>
        <ContactForm style={{color:"white",display:"grid",alignItems:"center",justifyContent:"center"}} >
        <div className='location' style={{display:"flex"}}>
       
            <FaHome size={20} style={{color:"#4285F4" ,marginRight:"2rem"}}/>          
           <div>
            <p> Near Gore Wadi,</p>
            <p> Jatharpeth Road ,Akola</p>
           </div>
           </div>
        <div className='phone' id="contact-phone">
          <h4>
          <FaPhone id="contact" size={20} style={{color:"#34A853" ,marginRight:"2rem" }}/>+91 9518251358
          </h4>
        </div>
        <div className='email' >
          <h4> <a onClick={()=>{
              window.open("mailto:g4ur131@gmail.com","blank")
            }} >
          <EmailIcon id="contact-email" size={20} style={{color:"#EA4335" ,marginRight:"2rem" ,}}/>g4ur131@gmail.com
          </a>
          </h4>
          </div>
          <p> 
             <small>let's work together, on some exciting Projects.</small></p>
        </ContactForm>
      
      </Wrapper>
    </Container>
  )
}

export default Contact