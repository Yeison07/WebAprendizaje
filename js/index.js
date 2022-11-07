const redirect = (url) => {
    location.href = `${url}.html`
   
}

const verificarRespuesta = (id) => {
    if (parseInt(id[0]) === 1 && parseInt(id[1]) === 3) correcto()
    else  incorrecto()
    
}

const correcto = () => {
    document.getElementById("modal").hidden=false
}

const incorrecto = () => {
    console.log("no papa")
}








