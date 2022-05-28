import React from "react";
import { Accordion } from "react-bootstrap";
import { Trapezoidal } from "../../utils/methods/mathMethods";
import {CardBost} from "../Card/cardBost";
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
      <Accordion.Item eventKey="1">
        <Accordion.Header>Metodo Jorge Boole</Accordion.Header>
        <Accordion.Body>
          <CardJorgeBoole nrequired={false} />
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>Metodo T.Simpson 3/8</Accordion.Header>
        <Accordion.Body>
          <CardSimpsom38 nrequired={false}/>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="3">
        <Accordion.Header>Metodo T.Simpson 1/3</Accordion.Header>
        <Accordion.Body>
          <CardSimpsom13 nrequired={false}/>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="4">
        <Accordion.Header>Metodo Simpson Abierto</Accordion.Header>
        <Accordion.Body>Metodo Simpson Abierto</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Acordion;
