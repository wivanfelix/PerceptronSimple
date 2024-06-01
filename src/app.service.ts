import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Perceptrón Simple para Cocinar en una Estufa de Gas</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                background-color: #f9f9f9;
                color: #333;
            }
            h1, h2, h3 {
                color: #0056b3;
                margin-top: 20px;
            }
            h1 {
                border-bottom: 2px solid #0056b3;
                padding-bottom: 10px;
            }
            p {
                margin-bottom: 15px;
            }
            ul {
                list-style-type: square;
                margin-left: 20px;
                margin-bottom: 15px;
            }
            .highlight {
                font-weight: bold;
                color: #d9534f;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            th, td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: center;
            }
            th {
                background-color: #f2f2f2;
                color: #333;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            tr:hover {
                background-color: #f1f1f1;
            }
            .center {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Problema Cotidiano: Cocinar en una Estufa de Gas</h1>
        <p>Para cocinar en una estufa de gas, es necesario que se cumplan dos condiciones:</p>
        <ul>
            <li><span class="highlight">Abrir la válvula de gas</span> (Condición 1)</li>
            <li><span class="highlight">Abrir la hornilla para iniciar el chispero</span> (Condición 2)</li>
        </ul>
        <p>Si ambas condiciones se cumplen, el gas fluye y el chispero se activa, encendiendo la hornilla. Esto puede ser modelado usando una compuerta AND.</p>
    
        <h2>Solución con Perceptrón Simple</h2>
        <p>Un perceptrón simple puede ser entrenado para resolver este problema. Este perceptrón emula una compuerta AND, produciendo una salida de "1" (enciende la hornilla) solo cuando ambas entradas son "1".</p>
    
        <h2>Funcionamiento del Perceptrón</h2>
        <p>El perceptrón procesa las siguientes entradas y determina si se debe encender la hornilla:</p>
        <table>
            <tr>
                <th>Condición 1: Abrir la válvula de gas (x1)</th>
                <th>Condición 2: Abrir la hornilla (x2)</th>
                <th>Hornilla Encendida (Salida AND)</th>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </table>
        <p>Después de entrenar el perceptrón con estos datos, sus pesos y sesgo se ajustan para que la salida coincida con la salida esperada de la compuerta AND.</p>
    
        <h2>Proceso de Entrenamiento</h2>
        <p>Durante el entrenamiento, el perceptrón ajusta sus parámetros para aprender las siguientes reglas:</p>
        <ul>
            <li>Si <span class="highlight">x1 = 0</span> y <span class="highlight">x2 = 0</span>, la salida es <span class="highlight">0</span>.</li>
            <li>Si <span class="highlight">x1 = 0</span> y <span class="highlight">x2 = 1</span>, la salida es <span class="highlight">0</span>.</li>
            <li>Si <span class="highlight">x1 = 1</span> y <span class="highlight">x2 = 0</span>, la salida es <span class="highlight">0</span>.</li>
            <li>Si <span class="highlight">x1 = 1</span> y <span class="highlight">x2 = 1</span>, la salida es <span class="highlight">1</span>.</li>
        </ul>
        <p>Esto asegura que la hornilla solo se encienda cuando ambas condiciones de seguridad se cumplan, evitando posibles accidentes al no permitir el flujo de gas sin ignición.</p>
    
        <h2>Cómo Utilizar el Servicio</h2>
        <p>Puedes utilizar este servicio para obtener los resultados del perceptrón simple para diferentes conjuntos de datos. Aquí te explicamos cómo hacerlo:</p>
        <h3>Con Datos Aleatorios</h3>
        <p>Para utilizar datos aleatorios, simplemente consume la siguiente dirección:</p>
        <p>http://localhost:3000/calculate</p>
        <p>Esto te proporcionará una tabla con resultados basados en datos generados aleatoriamente.</p>
        <h3>Con Datos Definidos</h3>
        <p>Para utilizar datos específicos, puedes consumir la siguiente dirección:</p>
        <p>http://localhost:3000/calculate/w1/w2/b</p>
        <p>Reemplaza <code>w1</code>, <code>w2</code> y <code>b</code> con los valores de los pesos y el sesgo del perceptrón que deseas utilizar.</p>
        <p>Por ejemplo, para usar los pesos 2 y 3, y un sesgo de -1, la URL sería:</p>
        <p>http://localhost:3000/calculate/2/3/-1</p>
    </body>
    </html>
    `;
  }

  verificarTablaAnd(x1: number, x2: number, x3: number, x4: number) {
    if (x1 === 0 && x2 === 0 && x3 === 0 && x4 === 1) {
      return 'ready';
    }
    if (x1 === 1) {
      return 'x1';
    }
    if (x2 === 1) {
      return 'x2';
    }
    if (x3 === 1) {
      return 'x3';
    }
    return 'x4';
  }

  educarNeurona(x1: number, x2: number, b: number, target: string) {
    if (target === 'x1') {
      const w1 = x1 + 2 * 0.5 * -1 * 1;
      const w2 = x2 + 2 * 0.5 * -1 * 1;
      const wb = b + 2 * 0.5 * -1 * -1;
      return {
        values: [w1, w2, wb],
        valuesStrings: [
          `x1 = ${x1} + (2 * 0.5 * -1 * 1) = ${w1}`,
          `x2 = ${x2} + (2 * 0.5 * -1 * 1) = ${w2}`,
          `b = ${b} + (2 * 0.5 * -1 * -1) = ${wb}`,
        ],
      };
    } else if (target === 'x2') {
      const w1 = x1 + 2 * 0.5 * -1 * 1;
      const w2 = x2 + 2 * 0.5 * -1 * -1;
      const wb = b + 2 * 0.5 * -1 * -1;
      return {
        values: [w1, w2, wb],
        valuesStrings: [
          `x1 = ${x1} + (2 * 0.5 * -1 * 1) = ${w1}`,
          `x2 = ${x2} + (2 * 0.5 * -1 * -1) = ${w2}`,
          `b = ${b} + (2 * 0.5 * -1 * -1) = ${wb}`,
        ],
      };
    } else if (target === 'x3') {
      const w1 = x1 + 2 * 0.5 * -1 * -1;
      const w2 = x2 + 2 * 0.5 * -1 * 1;
      const wb = b + 2 * 0.5 * -1 * -1;
      return {
        values: [w1, w2, wb],
        valuesStrings: [
          `x1 = ${x1} + (2 * 0.5 * -1 * -1) = ${w1}`,
          `x2 = ${x2} + (2 * 0.5 * -1 * 1) = ${w2}`,
          `b = ${b} + (2 * 0.5 * -1 * -1) = ${wb}`,
        ],
      };
    } else if (target === 'x4') {
      const w1 = x1 + 2 * 0.5 * 1 * -1;
      const w2 = x2 + 2 * 0.5 * 1 * -1;
      const wb = b + 2 * 0.5 * 1 * -1;
      return {
        values: [w1, w2, wb],
        valuesStrings: [
          `x1 = ${x1} + (2 * 0.5 * 1 * -1) = ${w1}`,
          `x2 = ${x2} + (2 * 0.5 * 1 * -1) = ${w2}`,
          `b = ${b} + (2 * 0.5 * 1 * -1) = ${wb}`,
        ],
      };
    }
  }

  jsonToHtmlTable(data) {
    // Comienzo de la tabla HTML
    let html = `
      <html>
        <head>
        <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          background-color: #f9f9f9;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        th, td {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        th {
          background-color: #4CAF50;
          color: white;
          text-align: center;
        }
        td {
          text-align: center;
        }
        .highlight {
          font-weight: bold;
          color: #ff0000;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      </style>
        </head>
        <body>
          <table>
            <tr>
              <th>Periodo</th>
              <th>Calculo de Y</th>
              <th>Y</th>
              <th>Validación</th>
              <th>Z</th>
              <th>Calculo de nuevos valores</th>
              <th>Nuevos valores</th>
              <th>Valores finales</th>
            </tr>
    `;

    // Iterar sobre cada periodo en los datos
    data.forEach((periodo, index) => {
      html += '<tr>';
      html += `<td>Periodo ${index + 1}</td>`;
      html +=
        '<td>' +
        (periodo.yCalculatesStrings
          ? periodo.yCalculatesStrings.join('<br>')
          : '') +
        '</td>';
      html +=
        '<td>' +
        (periodo.yCalculates ? periodo.yCalculates.join('<br>') : '') +
        '</td>';
      html +=
        '<td>' +
        (periodo.zCalculatesStrings
          ? periodo.zCalculatesStrings.join('<br>')
          : '') +
        '</td>';
      html +=
        '<td>' +
        (periodo.zCalculates ? periodo.zCalculates.join('<br>') : '') +
        '</td>';
      html +=
        '<td>' +
        (periodo.nnewValuesStrings
          ? periodo.nnewValuesStrings.join('<br>')
          : '') +
        '</td>';
      html +=
        '<td>' +
        (periodo.newValues ? periodo.newValues.join('<br>') : '') +
        '</td>';

      // Agregar finalValues si existen, de lo contrario dejar celda vacía
      if (periodo.finalValues) {
        html +=
          '<td class="highlight">' + periodo.finalValues.join('<br>') + '</td>';
      } else {
        html += '<td></td>';
      }

      html += '</tr>';
    });

    // Cierre de la tabla y del HTML
    html += `
          </table>
        </body>
      </html>
    `;

    return html;
  }

  async calculate(x1: number, x2: number, b: number) {
    let vuelta = 0;
    const periods = [];
    let newX1, newX2, newB;

    while (vuelta < 1000) {
      if (vuelta === 0) {
        const y1 = 1 * x1 + 1 * x2 - 1 * b;
        const y2 = 1 * x1 - 1 * x2 - 1 * b;
        const y3 = -1 * x1 + 1 * x2 - 1 * b;
        const y4 = -1 * x1 - 1 * x2 - 1 * b;

        const z1 = y1 > 0 ? 1 : 0;
        const z2 = y2 > 0 ? 1 : 0;
        const z3 = y3 > 0 ? 1 : 0;
        const z4 = y4 > 0 ? 1 : 0;

        const verification = this.verificarTablaAnd(z1, z2, z3, z4);
        console.log(verification);

        if (verification === 'ready') {
          periods.push({
            yCalculatesStrings: [
              `1 * ${x1} + 1 * ${x2} - 1 * ${b} = ${y1}`,
              `1 * ${x1} - 1 * ${x2} - 1 * ${b} = ${y2}`,
              `-1 * ${x1} + 1 * ${x2} - 1 * ${b} = ${y3}`,
              `-1 * ${x1} - 1 * ${x2} - 1 * ${b} = ${y4}`,
            ],
            yCalculates: [y1, y2, y3, y4],
            zCalculatesStrings: [
              `${y1} > 0 ? 1 : 0 = ${z1}`,
              `${y2} > 0 ? 1 : 0 = ${z2}`,
              `${y3} > 0 ? 1 : 0 = ${z3}`,
              `${y4} > 0 ? 1 : 0 = ${z4}`,
            ],
            zCalculates: [z1, z2, z3, z4],
            finalValues: [x1, x2, b],
          });
          break;
        } else {
          const newValues = this.educarNeurona(x1, x2, b, verification);
          newX1 = newValues.values[0];
          newX2 = newValues.values[1];
          newB = newValues.values[2];
          console.log(newValues);

          periods.push({
            yCalculatesStrings: [
              `1 * ${x1} + 1 * ${x2} - 1 * ${b} = ${y1}`,
              `1 * ${x1} - 1 * ${x2} - 1 * ${b} = ${y2}`,
              `-1 * ${x1} + 1 * ${x2} - 1 * ${b} = ${y3}`,
              `-1 * ${x1} - 1 * ${x2} - 1 * ${b} = ${y4}`,
            ],
            yCalculates: [y1, y2, y3, y4],
            zCalculatesStrings: [
              `${y1} > 0 ? 1 : 0 = ${z1}`,
              `${y2} > 0 ? 1 : 0 = ${z2}`,
              `${y3} > 0 ? 1 : 0 = ${z3}`,
              `${y4} > 0 ? 1 : 0 = ${z4}`,
            ],
            zCalculates: [z1, z2, z3, z4],
            nnewValuesStrings: newValues.valuesStrings,
            newValues: newValues.values,
          });
        }
      } else {
        const y1 = 1 * newX1 + 1 * newX2 - 1 * newB;
        const y2 = 1 * newX1 - 1 * newX2 - 1 * newB;
        const y3 = -1 * newX1 + 1 * newX2 - 1 * newB;
        const y4 = -1 * newX1 - 1 * newX2 - 1 * newB;

        const z1 = y1 > 0 ? 1 : 0;
        const z2 = y2 > 0 ? 1 : 0;
        const z3 = y3 > 0 ? 1 : 0;
        const z4 = y4 > 0 ? 1 : 0;

        const verification = this.verificarTablaAnd(z1, z2, z3, z4);
        console.log(verification);

        if (verification === 'ready') {
          periods.push({
            yCalculatesStrings: [
              `1 * ${newX1} + 1 * ${newX2} - 1 * ${newB} = ${y1}`,
              `1 * ${newX1} - 1 * ${newX2} - 1 * ${newB} = ${y2}`,
              `-1 * ${newX1} + 1 * ${newX2} - 1 * ${newB} = ${y3}`,
              `-1 * ${newX1} - 1 * ${newX2} - 1 * ${newB} = ${y4}`,
            ],
            yCalculates: [y1, y2, y3, y4],
            zCalculatesStrings: [
              `${y1} > 0 ? 1 : 0 = ${z1}`,
              `${y2} > 0 ? 1 : 0 = ${z2}`,
              `${y3} > 0 ? 1 : 0 = ${z3}`,
              `${y4} > 0 ? 1 : 0 = ${z4}`,
            ],
            zCalculates: [z1, z2, z3, z4],
            finalValues: [newX1, newX2, newB],
          });
          break;
        } else {
          const newValues = this.educarNeurona(
            newX1,
            newX2,
            newB,
            verification,
          );
          periods.push({
            yCalculatesStrings: [
              `1 * ${newX1} + 1 * ${newX2} - 1 * ${newB} = ${y1}`,
              `1 * ${newX1} - 1 * ${newX2} - 1 * ${newB} = ${y2}`,
              `-1 * ${newX1} + 1 * ${newX2} - 1 * ${newB} = ${y3}`,
              `-1 * ${newX1} - 1 * ${newX2} - 1 * ${newB} = ${y4}`,
            ],
            yCalculates: [y1, y2, y3, y4],
            zCalculatesStrings: [
              `${y1} > 0 ? 1 : 0 = ${z1}`,
              `${y2} > 0 ? 1 : 0 = ${z2}`,
              `${y3} > 0 ? 1 : 0 = ${z3}`,
              `${y4} > 0 ? 1 : 0 = ${z4}`,
            ],
            zCalculates: [z1, z2, z3, z4],
            nnewValuesStrings: newValues.valuesStrings,
            newValues: newValues.values,
          });
          newX1 = newValues.values[0];
          newX2 = newValues.values[1];
          newB = newValues.values[2];
        }
      }
      vuelta++;
    }
    console.log(periods);
    return await this.jsonToHtmlTable(periods);
  }
}
