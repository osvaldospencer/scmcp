import fetch from 'isomorphic-fetch'

export const getConsultas = () =>{
    return fetch('http://scmcp.pt/consultas/lerconsultas.php?tipo=all&val=0').then(res => res.json());
}

export const getConsultasDia = (dia) =>{
    return fetch(`http://scmcp.pt/consultas/lerconsultas.php?tipo=dia&val=${dia}`)
}

export const getConsultasUtente = (utente) =>{
    return fetch(`http://scmcp.pt/consultas/lerconsultas.php?tipo=utente&val=${utente}`)
}