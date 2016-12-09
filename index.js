#!/usr/bin/env node
const http = require('http')
const cheerio = require('cheerio')
const words = process.argv
const word = process.argv[process.argv.length-1]
const url = 'http://www.sinonimos.com.br/'

const consult = `${url}${word}/`
let body = ''
console.log('consult', consult)

// sentido .sentido
http.get(consult, (res) => 
  res
    .on('data', data => body += data)     
    .on('end', () => {
      let $ = cheerio.load(body)
      const sentido = $('.sentido').text().split(':').join(';\n ')
      const sinonimos = $('.sinonimos').text().split('.').join(';\n ')
      // console.log('data', body            )
      console.log('sentido', sentido) 
      console.log('-----------------')
      console.log('sinonimos', sinonimos)
    })
)
