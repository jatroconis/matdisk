/* eslint-disable no-fallthrough */
import { ReplaceX } from "./mathMethods";
import { restrap } from "./mathMethods";

function calJorgeBoole(
    func: string,
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
      
      let delta = (limitsup - limitinf) / 4
      let tempdelta = 0;
  
      for (let i = 0; i < 5; i++) 
      {
        let tempfunc="";
        let resfunc = 0;
        
        switch
        (i)
        {
            case 0:
            resfunc = 0;
            tempfunc = ReplaceX(funcion, i);
            resfunc = eval(tempfunc)*7;
            acum = acum + resfunc;
            restrap.registro.push(acum);
            break;

            case 1:
            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc) * 32;
            acum = acum + resfunc;
            restrap.registro.push(acum);
            break;
            
            case 2:

            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc) * 12;
            acum = acum + resfunc;
            restrap.registro.push(acum);
            break;
            case 3:

            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc) * 32;
            acum = acum + resfunc;
            restrap.registro.push(acum);
            break;
            case 4:

            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc)*7;
            acum = acum + resfunc;
            restrap.registro.push(acum);
            break;

            default : 
                throw new Error("Error en el cálculo de la integral");
            }

        }       


        res = ((2/45 * delta) * acum)

        restrap.resultado = res;
        
        return restrap;
  }

  export {calJorgeBoole};