#!/usr/bin/env node
const http = require('http')
const cheerio = require('cheerio')
const utf8 = require('utf8')
const words = process.argv
const word = process.argv[process.argv.length-1]
const url = 'http://www.antonimos.com.br/'

const consult = `${url}${word}/`
let body = ''
console.log('consult', consult)

// sentido .sentido
http.get(consult, (res) => 
  res
    .on('data', data => body += data)     
    .on('end', () => {
      let $ = cheerio.load(body)
      // const sentido = $('.sentido').text()
      const antonimos = $('.antonimos').text().split('.')
      // console.log('data', body            )
      // console.log('sentido', sentido)
      console.log('antonimos', antonimos)
    })
)
