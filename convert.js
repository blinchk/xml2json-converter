// $ npm i xml2json

import parser from 'xml2json';
import fs from 'fs';

fs.readFile('./random.xml', 'utf-8', (err, data) => {
    const json = parser.toJson(data);
    console.log(json);
})