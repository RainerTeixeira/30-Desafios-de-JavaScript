class piloto {
    constructor(primeiroNome, sobrenome, nascimento) {
        this.primeiroNome = primeiroNome
        this.sobrenome = sobrenome
        this.nascimento = new Date(nascimento)
        this.licencavoo = false
    }
    gerarLicencavoo() {
        let licenca = ''

        for (let i = 0; i < 5; i++) {
            licenca += this.sobrenome[i] ? this.sobrenome[i].toUpperCase() : '9'
        }

        licenca += '-'
        licenca += this.nascimento.getFullYear().toString()[2]
        licenca += this.getNascimentoMesCompleto()
        licenca += this.nascimento.getFullYear().toString()[3]
        licenca += '.'
        licenca += this.primeiroNome[0].toLowerCase()

        this.licencavoo = licenca
    }
    getNascimentoMesCompleto() {
        if (this.nascimento.getMonth() < 9) {
            return `0${this.nascimento.getMonth() + 1}`
        }else{
            return `${this.nascimento.getMonth() + 1}`        }
    }
}



const piloto1 = new piloto('Jonh', 'Doe', '05-25-1977')
const piloto2 = new piloto('Hall', 'Jordan', '09-02-1995')
const piloto3 = new piloto('Carol', 'Danvers', '08-17-1968')
const piloto4 = new piloto('Rainer', 'Teixeira', '08-02-1994')

piloto1.gerarLicencavoo()
piloto2.gerarLicencavoo()
piloto3.gerarLicencavoo()
piloto4.gerarLicencavoo()

console.log(piloto1)
console.log(piloto2)
console.log(piloto3)
console.log(piloto4)