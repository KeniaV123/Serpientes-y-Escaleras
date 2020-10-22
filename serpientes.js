class Dado {
    tiro = 0;

    tirarDado() {
        this.tiro = Math.ceil(Math.random() * 6);
        return this.tiro;
    }

}

class Jugador {
    constructor(nombre, colorficha) {
        this.nombre = nombre;
        this.colorficha = colorficha;
    }


    avanzar() {
        let dado = new Dado();
        return dado.tirarDado();
    }

}

class Tablero {
    vectorTablero = new Array(
        0, 38, 2, 3, 14, 5, 6, 7, 8, 31, 10,
        11, 12, 13, 14, 15, 16, 7, 18, 19, 20,
        42, 22, 23, 24, 25, 26, 27, 84, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        67, 52, 53, 34, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 60, 65, 66, 67, 68, 69, 70,
        71, 91, 73, 74, 75, 76, 77, 78, 79, 99,
        81, 82, 83, 84, 85, 86, 36, 88, 89, 90,
        91, 92, 73, 94, 75, 96, 97, 79, 99, 100);

    verificarPosicion(posición) {
        if (posición <= 100) {
            return this.vectorTablero[posición];
        } else {
            return 100;
        }
    }
}


class Juego {
    constructor() {
        this.meta = 100;
        this.j1 = new Jugador("Paola", "Azul");
        this.j2 = new Jugador("Kenia", "Rosa");
        this.tablero = new Tablero();
        this.ganador = null;
    }

    iniciar() {
        let rondas = 1;
        let posicionj1 = 0;
        let posicionj2 = 0;

        while (posicionj1 < 100 && posicionj2 < 100) {
            console.log('Ronda ' + (rondas));
            posicionj1 += this.j1.avanzar();
            posicionj2 += this.j2.avanzar();
            posicionj1 = this.tablero.verificarPosicion(posicionj1);
            posicionj2 = this.tablero.verificarPosicion(posicionj2);
            console.log(this.j1.nombre, 'está en la posición ' + posicionj1);
            console.log(this.j2.nombre, 'está en la posición ' + posicionj2);
           
            console.log(' ');

            rondas++;
        }

        if (posicionj1 >= this.meta) {
                            
            this.ganador = "La ficha color " + this.j1.colorficha + " ganó, felicidades " + this.j1.nombre;
            console.log(this.ganador);
        } else if (posicionj2 >= this.meta) {
            this.ganador =  "La ficha color " + this.j2.colorficha + " ganó, felicidades " + this.j2.nombre;
            console.log(this.ganador);
        }
    }
}
let app = new Juego().iniciar();
