function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('foto-manha');
    let data = new Date();
    let hora = data.getHours();
    //let hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#e2cd9f'  
    } else if (hora >= 12 && hora <= 18){
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b9846f'  
    } else {
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#515154'  
    }
}