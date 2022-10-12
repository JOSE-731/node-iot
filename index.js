'use strict'
//Modulo de base de datos
module.exports = async function(config){
    const Agent = {}
    const Metric = {}

    return{
        Agent, //Aplicacion de monitoreo, que reporta las metricas
        Metric //Cualquier valor
    }
}