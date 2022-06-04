const calculateDelta = ({ a, b, method }, n = 0) => {
    const result = b - a;
    let delta = 0;
    if (method === 'trapezoidal' || method === 'simpsono') delta = result / n;
    else delta = result / Methods[method];
    return delta;
  };
  
  const Calculate = ({ a, b, method, func, n = 0 }) => {
    const funcO = func;
    const delta = calculateDelta({ a, b, method }, n);
    let table = [];
    for (let i = a; i <= b; i += delta) {
      console.log(func.replaceAll("x", i));
      table.push({ x: i, y: eval(func.replaceAll("x", i)) });
      func = funcO;
    }
    table = result({ table, method });
    return { table, area: getArea(table, method, n, delta), delta };
  };
  
  const result = ({ table, method }) => {
    const lon = table.length;
    if (method === "boole") {
      table.map((row, index) => {
        if (index === 0 && index === lon - 1) {
          row.y = row.y * 7;
        } else {
          if (index % 2 === 0) row.y = row.y * 12;
          else row.y = row.y * 32;
        }
      });
    } else if (method === "simpsono") {
      table.map((row, index) => {
        if (index !== 0 && index !== lon - 1) {
          if (index % 2 === 0) row.y = row.y * 2;
          else row.y = row.y * 4;
        }
      });
    } else {
      const mul = MethodsMutliply[method];
      table.map((row, index) => {
        if (index !== 0 && index !== lon - 1) {
          row.y = row.y * mul;
        }
      });
    }
    return table;
  };
  
  const getArea = (table, method, n, delta) => {
    const sum = table.reduce((a, b) => a + b.y, 0);
    let area = 0;
    if (method === "trapezoidal") area = (delta / 2) * sum;
    else if (method === "simpsont") area = ((delta * 3) / 8) * sum;
    else if (method === "boole") area = ((2 * delta) / 45) * sum;
    else area = (delta / 3) * sum;
    return area;
  };
  
  const Methods = {
    boole: 4,
    simpsont: 3,
    simpsonu: 2,
  };
  
  const MethodsMutliply = {
    simpsont: 3,
    simpsonu: 4,
    trapezoidal: 2,
  };

  export default Calculate;