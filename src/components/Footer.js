import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
    return (
        <MDBFooter style={{
            // position: "fixed",
            // left: 0,
            // bottom: 0,
            // width: "100%"
        }} >
            <div>
                <MDBRow className="text-center py-1" center>
                    <MDBCol size="1">
                        <a href='https://github.com/awolrob' className="git-ic mr-3">
                            <MDBIcon color="black" fab icon="github" />
                        </a>
                    </MDBCol>
                    <MDBCol size="1">
                        <a href='https://www.linkedin.com/in/robertaellingsonii/' className="li-ic mr-3">
                            <MDBIcon color='black' fab icon="linkedin-in" />
                        </a>
                    </MDBCol>
                    <MDBCol size="1">
                        <a href="#!" className="slack-ic mr-3">
                            <MDBIcon fab icon="slack" />
                        </a>
                    </MDBCol>
                    <MDBCol size="1">
                        <a href="#!" className="email-ic mr-3">
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