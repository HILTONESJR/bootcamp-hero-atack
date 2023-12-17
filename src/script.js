class heroi{
     constructor(cHero, idade, tipoMagia){
         this.cHero = cHero
         this.idade = idade
         this.tipoMagia = tipoMagia
 } atacar(){
    console.log(`O ${this.cHero} atacou usando magia de ${this.tipoMagia}`)
    }
 } 
     let magoBolado = new heroi("Mago", "35", "Fogo!")
     magoBolado.atacar()
