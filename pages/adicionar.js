import React, { useState, useEffect } from 'react'

function confirmar(utente, data, hora, consulta, local, obs) {
    let conf = salvar_(utente, data, hora, consulta, local, obs)
    console.log(conf)
    
}

function salvar_(utente, data, hora, consulta, local, obs) {

    

    let resp=[]
    
       //alert(utente.length)
        if(utente.length > 0 && data.length > 0 && consulta.length > 0){
            
            const fetchURL = `http://scmcp.pt/consultas/lerconsultas.php?tipo=gravar&utente=${utente}&data=${data}&hora=${hora}&consulta=${consulta}&local=${local}&obs=${obs}`;
            console.log(fetchURL)
            
            const getItems = () => fetch(fetchURL).then(res =>res.json);
                getItems().then(data => resp = data[0]);
                console.log('resposta->'+resp)
                return resp
                
    
        }else{
            return 0

        }
    
    

}

function salvar() {
    let num = 0
    const [dados, setDados] = useState();
    const [ut, setUt] = useState('');
    const [dia, setDia] = useState('');
    const [hora, setHora] = useState('')
    const [consulta, setConsulta] = useState('')
    const [local, setLocal] = useState('')
    const [obs, setObs] = useState('')
    const [loading, setLoading] = useState(false)
    const [resp, setResp] = useState(1)
    const [alerta, setAlerta] = useState('')
    const [cor, setCor] = useState(' text-green-500 ')

    

    function mandar() {
        setLoading(true)
        //alert(ut.length +' - ' + dia.length + '-' + consulta.length)
        let resposta = 0
        if(ut.length >0 && dia.length > 0 && consulta.length > 0){
            //alert(ut + dia + hora + consulta + local + obs)
            const fetchURL =  `http://scmcp.pt/consultas/lerconsultas.php?tipo=gravar&utente=${ut}&data=${dia}&hora=${hora}&consulta=${consulta}&local=${local}&obs=${obs}`;
    //console.log(fetchURL);
    
            const getItems = () => fetch(fetchURL).then(res =>res.json());
                getItems().then(dat => setResp(dat));  

                resposta = resp
                console.log('resp' +resposta)
                
                if (resposta == 1) {
                   
                    setUt('')
                    setDia('')
                    setHora('')
                    setConsulta('')
                    setLocal('')
                    setObs('')  
                    
                    setCor(' text-green-500 ' )                  

                    setAlerta('Registo guardado com sucesso')
                    setLoading(false)

                    
                    
                    
                }else{
                    setCor(' text-pink-300 ')  
                    setLoading(false)                

                    setAlerta('Ocorreu um erro, tenta outra vez')
                }
                
                
        }else{

                    setCor(' text-pink-300 ')                
                    setLoading(false) 
                    setAlerta('Tem de preencher os seguintes campos: Utente, Dia e Consulta')

        }
       
        
    }


    
    return(
        <div className="container mx-auto p-4 text-center">
            <h2 className="p-10 text-2xl" >Adicionar consulta</h2>
            <div className="flex flex-col bg-gray-600 p-4 " >
                
                <div className="lg:w-3/5 lx:w-3/5 w-11/12 mx-auto text-center border-solid border-2" >
                    <label>Utente</label>
                    <input type="text" id="utente" name="utente" value={ut} className="p-2 lg:w-3/5 lx:w-3/5 w-11/12 block mx-auto" onChange={(e)=>setUt(e.target.value)} />
                    <label>Dia</label>
                    <input type="date" id="data" name="data" value={dia} className="p-2 lg:w-3/12 lx:w-3/12 w-11/12 block mx-auto" onChange={(e)=>setDia(e.target.value)} />
                    <label>Hora</label>
                    <input type="time" id="hora" name="hora"  value={hora} className="p-2 lg:w-2/12 lx:w-3/12 w-11/12 block mx-auto"  onChange={(e)=>setHora(e.target.value)} />
                    <label>Consulta</label>
                    <textarea id="consulta" name="consulta"  value={consulta} className="p-2 lg:w-3/5 lx:w-3/5 w-11/12 block mx-auto"  onChange={(e)=>setConsulta(e.target.value)}></textarea>
                    <label>Local</label>
                    <input type="text" id="local" name="local"  value={local} className="p-2 lg:w-3/5 lx:w-3/5 w-11/12 block mx-auto"  onChange={(e)=>setLocal(e.target.value)} />
                    <label>Observação</label>
                    <textarea id="obs" name="obs"  value={obs}  className="p-2 lg:w-3/5 lx:w-3/5 w-11/12 block mx-auto"  onChange={(e)=>setObs(e.target.value)} ></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={()=>{ mandar()}}>{loading?'a gravar...': 'Gravar'}</button>
                    <div className={`bg-gray-600${cor}bg-gray-600 px-4 py-3 text-sm `} role="alert" >{alerta}</div>
                </div>
                
                
            </div>
            
        </div>
    )
}

const Adicionar = () =>{
    return (
        <div>
            {
              salvar()  
            }
            
        </div>
    )
}

export default Adicionar