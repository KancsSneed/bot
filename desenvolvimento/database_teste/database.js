const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)

//criar
db.set('Servidor', [])

//postar
db.get('Servidor').push({
    id: '4321',
    name: 'Reginaldo Rossi'
})
//editar
db.get('Servidor').find({id: '4321'}).assign({name: 'Luciano Hulk'})
//buscar
var dados = db.get('Servidor').find({id: '1234'}).value()
console.log(dados.name)

//apagar
