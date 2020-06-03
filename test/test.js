const expect = require('chai').expect
const platzom = require('..').default


describe('#platzom', function(){
  it('si la palabra termina en ar se le quitan dos letras', function (){
    const tranlation = platzom ("programar")
    expect(tranlation).to.equal("program")
  })

  it('si la palabra inicia con z se le añade pe al final', function (){
    const tranlation = platzom("zorro")
    const tranlation2 = platzom("zarpar")

    expect(tranlation).to.equal("zorrope")
    expect(tranlation2).to.equal("zarppe")
  })
  it('si la palabra tiene mas de 10 letras se separa con guion en medio', function (){
    const tranlation = platzom("abecedario")
    expect(tranlation).to.equal("abece_dario")
  })
  it('si la palabra es un palindromo no cuentan las otras reglas y se cambian mayusculas por minusculas', function (){
    const tranlation = platzom("sometemos")
    expect(tranlation).to.equal("SoMeTeMoS")
  })

})
