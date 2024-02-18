import React from "react";
import {
    FaYoutube,
    FaInstagram,
    FaGithub,
    FaFacebook,
    FaTwitter,
    FaTwitch,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaFax,
} from "react-icons/fa";

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Box>
            <div className="footer-inner">
                <p>
                    Get connected with us on social networks:
                </p>
                <div className="second-container">
                    <a href="https://www.facebook.com/">
                        <FaFacebook/>
                    </a>&nbsp;
                    <a href="https://www.twitter.com/">
                        <FaTwitter/>
                    </a>&nbsp;
                    <a href="https://www.instagram.com/">
                        <FaInstagram/>
                    </a>&nbsp;
                    <a href="https://www.twitch.com/">
                        <FaTwitch/>
                    </a>&nbsp;
                    <a href="https://www.youtube.com/">
                        <FaYoutube/>
                    </a>&nbsp;
                    <a href="https://www.github.com/">
                        <FaGithub/>
                    </a>&nbsp;
                </div>
            </div>
            <hr/>
            <Container>
                <Row>
                    <Column style={{width: "100%"}} >
                        <Heading>Our Website</Heading>
                        <p style={{
                            color: "#757575",
                            marginBottom: "20px",
                            fontSize: "18px",
                            textDecoration: "none",
                        }} >
                            Our website aimed at developing a house sell & apartment rental combined website. Looking for developing a huge community to solve the real problem. We hope every customer can find their favor home just in one click. Thank you!
                        </p>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        {/*<FooterLink href="#">Uttar Pradesh</FooterLink>*/}
                        {/*<FooterLink href="#">Ahemdabad</FooterLink>*/}
                        {/*<FooterLink href="#">Indore</FooterLink>*/}
                        {/*<FooterLink href="#">Mumbai</FooterLink>*/}
                        <p style={{
                            color: "#757575",
                            marginBottom: "20px",
                            fontSize: "18px",
                            textDecoration: "none",
                        }} > <FaHome/> Boston, MA, 02135 </p>
                        <p style={{
                            color: "#757575",
                            marginBottom: "20px",
                            fontSize: "18px",
                            textDecoration: "none",
                        }} >
                            <FaEnvelope/> info@gmail.com
                        </p>
                        <p style={{
                            color: "#757575",
                            marginBottom: "20px",
                            fontSize: "18px",
                            textDecoration: "none",
                        }} >
                            <FaPhone/> (+1) 540-998-5759
                        </p>
                        {/*<p style={{*/}
                        {/*    color: "#757575",*/}
                        {/*    marginBottom: "20px",*/}
                        {/*    fontSize: "18px",*/}
                        {/*    textDecoration: "none",*/}
                        {/*}} >*/}
                        {/*    <FaFax/>  + 01 234 567 89*/}
                        {/*</p>*/}
                    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="policy">Policy</FooterLink>
                        <p style={{
                            color: "#757575",
                            marginBottom: "20px",
                            fontSize: "18px",
                            textDecoration: "none",
                        }} > Version 1.0.1 </p>
                        {/*<FooterLink href="#">Testimonials</FooterLink>*/}
                    </Column>
                    {/*<Column>*/}
                {/*        <Heading>Social Media</Heading>*/}
                {/*        <FooterLink href="#">*/}
                {/*            <i className="fab fa-facebook-f">*/}
				{/*<span style={{ marginLeft: "10px" }}>*/}
				{/*Facebook*/}
				{/*</span>*/}
                {/*            </i>*/}
                {/*        </FooterLink>*/}
                {/*        <FooterLink href="#">*/}
                {/*            <i className="fab fa-instagram">*/}
				{/*<span style={{ marginLeft: "10px" }}>*/}
				{/*Instagram*/}
				{/*</span>*/}
                {/*            </i>*/}
                {/*        </FooterLink>*/}
                {/*        <FooterLink href="#">*/}
                {/*            <i className="fab fa-twitter">*/}
				{/*<span style={{ marginLeft: "10px" }}>*/}
				{/*Twitter*/}
				{/*</span>*/}
                {/*            </i>*/}
                {/*        </FooterLink>*/}
                {/*        <FooterLink href="#">*/}
                {/*            <i className="fab fa-youtube">*/}
				{/*<span style={{ marginLeft: "10px" }}>*/}
				{/*Youtube*/}
				{/*</span>*/}
                {/*            </i>*/}
                {/*        </FooterLink>*/}
                {/*    </Column>*/}
                </Row>
            </Container>
            <div className="copyright-container">
                <p className="copyright">© 2023 Copyright: CC</p>
            </div>
        </Box>
    );
};
export default Footer;
