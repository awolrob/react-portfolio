import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="100" >
            <MDBRow center>
                <MDBCol size="1">
                    <a
                        href="https://github.com/awolrob"
                        // target="_blank"
                        style={{ backgroundColor: "#9E9E9E" }}
                    >
                        <i className="fab fa-github"> </i>
                    </a>
                </MDBCol>
                <MDBCol size="1">
                    <a
                        href="https://github.com/awolrob"
                        // target="_blank"
                        style={{ backgroundColor: "#9E9E9E" }}
                    >
                        <i class="fab fa-linkedin"> </i>
                    </a>
                </MDBCol>
                <MDBCol size="1">
                    <a
                        href="https://github.com/awolrob"
                        // target="_blank"
                        style={{ backgroundColor: "#9E9E9E" }}
                    >
                        <i class="fab fa-stack-overflow"> </i>
                    </a>
                </MDBCol>
            </MDBRow>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: AWOLRob
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;