const fs = require('fs').promises;

async function readMissionsData() {
    try {
        const data = await fs.readFile('../../data/missions.json')
        console.log(data)
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error}`)
    }
}

readMissionsData()