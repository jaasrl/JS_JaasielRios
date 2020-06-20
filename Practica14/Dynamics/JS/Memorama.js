//Definir nuestras variables
let arrTablero = [];
let cartasMost = 0;
let valCarta1 = undefined;
let valCarta2 = undefined;
let paresRest = undefined;
let paresEnc = undefined;
let vidas = undefined;

//Definir la funcion que busca las cookies
function buscarCookie(nombre) {
    let regreso = undefined;
    let cookies = document.cookie;
    let arrCookies = cookies.split("; ");
    let arrCookies2 = [];
    for (let i = 0; i < arrCookies.length; i++) {
        arrCookies2.push(arrCookies[i].split("=")[0]);
        arrCookies2.push(arrCookies[i].split("=")[1]);
    }
    let indice = arrCookies2.indexOf(nombre);
    if (indice == -1) {
        regreso = null;
    } else {
        regreso = arrCookies2[indice + 1]
    }
    return regreso;
}
//Definir la funcion que validara las cartas
function validarCartas() {
    let regreso = undefined;
    if (valCarta1 == valCarta2) {
        regreso = true;
    } else {
        regreso = false;
    }
    return regreso;
}
//Definir la funcion para poder voltear la carta
function voltearCarta(card) {
    $(card).data("Volteada", true);
    $(card).css("transform", "rotateY(180deg)");
    $(card).addClass("alzada");
    $($($(card).children()[1]).children()[0]).css("transform", "rotateY(0deg)")
}
//Definir la funcion para poder modificar lacabecera
function cambiarCabecera() {
    $("#nuevoJuego").css("box-shadow", "3px 3px #571845");
    $("#nuevoJuego").css("margin", "0");
    $("#title").text(`Memorama`);
    $("#cartasEnc").text(`Pares encontrados: ${paresEnc}`);
    $("#vidas").text(`Vidas restantes: ${vidas}`);
    $("#cartasRes").text(`Pares restantes: ${paresRest}`);
}
//Definir la funcion para poder crear las fichas que va atener el juego
function crearFichas(card) {
    card.addClass("carta");
    card.data("Volteada", false);
    card.html('<div class="fichadelante"><img src="../Statics/Media/Img/Enp6.png"></div><div class="fichaatras"></div>');
}
//Definir la funcion para terminar el juego
function endGame() {
    if (paresRest == 0) {
        let score = $("<h3>");
        score.text("Su puntuación es: " + (parseInt(vidas) * 20) + (parseInt(paresEnc) * 10));
        setTimeout(() => {
            $("#tablero").remove();
            $("#end").css("display", "block");
            $($("#end").children()[0]).text("Felicidades! Has ganado!");
            $("#end").append(score);
            borrarCookies();
        }, 1000)
    } else if (vidas == 0) {
        let score = $("<h3>");
        score.text("Su puntuación es: " + (vidas * 20) + (paresEnc * 10));
        setTimeout(() => {
            $("#tablero").remove();
            $("#end").css("display", "block");
            $($("#end").children()[0]).text("Fallaste");
            $("#end").append(score);
            borrarCookies();
        }, 1000)
    }
}
//Definir funcion para borrar las cookies cuando se acabe el juego
function borrarCookies() {
    let time = new Date();
    time.setTime(time.getTime() - 1)
    document.cookie = "arrTablero=0;expires=" + time.toGMTString();
    document.cookie = "vidas=0;expires=" + time.toGMTString();
    document.cookie = "paresEnc=0;expires=" + time.toGMTString();
    document.cookie = "paresRest=0;expires=" + time.toGMTString();
}
//Definir la funcion para generar el tablero
function generarTablero() {
    for (let i = 0; i < 30; i++) {
        arrTablero[i] = undefined;
    }
    for (let i = 0; i < 15; i++) {
        for (let k = 0; k < 2; k++) {
            let explorarIndice = 0;
            let validar = 0;
            while (validar < 1) {
                let indice = Math.floor(Math.random() * 30);
                if (arrTablero[indice] == undefined) {
                    validar++;
                    arrTablero[indice] = i;
                }
            }
        }
    }
}
//Declarar la funcion para que se pueda ver el tablero
function mostrarTablero() {
    for (let i = 0; i < 30; i++) {
        if (arrTablero[i] != "") {
            $($("#tablero").children()[i]).data("noCarta", arrTablero[i]);
            let img = new Image();
            if ($($("#tablero").children()[i]).data("noCarta") == 0) {
                img.src = "../Statics/Media/Img/mdb.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 1) {
                img.src = "../Statics/Media/Img/visual.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 2) {
                img.src = "../Statics/Media/Img/atom.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 3) {
                img.src = "../Statics/Media/Img/bootstrap.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 4) {
                img.src = "../Statics/Media/Img/c.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 5) {
                img.src = "../Statics/Media/Img/css.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 6) {
                img.src = "../Statics/Media/Img/html.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 7) {
                img.src = "../Statics/Media/Img/java.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 8) {
                img.src = "../Statics/Media/Img/js.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 9) {
                img.src = "../Statics/Media/Img/jquery.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 10) {
                img.src = "../Statics/Media/Img/ubuntu.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 11) {
                img.src = "../Statics/Media/Img/mysql.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 12) {
                img.src = "../Statics/Media/Img/php.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 13) {
                img.src = "../Statics/Media/Img/ajax.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            if ($($("#tablero").children()[i]).data("noCarta") == 14) {
                img.src = "../Statics/Media/Img/windows.png";
                $($($("#tablero").children()[i]).children()[1]).html(img);
            }
            $($("#tablero").children()[i]).css("visibility", "visible");
        } else {
            $($("#tablero").children()[i]).css("visibility", "hidden");
        }
    }
}
//Declarar funcion para poner las fichas aleatoriamente
function generarFichas() {
    for (let i = 0; i < 30; i++) {
        let carta = $("<div>");
        crearFichas(carta);
        carta.click(() => {
            if ($(carta).data("noCarta") != undefined && cartasMost < 2 && $(carta).data("Volteada") == false) {
                cartasMost++;
                if (cartasMost == 1) {
                    valCarta1 = $(carta).data("noCarta");
                    voltearCarta(carta);
                } else {
                    valCarta2 = $(carta).data("noCarta");
                    voltearCarta(carta);
                    let valCartas = validarCartas();
                    if (valCartas == true) {
                        paresEnc++;
                        document.cookie = "paresEnc=" + paresEnc;
                        paresRest--;
                        document.cookie = "paresRest=" + paresRest;
                        $($("#tablero").children()).each((ind, elem) => {
                            if ($(elem).data("noCarta") == valCarta1) {
                                $(elem).removeData("noCarta");
                                setTimeout(() => {
                                    $(elem).css("visibility", "hidden");
                                }, 1000);
                            }
                        })
                        for (let i = 0; i < 30; i++) {
                            if (arrTablero[i] == valCarta1) {
                                arrTablero[i] = undefined;
                            }
                        }
                        document.cookie = "arrTablero=" + arrTablero;
                    } else {
                        vidas--;
                        document.cookie = "vidas=" + vidas;
                    }
                    cambiarCabecera();
                    endGame();
                    setTimeout(() => {
                        cartasMost = 0;
                        valCarta1 = undefined;
                        valCarta2 = undefined;
                        $($("#tablero").children()).css("transform", "rotateY(0deg)");
                        $($("#tablero").children()).removeClass("alzada");
                        $($("#tablero").children()).data("Volteada", false);
                        $($($($("#tablero").children()).children()[1]).children()).css("transform", "rotateY(180deg)")
                    }, 1000);
                }
            }
        })
        $("#tablero").append(carta);
    }
}
//Declarar la funcion para generar el juego
function nuevoJuego() {
    $("#end").css("display", "none");
    arrTablero = buscarCookie("arrTablero");
    arrTablero = arrTablero.split(",");
    paresRest = buscarCookie("paresRest");
    paresEnc = buscarCookie("paresEnc");
    vidas = buscarCookie("vidas");
    cartasMost = 0;
    valCarta1 = undefined;
    valCarta2 = undefined;
    $($("#tablero").children()).css("transform", "rotateY(0deg)");
    $($("#tablero").children()).removeClass("alzada");
    $($("#tablero").children()).data("Volteada", false);
    $($($($("#tablero").children()).children()[1]).children()).css("transform", "rotateY(180deg)")
}
//Si la funcion buscar cookies es nula hara el if
if (buscarCookie("arrTablero") == null) {
    generarTablero();
    document.cookie = "arrTablero=" + arrTablero;
    document.cookie = "paresRest=15";
    document.cookie = "paresEnc=0";
    document.cookie = "vidas=10";
}
//Para declarar un nuevo juego
$("#nuevoJuego").click((e) => {
    e.preventDefault();
    $("#nuevoJuego").css("box-shadow", "0px 0px");
    $("#nuevoJuego").css("margin-top", "3px");
    $("#nuevoJuego").css("margin-left", "3px");
    setTimeout(() => {
        $("#tablero").html("");
        generarTablero();
        console.log(arrTablero);
        document.cookie = "arrTablero=" + arrTablero;
        document.cookie = "paresRest=15";
        document.cookie = "paresEnc=0";
        document.cookie = "vidas=10";
        nuevoJuego();
        generarFichas();
        mostrarTablero();
        cambiarCabecera();
    }, 1000)

})
//mandar a llamar las funciones
nuevoJuego();
generarFichas();
mostrarTablero();
cambiarCabecera();
