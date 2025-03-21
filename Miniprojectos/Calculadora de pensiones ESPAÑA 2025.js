const salarioMinimo = {
    salarioMinimoCon65 : {
        conyugeACargo : 1127.6 ,
        sinConyugeACargo : 874.4 ,
        conConyugeSinCargo : 830
    },
    salarioMinimoMenos65 : {
        conyugeACargo : 1127.6 ,
        sinConyugeACargo : 818 ,
        conConyugeSinCargo : 773
    },
    salarioMinimoGranInvalidez65 : {
        conyugeACargo : 1691.3 ,
        sinConyugeACargo : 1311.6 ,
        conConyugeSinCargo : 1245
    }
}

const laPagaDelaJubilacion = function (ageCotizados, BaseDeCotizacionTotal, age) {
    let BasedeCotizacionMensual = BaseDeCotizacionTotal / 350;
    let mesesDeCotizacion = ageCotizados * 12;

    // Función para calcular el porcentaje de base de cotización
    const PorcentajeDeBaseDeCotizacion = function () {
        if (mesesDeCotizacion >= 444) {
            return 1;
        } else if (mesesDeCotizacion > 428) {
            return 0.5 + (mesesDeCotizacion - 428) * 0.18;
        } else if (mesesDeCotizacion >= 180) {
            return 0.5 + (mesesDeCotizacion - 180) * 0.19;
        } else {
            return 0;
        }
    };

    const pensionJubilatoria = PorcentajeDeBaseDeCotizacion() * BasedeCotizacionMensual;

    if (age >= 66.5) {
        console.log("Puedes acceder a las pensiones");
        return pensionJubilatoria;
    } else if (age >= 65 && ageCotizados >= 38.25) {
        console.log("Puedes acceder a las pensiones");
        return pensionJubilatoria;
    } else if (age >= 60) {
        console.log("Esta es una jubilación anticipada");

        let reduccion;
        if (ageCotizados < 30) {
            console.log("Reducción de la pensión agresiva porque llevas menos de 30 años cotizados");
            reduccion = 0.08;
        } else if (ageCotizados <= 34) {
            reduccion = 0.075;
        } else if (ageCotizados <= 37) {
            reduccion = 0.07;
        } else if (ageCotizados <= 39) {
            reduccion = 0.065;
        } else {
            reduccion = 0.06;
        }

        return pensionJubilatoria * (1 - reduccion * (65 - age));
    } else {
        console.log("No tienes derecho a la pensión de jubilación, aún eres demasiado joven");
        return 0;
    }
};

// Llamada a la función corregida ducks
console.log(laPagaDelaJubilacion(37, 400000, 66));