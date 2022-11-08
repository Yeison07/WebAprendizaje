

const redirect = (url) => {
    location.href = `${url}.html`

   
}

const verificarRespuesta = (id) => {
    console.log(id)
    if (parseInt(id[0]) === 1 && parseInt(id[1]) === 1 ) {
        correcto()
    }
    else if (parseInt(id[0]) === 2 && parseInt(id[1]) === 2 ) {
        correcto()
    }
    else if (parseInt(id[0]) === 3 && parseInt(id[1]) === 1 ) {
        correcto()
    }
    else if (parseInt(id[0]) === 4 && parseInt(id[1]) === 2 ) {
        correcto()
    }
    else if (parseInt(id[0]) === 5 && parseInt(id[1]) === 4 ) {
        correcto()
    }
    else if (parseInt(id[0]) === 6 && parseInt(id[1]) === 2 ) {
        correcto()
    }
    else if (parseInt(id[0]) === 7 && parseInt(id[1]) === 1 ) {
        correcto()
    }
    else if (parseInt(id[0]) === 8 && parseInt(id[1]) === 2 ) {
        correcto()
    }
    else  incorrecto()
    
}

const correcto = () => {
    document.getElementById("modal").classList.add("modal")
    document.getElementById("modal").hidden=false
}

const incorrecto = () => {
    document.getElementById("modal").classList.add("modal")
    document.getElementById("texto").innerText="Incorrecto";
    document.getElementById("modal").hidden=false
}

const sigPreg=(id)=>{
    console.log(typeof(id))
    switch (id) {
        case (1):
            redirect("tildeSegundaPregunta")
            break;
        case (2):
            redirect("homoSegundaPregunta")
            break;
        case (3):
            redirect("sinoSegundaPregunta")
            break;
        case (4):
            redirect("antoSegundaPregunta")
            break;
        default:
            redirect("index")
            break;
    }

    
}






