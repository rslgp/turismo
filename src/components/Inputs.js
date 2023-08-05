const { GoogleSpreadsheet } = require('google-spreadsheet');

  // Google Sheets Document ID -- PROD
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLESHEETID);
  
  
class App extends Component {

    // Initial state
    constructor(props) {
      super(props);
  
      this.state = {}
    }
    
    avaliar(coords, avaliacao){
    
        (async function main(coords, avaliacao) {
        try{
        await doc.useServiceAccountAuth({
            client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
            });

            await doc.loadInfo(); // Loads document properties and worksheets

            const sheet = doc.sheetsByIndex[0];
            //row = { Name: "new name", Value: "new value" };
            
            if(envVariables.rows===undefined) envVariables.rows = await sheet.getRows();
            const rows = envVariables.rows;
            coords = JSON.stringify(coords);
            let rowEncontrada = rows.filter((x) => { 
            //x.Coordinates
            console.log(JSON.parse(x.Dados).Coordinates);
            return JSON.parse(x.Dados).Coordinates===(coords); });
            
            //console.log(rowEncontrada[0].City);
            let dadosNovos = JSON.parse(rowEncontrada[0].Dados);
            if(dadosNovos.Avaliacao == undefined){
            dadosNovos.Avaliacao = {
                "1":0,
                "2":0,
                "3":0,
                "4":0,
                "5":0
            }
            }
            if(avaliacao===null)avaliacao=5;
            dadosNovos.Avaliacao[avaliacao]++;
            rowEncontrada[0].Dados = JSON.stringify(dadosNovos);
            
            let cookieName='pontosAvaliados';
            let pontos = cookies.get(cookieName) || "";
            coords = JSON.parse(coords);
            let coordsString = coords[0]+""+coords[1];
            //let pontosEntregues = JSON.parse(pontosEntreguesData);
            if(pontos.includes(coordsString)) return;

            await rowEncontrada[0].save();
            
            pontos+=coordsString;

            const cookieExpireDate = new Date();
            cookieExpireDate.setDate(cookieExpireDate.getDate() + EXPIRE_DAY);

            cookies.set(cookieName, pontos, { path: '/', expires: cookieExpireDate });
            
            window.location.reload();
        }catch(e){
        console.log(e);

        }
        
        })(coords, avaliacao);
    }  
}
  