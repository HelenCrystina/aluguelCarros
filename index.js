let dias;
let km;
let tipoCarro;

tipoCarro = prompt("Escreva qual tipo de carro voce usou? luxo ou popular?");
dias = parseInt(prompt("Quantos dias o carro foi alugado?"));
km = parseFloat(prompt("Quantos km voce percorreu com o carro alugado?"));

if (tipoCarro=="luxo"){
    dias = dias*150;
    if (km>200){
        km = km*0.25
        alert(`Voce pagara ${dias+km} reais `)
    } else {
        km = km*0.30
        alert(`Voce pagara ${dias+km} reais `)
    }
}else {
    dias = dias * 90;
    if (km>100){
        km = km*0.10
        alert(`Voce pagara ${dias+km} reais `)
    } else {
        km = km*0.20
        alert(`Voce pagara ${dias+km} reais `)
    }
}