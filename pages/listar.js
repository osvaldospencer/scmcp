import React, { useEffect, useState, useRef } from 'react'
//import 'isomorphic-unfetch'
import dayjs from 'dayjs'
import { getConsultas} from '../api/consultas'
//import ListarConsultas from '../components/ListarConsultas'

const dias =  []
const anos = []
const dados_ = {}
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();


let dia = dayjs('2020-07-24'.date)
for (let index = 1; index < 32; index++) {
    //const element = array[index];
    dias.push(<option key={index} value={index}>{index}</option>)
    
}
for (let index = 2020; index < (year + 6); index++) {
    //const element = array[index];
    anos.push(<option key={index} value={index}>{index}</option>)
    
}



function getC() {
    const [tipo, setTipo ] = useState('mesano');
    const [valor, setValor] = useState(` dia between ` + `'`+ year+`-` + month + `-01'` +` and '` + year + `-` + month + `-31'`);
    const [dat, setDat] = useState(0)
    const [mes, setMes] = useState(0)
    const [ano, setAno] = useState(0)
    const [ut, setUt] = useState('0')
    const [query, setQuery] = useState(' ')
    
    //let fetchURL = ''

    useEffect(()=>{
        if(dat > 0 && mes > 0 && ano > 0){
            setTipo('dia')
            setValor(ano + '-'+ mes + '-' +dat)
            const fetchURL = `http://scmcp.pt/consultas/lerconsultas.php?tipo=${tipo}&val=${valor}`;
            
            const getItems = () => fetch(fetchURL).then(res =>res.json());
                getItems().then(data => setDados(data));
                
    
        }else if(dat == 0 && mes == 0 && ano == 0 && ut !='0'){
            setTipo('utente')
            setValor(ut)
            const fetchURL = `http://scmcp.pt/consultas/lerconsultas.php?tipo=${tipo}&val=${valor}`;
                      
            const getItems = () => fetch(fetchURL).then(res =>res.json());
                getItems().then(data => setDados(data));                
    
        }else if(dat == 0 && mes > 0 && ano > 0 && ut != '0'){
            setTipo('utente_')
            setValor(`like '`+ ut + `%' and dia between ` + `'`+ ano+`-` + mes + `-01'` +` and '` + ano + `-` + mes + `-31'` )
            const fetchURL = `http://scmcp.pt/consultas/lerconsultas.php?tipo=${tipo}&val=${valor}`;                        
            const getItems = () => fetch(fetchURL).then(res =>res.json());
                getItems().then(data => setDados(data));     
               console.log(fetchURL)            

        }else if(dat == 0 && mes > 0 && ano > 0 && ut == '0'){
            setTipo('mesano')
            setValor(` dia between ` + `'`+ ano+`-` + mes + `-01'` +` and '` + ano + `-` + mes + `-31'`)
            const fetchURL = `http://scmcp.pt/consultas/lerconsultas.php?tipo=${tipo}&val=${valor}`;    
                               
            const getItems = () => fetch(fetchURL).then(res =>res.json());
            getItems().then(data => setDados(data)); 
            

        }

        
        
        

    })

    
    

    let num = 0
    const [dados, setDados] = useState();
    const [mostra, setMostra] = useState(false);
    const [id, setId] = useState('nada');
    
    
    useEffect(() => {
        const fetchURL = `http://scmcp.pt/consultas/lerconsultas.php?tipo=${tipo}&val=${valor}`;
    //console.log(fetchURL);
    
    const getItems = () => fetch(fetchURL).then(res =>res.json());
        getItems().then(data => setDados(data));
        //console.log('dados->os '+dados)
      }, []);
      
      return (
        
            <div className="flex flex-col bg-gray-600 p-4 " >
                <div className="bg-gray-400 flex w-full sm:flex-row flex-col mx-auto p-4 rounded " >
                    <div className="pr-2  w-full lg:w-1/6 md:w-1/6 xl:w-1/6">
                        <label className="font-bold">Dia:</label>
                        {
                            
                        }
                        <select id="_dia"  placeholder="dia" className="py-2 m-2 w-full rounded" onChange={e=>setDat(e.target.value)}  >
                            <option value="0">0</option>
                            {
                               dias
                            }                   
                        
                        </select>

                    </div>

                    <div className="pr-2  w-full lg:w-2/6 md:w-2/6 xl:w-2/6">
                        <label className="font-bold">Mês:</label>
                        <select id="_mes"  placeholder="mes"  className="py-2 m-2  w-full rounded"  onChange={e=>setMes(e.target.value)} >
                            <option value="0">0</option>
                            <option value="1">Janeiro</option>
                            <option value="2">Fevereiro</option>
                            <option value="3">Março</option>
                            <option value="4">Abril</option>
                            <option value="5">Maio</option>
                            <option value="6">Junho</option>
                            <option value="7">Julho</option>
                            <option value="8">Agosto</option>
                            <option value="9">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                        </select>
                    </div>
                    
                    <div className="pr-2  w-full  lg:w-3/6 md:w-3/6 xl:w-3/6">
                        <label className="font-bold">Ano:</label>
                        <select id="_ano"  placeholder="mes"  className="py-2 m-2  w-full  rounded"  onChange={e=>setAno(e.target.value)} >
                            <option value="0">0</option>
                            {
                                anos
                            }
                        </select>
                    </div>
                    <div className=" pr-2 w-full lg:w-5/6 md:w-4/6 xl:w-4/6">
                    <label className="font-bold">Utente</label>
                        <input id="utente"  type="text" className=" py-2 px-2 m-2  rounded  w-full " onChange={e=>setUt(e.target.value)} />
                            
                    </div>
                    <div className=" pl-2 w-full lg:w-6/6 md:w-6/6 xl:w-6/6">
                    <label className="font-bold">Pesquisar</label>
                        <button id="listar"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded  w-full ">
                            listar
                        </button>
                    </div>
                    
                </div>
                <div className="p-4 flex flex-row text-center flex-wrap justify-center" >
                    
                {
              
              dados && dados.length > 0
                ? dados.map(item => {
                    
                    num++
                return <div key={item.id}>
                            <div key={item.id} onClick={()=>{setMostra(!mostra); setId(`hoje${ item.id }`) }}  className= { num % 2 == 0 ? 'bg-white p-2 m-1 rounded  hover:bg-green-600 cursor-pointer' : 'bg-blue-100 p-2 m-1 rounded  hover:bg-green-600 cursor-pointer'} >
                                <div className="m-2">{num}</div>
                                <div className="m-2 font-bold">{item.utente}</div>
                                <div className="m-2">{item.dia}</div>
                                <div className="m-2">{item.hora}</div>
                            </div>
                            {
                            mostra && id==`hoje${ item.id }` &&
                        
                        <div id={'hoje' + item.id} className="bg-blue-400 rounded text-justify" >
                            <div className="text-sm m-1">{item.consulta}</div>
                            <div  className="text-sm m-1">{item.local}</div>
                            <div  className="text-sm m-1">{item.obs}</div>
                        </div>
                }
                        </div>
                  })
                : "Sem consultas"}
                   
                </div>
                
                
            </div>
            
       
            
         
        
      );
}



const Listar = () =>(     
  
    <div className="container mx-auto p-4 ">
            <h2 className="p-2 text-2xl" >Lista de consultas</h2>            
                    
                        {
                           getC()
                           //<ListarConsultas tipo='all' valor='0' />
                        }
        </div>
        
  )

  



 



export default Listar