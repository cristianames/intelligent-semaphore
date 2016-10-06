package com.thegrid.ia

import java.util.*
import org.jetbrains.spek.api.Spek
/**
 * Created by Bruno on 05/10/16.
 */
class Ag {
    val cotaInferior = 22.0
    val cotaSuperior = 60.0
    final val cromosomasPordefault = 6
    var poblacionGlobal = mutableListOf<Cromosoma>()
    var poblacionInicial = mutableListOf<Cromosoma>()


    fun generarPoblacionGlobal (cantSemaforos: Int, cantCromosomas: Int){
        var i = 0
        var j = 0
        do {
            var nuevoCromosoma = Cromosoma()
            do {
                var verdeH = cotaSuperior - Random().nextInt(cotaInferior.toInt())
                var verdeV = cotaSuperior - Random().nextInt(cotaInferior.toInt())
                nuevoCromosoma.genes.add(verdeH)
                nuevoCromosoma.genes.add(verdeV)
                i++
            } while (i < cantSemaforos)
            poblacionGlobal.add(nuevoCromosoma)
            j++
            i = 0
        }while (j < cantCromosomas)
    }

    fun generarPoblacionInicial (){
      for(i in 1..cromosomasPordefault) poblacionInicial.add(poblacionGlobal.get(Random().nextInt(poblacionGlobal.size)) )
    }


    fun generarPoblacionInicial (cantCromosomas: Int){
        for(i in 1..cantCromosomas) poblacionInicial.add(poblacionGlobal.get(Random().nextInt(poblacionGlobal.size)) )

    }

}