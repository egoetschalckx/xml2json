const fs = require('fs')
const xml2js = require('xml2js')

const parser = xml2js.Parser({
    attrkey: "_attrs",
    charkey: "_text",
    explicitArray: false
})

const fileName = "book_catalog"
const xmlFileName = fileName + ".xml"
const jsonFileName = fileName + ".json"

fs.readFile(xmlFileName, "utf8", function(err, data) {
    if (err) throw err

    parser.parseStringPromise(data).then(function (result) {
        const json = JSON.stringify(result, null, 2)

        fs.writeFile(jsonFileName, json, (err) => {
            if (err) throw err

            console.log(jsonFileName + " saved...")
        });
    })
})
