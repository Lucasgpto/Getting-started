var usuario = 'Lucas'
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(
  `Olá ${usuario}! Agora são exatamente ${hora} horas e ${minuto} minutos`
)
if (hora < 6) {
  console.log('Boa madrugada')
} else if (hora >= 6 && hora < 12) {
  console.log('Bom dia')
} else if (hora <= 18) {
  console.log('Boa tarde')
} else if (hora <= 24) {
  console.log('Boa noite')
}
