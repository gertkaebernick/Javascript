function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crh.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jvh.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adh.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idh.jpg')
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crm.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jvm.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adm.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idm.jpg')
            }
        } else if (fsex[2].checked){
        genero = `Não Binario`
        img.setAttribute('src', 'nb.jpg')
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)

    }
}