import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
    return (
        <MDBFooter bgColor="light" style={{
            // position: "fixed",
            // left: 0,
            // bottom: 0,
            // width: "100%"
        }} >
            <div>
                <MDBRow className="text-center py-1" center style={{ boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)" }}>
                    <MDBCol size="1">
                        <a href='https://github.com/awolrob' target="_blank" className="git-ic mr-3">
                            <MDBIcon color="black" fab icon="github" />
                        </a>
                    </MDBCol>
                    <MDBCol size="1">
                        <a href='https://www.linkedin.com/in/robertaellingsonii/' target="_blank" className="li-ic mr-3">
                            <MDBIcon color='black' fab icon="linkedin-in" />
                        </a>
                    </MDBCol>
                    <MDBCol size="1">
                        <a href="https://app.slack.com/client/T020NMF4P5J/C0201PX1HUP/user_profile/U021H7FMBN0" target="_blank" className="slack-ic mr-3">
                            <MDBIcon fab icon="slack" />
                        </a>
                    </MDBCol>
                    <MDBCol size="1">
                        <a href="mailto:robertaellingsonii@gmail.com" target="_blank" className="email-ic mr-3">
                            <MDBIcon icon="envelope" />
                        </a>
                    </MDBCol>
                </MDBRow>
            </div>
            <div className="footer-copyright text-center py-0">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright AWOLRob
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;