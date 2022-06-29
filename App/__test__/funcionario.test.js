const funcionario = require("../funcionario")
test("Salário não pode ser menor que 1000",()=>{
    expect(funcionario.getSalario()).toBeLess(1000)
})