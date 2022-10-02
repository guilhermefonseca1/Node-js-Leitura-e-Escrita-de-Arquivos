const fs = require('fs').promises;
const { networkInterfaces } = require('os');
const path = require('path')
const MISSION_DATA_PATH = '../../data/missions.json' 
async function readMissionsData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH))
        const missions = JSON.parse(data)

        return missions
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error}`)    
    }
}

async function writeNewMissionDate(newMission) {
    try {
        const oldMissions = await readMissionsData()
        const allmissions = JSON.stringify([...oldMissions, { id: Date.now(), ...newMission }
        ])

        await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allmissions)
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error}`)
}
}
module.exports = {
    readMissionsData,
    writeNewMissionDate
}