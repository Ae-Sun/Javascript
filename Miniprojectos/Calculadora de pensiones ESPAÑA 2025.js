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



const laPagaDelaJubilacion = function (ageCotizados,BaseDeCotizacionTotal,age){
    let BasedeCotizacionMensual = BaseDeCotizacionTotal/350
    let mesesDeCotizacion = age*12
    const PorcentajeDeBaseDeCotizacion = function(age){
        if (mesesDeCotizacion>=444){
            return(1)
            }else if (mesesDeCotizacion>428){
                return(0.5+0.4712+(mesesDeCotizacion-428)*0.18)
            }else if (mesesDeCotizacion>=180){
                return(0.5+(mesesDeCotizacion-180)*0.19)
            }else {
                return(0)
            }
            }
    const pensionJubilatoria = PorcentajeDeBaseDeCotizacion(age)*BasedeCotizacionMensual
    if(age>=66.5){
        console.log("puedes acceder a las pensiones")
        return(pensionJubilatoria)
        } else if(age>=65 && ageCotizados >= 38.25){
            console.log("puedes acceder a las pensiones")
           return(pensionJubilatoria)
        } else if (age>=60){
            console.log("Esta es una jubilación Anticipada")
                if(ageCotizados<30){
                    console.log("Reduccion de la pension agresiva porque llevas menos de 30 años cotizados")
                    return(pensionJubilatoria*(1-0.08*(65-age)))
                } else{
                    if(ageCotizados<=34){
                        return(pensionJubilatoria*(1-0.075*(65-age)))
                    }
                    else if(ageCotizados<=37) {
                        return(pensionJubilatoria*(1-0.07*(65-age)))
                    }else if(ageCotizados<=39) {
                        return(pensionJubilatoria*(1-0.065*(65-age)))
                    }else {
                        return(pensionJubilatoria*(1-0.06*(65-age)))
                    }
                    }
                }
          else{
            console.log("no tienes derecho a la pension de jubilación, aun eres demasiado JOVEN")
            return(0)
          }  


        }

let laPagaConMaximosYMinimos = function(laPagaDelaJubilacion){
    let edadDeLaPersona = prompt("¿Tiene la persona 65? Si lo tiene responde 1, si tiene además gran invalidez responde 2. Si no responde 0 o no respondas",0)
    if (!isNaN(edadDeLaPersona) === true){
        let condicionDePersona = prompt("Si tiene conyuge a cargo responde 1, si tiene conyuge pero no a cargo responde 2.Si no tiene conyuge responde 0 o no respondas",0)
        if(!isNaN(condicionDePersona) === true){
            switch (`${edadDeLaPersona},${condicionDePersona}`){
                case "0,0": 

            }
        }else{
            console.log("introduciste un valor erronio, solo de admite 1, 2 o 0")
        }
    }else {
            console.log("introduciste un valor erronio, solo de admite 1, 2 o 0")
        }
}


