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
        if ((b.capacidadDePagoTotal >= auto.precio) && (b.capacidadDePagoEnCuotas >= (a.precio / a.cuotas))) {
            return true;
        } else {
            return false;
        }
    },
    autosQuePuedeComprar: function(persona) {
        const autosQueSi = [];
        const aPV = this.autosParaLaVenta();
        for (let i = 0; i < aPV.length; i ++) {
            if (this.puedeComprar(aPV[i], persona)) {
                autosQueSi.push(aPV[i]);
            }
        }
        return autosQueSi;
    }
}
let persona = [{
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000000,
    capacidadDePagoTotal: 100000000,
},
{
    nombre: "Jorge",
    capacidadDePagoEnCuotas: 20000000,
    capacidadDePagoTotal: 1000000,

}]
console.log(concesionaria.autosQuePuedeComprar(persona[0]))
console.log(concesionaria.autosNuevos())
//concesionaria.venderAuto("JJK116")
console.log(concesionaria.autosNuevos())
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())
console.log(concesionaria.autosQuePuedeComprar(persona[0]))