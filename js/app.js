let tiempo;
let intervaloDeTiempo;

const iniciarTempo = () => {
  tiempo = document.getElementById("tiempo").value;
  document.getElementById("contador").innerHTML = tiempo;
  intervaloDeTiempo = setInterval(() => {
    tiempo--;
    if (tiempo < 0) {
      clearInterval(intervaloDeTiempo);
      document.getElementById("contador").innerHTML = "Listo";
    } else {
      document.getElementById("contador").innerHTML = tiempo + " segundos";
    }
  }, 1000);
};

const pausarTempo = () => {
  clearInterval(intervaloDeTiempo);
};

const reiniciarTempo = () => {
  clearInterval(intervaloDeTiempo);
  document.getElementById("tiempo").value = "";
  document.getElementById("contador").innerHTML = "";
};

document.getElementById("btnIniciar").addEventListener("click", iniciarTempo);
document.getElementById("btnPausar").addEventListener("click", pausarTempo);
document.getElementById("btnReiniciar").addEventListener("click", reiniciarTempo);