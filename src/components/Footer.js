import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%"
        }} >
            <div className="footer-copyright">
                <MDBRow className="text-center py-1" center>
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