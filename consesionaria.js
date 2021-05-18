let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false,
}, {
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false,
}]
let concesionaria = {
    autos,
    buscarAuto: function (patente) {
        const auto = autos.find(au => au.patente == patente)
        if (auto == undefined) {
            return null
        } else {
            return auto
        }
    },
    venderAuto: function (patente) {
        const autoEncontrado = this.buscarAuto(patente);
        if (autoEncontrado) {autoEncontrado.vendido = true};
    },
    autosParaLaVenta: function () {
        return this.autos.filter(x => x.vendido == false);
    },
    autosNuevos: function () {
        return this.autosParaLaVenta().filter(x => (x.km < 100));
    },
    listaDeVentas: function () {
        let precio = [];
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido == true) {
                precio.push(this.autos[i].precio);
            }
        }
        return precio;
    },
    totalDeVentas: function () {
        return this.listaDeVentas().reduce((acc, el) => acc + el, 0);
    },
    puedeComprar: function (auto, b) {
        let a = auto;
        if (a && (b.capacidadDePagoTotal >= a.precio) && (b.capacidadDePagoEnCuotas >= (a.precio / 12))) {
            return true;
        } else {
            return false;
        }
    },
    autosQuePuedeComprar: function (persona) {
        if (this.autosParaLaVenta = true);
        return this.autosParaLaVenta.map(x => x.puedeComprar = true);
        }
    }
let persona = [{
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000000,
    capacidadDePagoTotal: 1000000,
},
{
    nombre: "Jorge",
    capacidadDePagoEnCuotas: 20000000,
    capacidadDePagoTotal: 1000000,

}]

console.log(concesionaria.autosNuevos())
//concesionaria.venderAuto("JJK116")
console.log(concesionaria.autosNuevos())
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())
console.log(concesionaria.autosQuePuedeComprar("Jorge"))