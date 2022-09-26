import { useState } from "react"

const RetoADSO1 = () => {

  const [form, setform] = useState({
    nom: '',
    pass:'',
    capt: '',
  })
  const {nom, pass, capt } = form;

  
  const Submit = (e) => {
    e.preventDefault();
    
    if(nom === '1115' && pass === '5111' && capt === '6'){
      alert("Sesion Iniciada")
    }else{
      alert("Incorrecto")
    }
  }



  return (
    <>
    <h1 className='title'>Bienvenido al Sistema de Ubicacion para Zonas Públicas WIFI</h1>
   
      <fieldset>
        <legend>INGRESO</legend>
      <form onSubmit={ Submit }>
     <div className='ingreso'>
    
        <label>Nombre de Usuario: </label>
        <input type="number" name='nom' value={form.nom} onChange={(e) => {setform({...form, nom: e.target.value})}}></input>
        
      </div>

      <div className='ingreso'>
        <label>Contraseña: </label>
        <input type="password" name='pass' value={form.pass} onChange={(e) => {setform({...form, pass: e.target.value})}}></input>
      </div>

      <div className='ingreso'>
        <label>Sume el Primer y Ultimo Dato del Nombre de Usuario: </label>
        <input type="number" name='capt' value={form.capt} onChange={(e) => {setform({...form, capt: e.target.value})}}></input>
      </div>
  
      <button>LOGIN</button>
      </form>
       
      </fieldset>
</>
  )
}

export default RetoADSO1