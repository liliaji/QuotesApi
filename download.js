import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

fetch("https://api.quotable.io/quotes")
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./quotes.json", JSON.stringify(data)))
  