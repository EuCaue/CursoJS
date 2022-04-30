import GeraCPF from './modules/GeraCPF';
import './assets/sass/style.scss';


(function () {
  const gera = new GeraCPF()
  const cpfGerado = document.querySelector('.cpfGerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();