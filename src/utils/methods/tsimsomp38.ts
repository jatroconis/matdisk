/* eslint-disable no-fallthrough */
import { ReplaceX } from "./mathMethods";
import { restrap } from "./mathMethods";

function Caltsimpson38(
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
      
      let delta = (limitsup - limitinf) / 3
      let tempdelta = 0;
 
      for (let i = 0; i < 4; i++) 
    {
        let tempfunc="";
        let resfunc = 0;
        if (i === 0) {
            resfunc = 0;
            tempfunc = ReplaceX(funcion, i);
            resfunc = eval(tempfunc);
            acum = acum + resfunc;
            restrap.registro.push(acum);
        }else if (i > 0 && i < 4) {
            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc) * 2;
            acum = acum + resfunc;
            restrap.registro.push(acum);
        }else if (i === 4) {
            resfunc = 0;
            tempdelta = tempdelta + delta;
            tempfunc = ReplaceX(funcion, tempdelta);
            resfunc = eval(tempfunc);
            acum = acum + resfunc;
            restrap.registro.push(acum);
        }     
    }

           res = ((3/8 * delta) * acum)
  
           restrap.resultado = res;
       
    return restrap;
  }

  export {Caltsimpson38};