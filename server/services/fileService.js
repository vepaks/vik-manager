const fs = require('fs')
const File = require('../models/File')
const config = require('config')

class FileService {

//    функция за създаване на файл
    createDir(file) {
        const filePath = `${config.get('filePath')}/${file.user}/${file.path}`
        return new Promise(((resolve, reject) => {
            try {
                if(!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'Файлът беше създаден'})
                } else {
                    return reject({message: 'Файлът вече съществува'})
                }
            } catch (e) {
                return reject({message: 'File error'})
            }
        }))
    }

}


module.exports = new FileService()