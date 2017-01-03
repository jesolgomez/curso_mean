function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.area = function() {
  return 0;
};

Shape.prototype.perimeter = function() {
  return 0;
};

Shape.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

Shape.prototype.getRGB = function() {
  // Return the rgb value (as a string) for the color you've selected.
  // You can have a preset list of colors that you switch on.
  return "rgb(0,0,0)";
}



















function Figura (lado_1, lado_2) {
  this.lado1 = lado_1;
  this.lado2 = lado_2;
}

function Triangulo (superficie, lado_1, lado_2) {
	Figura.call(this, lado_1, lado_2);
	this.superf = superficie,
}

Triangulo.prototype = new Figura();










var Rectangulo = function (padreDom) {
	
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
	this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
	CreadorDOM.addButton(this, " AREA ", this.calculaArea);
	this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
}
Rectangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value);
}

var Triangulo = function (padreDom) {
	
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
	this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
	CreadorDOM.addButton(this, " AREA ", this.calculaArea);
	this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
}
Triangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value) / 2;
}