const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const req = require('express/lib/request');
const { response } = require('express');
const port = process.env.PORT || 21263

// Configurando o servidor
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

let db = {
    "returnCod": 0,
    "conta_cliente": "0000000000000",
    "razao_social": "XXXXXXXXXXXXX",
    "limite_creditoatual": 25000.89,
    "segurado": [
      {
        "codigo_seguradora": "ATRADIUS",
        "limite_recomendado": 25000.89
      },
      {
        "codigo_seguradora": "EULER",
        "limite_recomendado": 25000.89
      },
      {
        "codigo_seguradora": "COFACE",
        "limite_recomendado": 25000.89
      },
      {
        "codigo_seguradora": "COFACE DBA",
        "limite_recomendado": 25000.89
      },
      {
        "codigo_seguradora": "RISCO DBA",
        "limite_recomendado": 25000.89
      }
    ]
  }

  let dberror = [{
    "result": {
      "error": {
        "message": "necessário enviar body"
      }
    }
  }]

  // Buscar dados
  app.get('/users/dataUsersSAP', (req, res) =>{
    return res.json(db);
  });

  // Inserir dados
  app.post('/users/dataUsersSAP', (req, res) =>{
      const body = req.body;
    if(!body){
         return res.json(dberror);
    }
    else{
        return res.json(db);
    }
  });
//     // Get the client_code from the request body
//     const { codigo_cliente } = req.body;
//     console.log('client_code: ' + codigo_cliente)
//     // Search the database for a client with a matching client_code
//     const client = db.find(c => c.codigo_cliente === codigo_cliente);
//     // If a client is found, return it in the response
//     if (client) {
//         res.status(200).json(client);
//     } else {
//         // If no client is found, return a "not found" error
//         res.status(404).json({ message: 'Client not found' });
//     }
// });
    
// Get the client_code from the request body

app.listen(port, () =>{
   console.log('Servidor está rodando ');
 })
//app.listen(21263, () => {
  //  console.log('Express started at http://localhost:21263');
//})


