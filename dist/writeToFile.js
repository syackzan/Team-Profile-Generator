const fs = require('fs')


function writeToFile (manager, engineerA, internA, filename, companyName){
    
    
    let engineers = [];
    let interns = [];

   engineerA.forEach(element => {
        let card = `<div class="card rounded" style="width: 18rem;">
        <div class="card-body" style="text-align: center">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID #: ${element.id}</li>
          <li class="list-group-item">Email: ${element.email}</li>
          <li class="list-group-item">Github Account: ${element.github}</li>
        </ul>
      </div>`
        engineers.push(card);
      return card;
    })

    const stringEngineers = engineers.join("").replace('[', '').replace(']', '').replace('/n', '');

    internA.forEach(element => {
        let card = `<div class="card rounded" style="width: 18rem;"><div class="card-body" style="text-align: center">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID #: ${element.id}</li>
          <li class="list-group-item">Email: ${element.email}</li>
          <li class="list-group-item">Current School: ${element.school}</li>
        </ul></div>`
        interns.push(card);
      return card;
    })

    const stringInterns = interns.join("").replace('[', '').replace(']', '').replace('/n', '');
    
    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- Main CSS Folder -->
        <link rel="stylesheet" href="./dist/assets/css/style.css">
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid bg-primary">
                <div class="container">
                  <h1 class="display-4" style="text-align: center">${companyName} Team Profiles</h1>
                  <p class="lead" style="text-align: center">Love your team!</p>
                </div>
              </div>
        </header>
    
        <br>
    
        <div class="jumbotron jumbotron-fluid">
            <div class="container d-flex flex-wrap">
                <div class="card rounded" style="width: 18rem;">
                    <div class="card-body" style="text-align: center">
                      <h5 class="card-title">${manager.name}</h5>
                      <p class="card-text">${manager.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID #: ${manager.id}</li>
                      <li class="list-group-item">Email: ${manager.email}</li>
                      <li class="list-group-item">Office #: ${manager.officeNumber}</li>
                    </ul>
                </div>
                ${stringEngineers}
                ${stringInterns}
            </div>
          </div>
    
        
    
    </body>
    </html>`;

    fs.writeFile(filename, template, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

module.exports = writeToFile;