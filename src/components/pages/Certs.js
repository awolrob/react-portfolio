import React, { useState } from 'react';
import CertsCard from './CertsCard';
import Wrapper from './Wrapper';
import certs from '../../assets/certData.json'

// import image1 from "../../assets/images/BingeBucket.JPG";
// import image2 from "../../assets/images/CanICamp.jpeg";
// import image3 from "../../assets/images/18-nosql-challenge.gif";
// import image4 from "../../assets/images/food-festival.PNG";
// import image5 from "../../assets/images/weather-dashboard.PNG";
// import image6 from "../../assets/images/budget-tracker.PNG";
// import image7 from "../../assets/images/robot-gladiators.JPG";
// import image8 from "../../assets/images/BottegeHTMLCSS.JPG";
// import image9 from "../../assets/images/Oven-Charts.gif";
// import image10 from "../../assets/images/PwrPlus.JPG";
// import image11 from "../../assets/images/NorlakeMfg.JPG";
// import image12 from "../../assets/images/KalronLLC.JPG";

function Cert() {
  const [certList] = useState(certs);

  return (
    <Wrapper>
      <h1 style={{
        width: "100%",
        textAlign: "center"
      }}>Rob Ellingson Certificates</h1>
      {certList.map(certs => (
        <CertsCard
          id={certs.id}
          key={certs.id}
          name={certs.name}
          image={certs.image}
          deployLink={certs.deployLink}
          githubLink={certs.githubLink}
          techUsed={certs.techUsed}
        />
      ))}
    </Wrapper>
  );
}

export default Cert;
