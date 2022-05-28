/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { Caltsimpson13 } from "../../utils/methods/tsimsomp13";
import { CalcDeltaSimpsom13, restrap } from "../../utils/methods/mathMethods";

const CardSimpsom13 = (props: any) => {
  const [limitsup, setlimitSup] = useState(0);
  const [limitinf, setlimitinf] = useState(0);
  const [iteraciones, setiteraciones] = useState(0);
  const [func, setfunc] = useState("");

  const [result, setResult] = useState<restrap>({
    registro: [],
    resultado: 0,
  });

  const [delta, setDelta] = useState(0);

  const [visibleTrape, setVisibleTrape] = useState(false);
  // usestate de una interfa

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
              onClick={() => {
                setVisibleTrape(!visibleTrape);
                setResult({
                  registro: Caltsimpson13(func,  limitsup, limitinf)
                    .registro,
                  resultado: Caltsimpson13(func,  limitsup, limitinf)
                    .resultado,
                });
                setDelta(CalcDeltaSimpsom13(limitsup, limitinf));
              }}
            >
              Calcular
            </Button>
            { visibleTrape ? (
              <>
              <h3> EL DELTA DE ES : {delta} </h3>
              <h3> EL RESULTADO CALCULADO DE ESTE METODO ES </h3>
              <ul>{/* //retornar array de trapezoidal */}</ul>
              {result.registro.map((item: any, i) => (
                <li>RESULTADO DE LA ITERACION {i} es :  {item*-1}</li>
              ))}
              <h3>EL RESULTADO FINAL ES {result.resultado}</h3>
              <h3> {result.resultado} </h3>
              </>) : 
              <>
              </>
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export { CardSimpsom13 };
