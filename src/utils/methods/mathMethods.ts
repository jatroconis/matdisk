//funcion quecalcule una integral definida por el metodo trapezoidal

export interface restrap {
    resultado : number
    registro : number[]
}


function Trapezoidal(

  func: string,
  x: number,
  limitinf: number,
  limitsup: number
): restrap {

    const restrap : restrap = {
        resultado : 0,
        registro : []
    }

    let res : number = 0;
    let funcion : string = func;
    let acum : number = 0;
    
    let delta = (limitsup - limitinf) / x

    let tempdelta = 0;

    for (let i = 0; i <= x; i++) 
    {
        let tempfunc="";
        let resfunc = 0;
        if (i === 0) {
            resfunc = 0;
            tempfunc = ReplaceX(funcion, i);
            resfunc = eval(tempfunc);
            acum = acum + resfunc;
            restrap.registro.push(acum);
        }else if (i > 0 && i < x) {
            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc) * 2;
            acum = acum + resfunc;
            restrap.registro.push(acum);
        }else if (i === x) {
            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc);
            acum = acum + resfunc;
            restrap.registro.push(acum);
        }     
    }

    res = delta/2 * acum

    restrap.resultado = res;
           
  return restrap;
}

function ReplaceX(str: string, x: number): string {
  let newStr = str.replace(/x/g, x.toString());
  return newStr;
}

function CalcDeltaTrape( sup :number, inf : number, x: number){
    return (sup - inf) / x
}
function CalcDeltaBoole( sup :number, inf : number){
    return (sup - inf) / 4
}
function CalcDeltaSimpsom38( sup :number, inf : number){
    return (sup - inf) / 3
}
function CalcDeltaSimpsom13( sup :number, inf : number){
    return (sup - inf) / 2
}




export { Trapezoidal, CalcDeltaTrape, ReplaceX, CalcDeltaBoole, CalcDeltaSimpsom38, CalcDeltaSimpsom13   };

