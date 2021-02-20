import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { 
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin

} from 'react-icons/fa'
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLinks
} from './FooterElements'

const Footer = () => {
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/singin">How it works</FooterLink>
                <FooterLink to="/singin">Testimonials</FooterLink>
                <FooterLink to="/singin">Carrers</FooterLink>
                <FooterLink to="/singin">Investors</FooterLink>
                <FooterLink to="/singin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/singin">Submit Video</FooterLink>
                <FooterLink to="/singin">Ambassadors</FooterLink>
                <FooterLink to="/singin">Agency</FooterLink>
                <FooterLink to="/singin">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contac Us</FooterLinkTitle>
                <FooterLink to="/singin">Contact</FooterLink>
                <FooterLink to="/singin">Support</FooterLink>
                <FooterLink to="/singin">Destinations</FooterLink>
                <FooterLink to="/singin">Sponsorship</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/singin">Instagram</FooterLink>
                <FooterLink to="/singin">Facebook</FooterLink>
                <FooterLink to="/singin">Youtube</FooterLink>
                <FooterLink to="/singin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo 
              to='/'
              onClick={toggleHome}
            >Dolla 
            </SocialLogo>
            <WebsiteRights>Dolla © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Instagram,">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
