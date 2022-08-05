function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value < 1 || num.value > 100){
        window.alert('Por favor digite um número!')
    }else {
        let n = []
        n.push.Number(num.value) 
        document.getElementById('seltab').innerText = "oi"
        }
    }
