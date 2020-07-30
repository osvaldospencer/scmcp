import React, { useEffect, useState } from 'react'
import Link from 'next/link'
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
const hoje = year+'-'+month+'-'+date
 newDate.setDate(newDate.getDate() + 1)
 const amanha = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate()
const fetchURL = `http://scmcp.pt/consultas/lerconsultas.php?tipo=dia&val=${ hoje }`;

const getItems = () => fetch(fetchURL).then(res => res.json());



function getC() {
    let num = 0
    const [dados, setDados] = useState();
    const [mostra, setMostra] = useState(false)
    const [id, setId] = useState('nada');
    
    
    useEffect(() => {
        getItems().then(data => setDados(data));
      }, []);
      return (
        <div className="flex flex-row text-center flex-wrap justify-center ">
          {
              
          dados && dados.length > 0
            ? dados.map(item => {
                num++
            return <div key={item.id}>
                    <div key={item.id} onClick={()=>{setMostra(!mostra); setId(`hoje${ item.id }`) }} className= { num % 2 == 0 ? 'bg-white p-2 m-1 rounded hover:bg-green-600 cursor-pointer' : 'bg-blue-100 p-2 m-1 rounded hover:bg-green-600 cursor-pointer'} >
                        
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
            : "Sem consultas para hoje"}
        </div>
      );
}

const fetchURL_ = `http://scmcp.pt/consultas/lerconsultas.php?tipo=dia&val=${ amanha }`;

const getItems_ = () => fetch(fetchURL_).then(res => res.json());

function getC_() {
    let num = 0
    const [dados, setDados] = useState();
    const [mostra, setMostra] = useState(false)
    const [id, setId] = useState('nada');
    useEffect(() => {
        getItems_().then(data => setDados(data));
      }, []);
      return (
        <div className="flex flex-row text-center flex-wrap justify-center ">
          {
              
          dados && dados.length > 0
            ? dados.map(item => {
                num++
            return <div>
                <div key={item.id} onClick={()=>{setMostra(!mostra); setId(`hoje${ item.id }`) }} className= { num % 2 == 0 ? 'bg-white p-2 m-1 rounded hover:bg-green-600  cursor-pointer' : 'bg-blue-100 p-2 m-1 rounded  hover:bg-green-600 cursor-pointer'} >
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
                
                </div>;
              })
            : "Sem consultas para amanhã"}
        </div>
      );
}

const Index = () =>{
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="p-2" >Bem-vindo ao gestor de consultas</h2>
            <div className="flex flex-col bg-gray-600 p-4 " >
                <div className="bg-gray-400 font-bold text-2xl" >Consultas para hoje</div>
                <div className="p-4" >
                    {
                        getC()
                    }
                </div>
                
                
            </div>
            <div className="flex flex-col bg-gray-600 p-4 " >
                <div className="bg-gray-400 font-bold text-2xl" >Consultas para amanhã</div>
                <div  className="p-4">
                    {
                        getC_()
                    }
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default Index