contenidoEntrada = `
<section>
    <h2>Productos notables</h2>
    <p>Un producto notable es una multiplicacion que aparece bastantes veces, es un patron que te da el resultado directo de los  y en la que ya tenemos una forma
    fácil de resolverlos.</p>
    <h3>Binomio al cuadrado</h3>
    <p> Es el binomio al cuadrado, mas (o menos) el doble del primer binomio por el segundo, mas el cuadrado del segundo.</p>

    <h4> Por ejemplo: </h4>
    <p> Desarrollaremos (x - 5)<sup>2</sup></p>

    <p>1.- Cuadrado del primer temrino: x<sup>2</sup> </p>
    <p>2.- Multiplicamos el doble del primer termino por el segundo: - 2 (x) (5) = - 10x</p>
    <p>3.- Por ultimo sacamos el cuadrado del segundo termino: (5)(5) = 25 </p>

    <h4> Nos da como resultado:</h4> <p> x<sup>2</sup> - 10x + 25 </p>

    <h4>Comprobación con el Método de la Tabla</h4>

    <style>
  .tabla-wrap { overflow-x: auto; margin: 1.4rem 0; }
  table.tabla {
    border-collapse: collapse;
    margin: 0 auto;
    font-family: "Cambria Math", "STIX Two Math", Cambria, "Times New Roman", serif;
    font-size: 1.5rem;
  }
  table.tabla td {
    padding: .35rem 1.1rem;
    text-align: center;
    min-width: 4.5rem;
  }
  table.tabla tr:nth-child(1) td,
  table.tabla tr:nth-child(2) td { border-bottom: 2px solid #1f2430; }
  table.tabla td:nth-child(1),
  table.tabla td:nth-child(2) { border-right: 2px solid #1f2430; }
  table.tabla .res { color: #d11f1f; }

</style>

<div class="tabla-wrap">
  <table class="tabla">
    <tr>
      <td>x</td>
      <td class="res">−5x</td>
      <td>−5</td>
    </tr>
    <tr>
      <td class="res">x<sup>2</sup></td>
      <td class="res">−5x − 5x</td>
      <td class="res">25</td>
    </tr>
    <tr>
      <td>x</td>
      <td class="res">−5x</td>
      <td>−5</td>
    </tr>
  </table>
</div>

<p>
  Se leen los tres resultados de la fila central y se suman los términos
  semejantes: <strong>−5x − 5x = −10x</strong>.
</p>
<p style="text-align:center; font-size:1.5rem; font-family:Cambria, 'Times New Roman', serif;">
  <span style="color:#d11f1f;">x<sup>2</sup> − 5x − 5x + 25</span>
  <span style="margin:0 .8rem; color:#5b6475;">→</span>
  <span style="color:#d11f1f;"><strong>x<sup>2</sup> − 10x + 25</strong></span>
</p>

<h3>Binomio al cubo</h3>

<p> Para desarrollar un binomio al cubo, primero, tienes que poner un 3 a cada lado del binomio y en el renglon de abajo, el cuadrado de cada término. Las columnas te ayudaran a desarrollar el primer y ultimo termino; por ultimo las diagonales (termino de arriba x el cuadrado del lado contrario) te dan los terminos de enmedio</p>

<h4> Por ejemplo: </h4>
<p>Desarrollemos (x + 3)<sup>3</sup> </p>

<p> La formula general es: (a + b)<sup>3</sup>= a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup> </p>

<p>1.- Identificamos los terminos: <h5> Primer termino(a): x </h5> <h5> Segundo termino(b): 3 </h5> </p>

<p> 2.- Aplicamos cada parte de la formula </p>
<p> El cubo del primer termino (a)<sup>3</sup>:</p>  
<p> (x)<sup>3</sup> = x<sup>3</sup> </p>  
<p> Luego el triple del cuadrado del primero por el segundo (3a<sup>2</sup>b):</p>
<p>3(x)<sup>2</sup> (3) = (3)(3)(x<sup>2</sup>) = 9x<sup>2</sup> </p>
<p> El triple del primero por el cuadrado del segundo (3ab<sup>2</sup>):</p>
<p> 3(x)(3)<sup>2</sup> = (3)(x)(9) = 27x
<p> El cubo del segundo termino (b<sup>3</sup>): </p>
<p>(3)<sup>3</sup> = (3)(3)(3) = 27  </p>

<p> 3.- Juntamos todos los resultados sumando cada uno de los terminos de mayor a menor exponente:</p>
<p>(x + 3)<sup>3</sup> = (x)<sup>3</sup> + 9x<sup>2</sup> + 27x + 27  </p>

<h4>Comprobación con el Método de la Tabla</h4>





</section>`;
