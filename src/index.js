const readline = require('readline-sync')
const { readMissionsData, writeNewMissionDate } = require('./utils/fsUtils');

async function main() {
    const name = readline.question('Qual é o nome da missão?')
    const year = readline.questionInt('Qual é o ano da missão?')
    const country = readline.question('Qual é o país da missão?')
    const destination = readline.question('Qual é o destino da missão?')

    const newMission = { name, year, country, destination }
    writeNewMissionDate(newMission)
    console.log('Nova missão registrada com sucesso!')
    // writeNewMissionDate({
    //         "name": "Tryber",
    //         "year": "2001",
    //         "country": "USA",
    //         "destination": "Terra"
    // })
}


main()