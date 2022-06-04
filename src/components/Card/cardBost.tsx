/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { Trapezoidal } from "../../utils/methods/mathMethods";
import { restrap } from "../../utils/methods/mathMethods";
import { CalcDeltaTrape } from "../../utils/methods/mathMethods";
import Calculate from "../../utils/calcs/calcs";

const CardBost = (props: any) => {
  const [limitsup, setlimitSup] = useState(0);
  const [limitinf, setlimitinf] = useState(0);
  const [iteraciones, setiteraciones] = useState(0);
  const [func, setfunc] = useState("");
  const [methof, setmethof] = useState(0);
  

  const [data, setData] = useState([]); 
  const [area, setarea] = useState(0);

  const [result, setResult] = useState(
    { a : 0,
      b: 0,
      method : '',
      func: '',
      n : 0 
    }
  );

  function updateData (a: any,b: any,method: any,func: any,n: any) {
    let tempdata = { 
      a : a,
      b: b,
      method : method,
      func: func,
      n : n 
    }
    setResult(tempdata);
    let area = 0
    area = Calculate(result).area
    setarea(area);
    console.log(Calculate(result));

  }

  function getmethod(){
    let method = "";
  
    if(methof === 1){
      method = "boole";
    }
    if(methof === 2){
      method = "simpsont";
    }
    if(methof === 3){
      method = "simpsonu";
    }
    if(methof === 4){
      method = "simpsono";
    }
    if(methof === 5){
      method = "trapezoidal";
    }


    return method;

  }

  
  return (
    <>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>METODO TRAPEZOIDAL</Card.Title>
          <Card.Text>
            <>
            <InputGroup className="mb-3">
                <FormControl
                  value={methof}
                  type="number"
                  onChange={(e) => setmethof(parseInt(e.target.value))}
                  placeholder="Ingrese la funcion"
                  aria-label="Ingrese la funcion"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  CONFIG
                </InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  value={func}
                  onChange={(e) => setfunc(e.target.value)}
                  placeholder="Ingrese la funcion"
                  aria-label="Ingrese la funcion"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">FUNCION</InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  value={limitsup}
                  type="number"
                  onChange={(e) => setlimitSup(parseInt(e.target.value))}
                  placeholder="Ingrese la funcion"
                  aria-label="Ingrese la funcion"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  LIMITE SUPERIOR
                </InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  value={limitinf}
                  type="number"
                  onChange={(e) => setlimitinf(parseInt(e.target.value))}
                  placeholder="Ingrese la funcion"
                  aria-label="Ingrese la funcion"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  LIMITE INFERIOR
                </InputGroup.Text>
              </InputGroup>
              {props.nrequired ? (
                <InputGroup className="mb-3">
                  <FormControl
                    value={iteraciones}
                    type="number"
                    onChange={(e) => setiteraciones(parseInt(e.target.value))}
                    placeholder="Ingrese la funcion"
                    aria-label="Ingrese la funcion"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    ITERACIONES
                  </InputGroup.Text>
                </InputGroup>
              ) : (
                <></>
              )}
            </>

            {/* boton para tomar valores de los imput y renderizar en una modal el resultado de la funcion trapezoidal */}
            <Button
              variant="primary"
              onClick={() => updateData(limitsup,limitinf, getmethod(), func, iteraciones)}
            >
              Calcular
            </Button>
            {/* mostrad datos de data */}
                <h1>AREA : {area}</h1>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBost;
