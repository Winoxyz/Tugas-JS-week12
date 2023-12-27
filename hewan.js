function hewan (){
    let animal = document.getElementById("animal").value
    let foto = document.getElementById("foto")

    if (animal == "srigala"){
        foto.setAttribute("src", "fotohewan/srigala.jpeg")
    }else if (animal == "ular"){
        foto.setAttribute("src", "fotohewan/ular.jpeg")
    }else if (animal == "hiu"){
        foto.setAttribute("src", "fotohewan/hiu.jpeg")
    }else if (animal == "komodo"){
        foto.setAttribute("src", "fotohewan/komodo.jpeg")
    }else if (animal == "kadal"){
        foto.setAttribute("src", "fotohewan/kadal.jpeg")
    } else {
        alert("Tidak memilih gambar")
    }
}