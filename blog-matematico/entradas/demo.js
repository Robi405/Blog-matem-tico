contenidoEntrada = `
<section>

    <h2>Que es factorizar?</h2>

 <p>Factorizar es deshacer una multiplicacion, tu encuentras los factores que producen dependiendo del resultado que te den</P>

    <h2> Termino común </h2>

<p> Se busca lo que todos los terminos tienen en comun
(el MCD con su exponente y cada literal que aparece en todos, con su menor exponente)
 y divide cada temrino entre ese factor, escribiendo el factor comun y lo que quedo.

 <h4>La formula es: ab + ac = a(b + c)</h4>


<h4> Por ejemplo: </h4>

<p> Factorizamos 20x⁴ − 30x³ + 10x² </p>
<ol>
  <li>MCD de los coeficientes: 20,30 y 10 → 10></li>
  <li>Literales en todos: x, con menor exponente 2 → x²</li>
  <li>Factor común: 10x²</li>
  <li>Divide cada término con la tabla:</li>
</ol>

  <table border="1" cellpadding="6" style="border-collapse: collapse; text-align: center;">
  <tr><td>20x⁴</td><td>−30x³</td><td>10x²</td></tr>
  <tr><td>÷10x²</td><td>÷10x²</td><td>÷10x²</td></tr>
  <tr><td>2x²</td><td>−3x</td><td>1</td></tr>
</table>

<p><strong>Resultado:</strong> 10x²(2x²− 3x + 1)</p>

<p><strong>Comprobación:</strong></p>
<ul>
  <li>10x² · 2x² = 20x²</li>
  <li>10x² · (−3x) = −30x³</li>
  <li>10x² · 1 = 10x²</li>
</ul>
<p>10x²(2x² − 3x + 1) = 20x⁴ − 30x³ + 10x²</p>








     <h2> Trinomio cuadrado perfecto </h2>

<p> Es cuando el primer y tercer termino tiene una raiz cuadrada exacta y el termino de en medio 
es el doble del producto de esas raices. Se factoriza como (razi del primero +/- raiz del tercero)<sup>2</sup>,
con el signo del termino en medio.

<h4>Las formula son: </h4>

<h4>a<sup>2</sup> + 2ab + b<sup>2</sup> = (a + b)<sup>2</sup> </h4>

<h4>a<sup>2</sup> - 2ab + b<sup>2</sup> = (a-b)<sup>2</sup></h4>

<h4> Por ejemplo: </h4>
<p> Factorizamos 25x² − 20x + 4 </p>

<ol>
  <li><strong>Raíz del primero:</strong> √25x² = 5x</li>
  <li><strong>Raíz del tercero:</strong> √4 = 2</li>
  <li><strong>Verifica el doble producto:</strong> 2(5x)(2) = 20x ✓ coincide con el de en medio</li>
  <li><strong>Signo del de en medio:</strong> −</li>
</ol>
<p><strong>Resultado:</strong> (5x − 2)²</p>

<p><strong>Comprobación:</strong></p>
<p>(5x − 2)² = (5x)² − 2(5x)(2) + (2)² = 25x² − 20x + 4 </p>




<h2> Diferencia de cuadrados </h2>


<p> Se factoriza como (raiz del primer termino + raiz del segundo) o (raiz del primero - raiz del segundo),
si es que tienes dos terminos separados por una resta y los dos tienen raiz cuadrada exacta.</p>

 <h4>La formula es: a<sup>2</sup> - b<sup>2</sup> = (a + b)(a-b) </h4>

<h4> Por ejemplo: </h4>
<p>Factorizamos 36a² − 49b²</p>

<ol>
  <li><strong>Raíz del primero:</strong> √36a² = 6a</li>
  <li><strong>Raíz del segundo:</strong> √49b² = 7b</li>
  <li><strong>Escribe los conjugados:</strong> (6a + 7b)(6a − 7b)</li>
</ol>

<p><strong>Resultado:</strong> (6a + 7b)(6a − 7b)</p>

<p><strong>Comprobación:</strong></p>
<p>(6a + 7b)(6a − 7b) = (6a)² − (7b)² = 36a² − 49b² ✓</p>










<h2>Ida y regreso</h2>
<p>Factorizar es deshacer una multiplicación. Cada caso es el regreso de un producto que ya conocemos
, y por eso la comprobación consiste en hacer la ida: multiplicar los factores y llegar al polinomio original.</p>

<table border="1" cellpadding="6" style="border-collapse: collapse; text-align: center;">
  <tr>
    <th>Caso</th>
    <th>Ida (multiplicar)</th>
    <th>Regreso (factorizar)</th>
    <th>Es el regreso de...</th>
  </tr>
  <tr>
    <td>Término común</td>
    <td>10x²(2x² − 3x + 1) → 20x⁴ − 30x³ + 10x²</td>
    <td>20x⁴ − 30x³ + 10x² → 10x²(2x² − 3x + 1)</td>
    <td>Propiedad distributiva (Tema 5)</td>
  </tr>
  <tr>
    <td>Trinomio cuadrado perfecto</td>
    <td>(5x − 2)² → 25x² − 20x + 4</td>
    <td>25x² − 20x + 4 → (5x − 2)²</td>
    <td>Binomio al cuadrado (1.1)</td>
  </tr>
  <tr>
    <td>Diferencia de cuadrados</td>
    <td>(6a + 7b)(6a − 7b) → 36a² − 49b²</td>
    <td>36a² − 49b² → (6a + 7b)(6a − 7b)</td>
    <td>Binomios conjugados (1.4)</td>
  </tr>
</table>

<p>En forma general:</p>
<ul>
  <li><strong>Término común:</strong> ab + ac = a(b + c) es la propiedad distributiva al revés.</li>
  <li><strong>Trinomio cuadrado perfecto:</strong> a² ± 2ab + b² = (a ± b)² es el binomio al cuadrado de regreso.</li>
  <li><strong>Diferencia de cuadrados:</strong> a² − b² = (a + b)(a − b) son los binomios conjugados de regreso.</li>
</ul>

</section>`;
