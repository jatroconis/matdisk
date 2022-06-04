import React from "react";
import { Accordion } from "react-bootstrap";
import { Trapezoidal } from "../../utils/methods/mathMethods";
import CardBost from "../Card/cardBost";
import CardJorgeBoole from "../Card/cardJorgeBoole";
import { CardSimpsom13 } from "../Card/cardsimpsom13";
import { CardSimpsom38 } from "../Card/cardsimpsom38";


const Acordion = () => {

  const res = Trapezoidal( "Math.sin(x)", 4, 0, 2 );

  

  return (
    <Accordion defaultActiveKey="-1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Metodo Trapezoidal</Accordion.Header>
        <Accordion.Body>
          
          <CardBost nrequired={true} />
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Acordion;
