const calcularDesconto = require("../desconto")

test("Testa se o valor é verdadeiro se for maior que 150", ()=>{
    expect(calcularDesconto(200)).toBeTruthy()//espero receber um valor que seja verdadeiro
})
test("Testa se o valor é falso se for menor que 150", ()=>{
    expect(calcularDesconto(100)).toBeFalsy()
})