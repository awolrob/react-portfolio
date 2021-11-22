import React, { useState } from 'react';
import CertsCard from './CertsCard';
import Wrapper from './Wrapper';
import certs from '../../assets/certData.json'

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
