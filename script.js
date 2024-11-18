let listaDeBandas = ["ff", "peral Jam", "nirvana","pink floyd","ramones"]

listaDeBandas.push("ramones");

console.log(listaDeBandas)

listaDeBandas.unshift("pearl jam");

console.log(listaDeBandas)

listaDeBandas.pop("nirvana");

console.log(listaDeBandas)

listaDeBandas.shift()

console.log(listaDeBandas)

let dadoIncluido = listaDeBandas.includes("thell");

console.log(dadoIncluido)

let indiceDado = listaDeBandas.indexOf("ff")

console.log(indiceDado)

let dadosRetirados = listaDeBandas.slice(-3);

console.log(dadosRetirados)

let dadosSubstituidos = listaDeBandas.splice(1,2, "ff","ramones")

console.log(dadosSubstituidos)
console.log(listaDeBandas)

for(let indice = 0; indice < listaDeBandas.length; indice++){
    console.log(`o personagem${listaDeBandas[indice]} esta no indice ${indice}`)

}


