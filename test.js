// Supondo que "myDisc" seja a instância do meu disco
setInterval(() => {
    if (typeof myDisc !== 'undefined' && myDisc.state === myDisc.STATE_MOVING) {
        myDisc.setScore(99999999); // Pontos infinitos!
    }
}, 50);
