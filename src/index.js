const { readMissionsData, writeNewMissionDate } = require('./utils/fsUtils');

async function main() {
    writeNewMissionDate({
            "name": "Tryber",
            "year": "2001",
            "country": "USA",
            "destination": "Terra"
    })
}

main()