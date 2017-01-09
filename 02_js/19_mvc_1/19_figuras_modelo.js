 function calcularDeVerdadAreaTriangulo (ancho, alto) {
        return ancho * alto / 2;
}

var Modelo = {
    Rectangulo: {
        calcularDeVerdadArea: function(ancho, alto) { return ancho * alto; },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho * 2; }
    },
    Elipse: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        }
    },
    TrianguloEquilatero: {
        calcularDeVerdadArea: this.calcularDeVerdadAreaTriangulo,
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; }
    },
    TrianguloIsosceles: {
        calcularDeVerdadArea: this.calcularDeVerdadAreaTriangulo,
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; }
    },
	Hexagono: {
		calcularDeVerdadPerimetro: function(alto, ancho) { return ancho * 6; },
		calcularDeVerdadArea: function(alto, ancho) { return this.calcularDeVerdadPerimetro(alto, ancho) * alto / 2; }

   }	
};