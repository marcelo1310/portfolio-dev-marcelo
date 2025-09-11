import {Header} from './Sections/Header.js';
import { Hero } from './Sections/Hero.js';
import { Sobre } from './Sections/Sobre.js';
import { Habilidades } from './Sections/Habilidades.js';
import { Projetos } from './Sections/Projetos.js';
import { Contato } from './Sections/Contato.js';
import { Footer } from './Sections/Footer.js';

const app = document.querySelector('#app');

app.appendChild(Header());
app.appendChild(Hero());
app.appendChild(Sobre());
app.appendChild(Habilidades()); 
app.appendChild(Projetos());
app.appendChild(Contato());
app.appendChild(Footer());