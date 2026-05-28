
const joseG = {
    header: {
        logoPersonal: "./assets/img/logo.png",
        menu: ["home", "skills", "projects"],
        botonContacto: {
            texto: "concact",
            icono: "➔"
        },
        botonTema: "botonClaro"
    },
    nombre: "Jose Guadalupe",
    "rol principal": "Frontend Developer",
    imagenPrincipal: "./assets/img/perfil_programador.png",
    botonPrincipal: "MY PROJECTS",

    opinionesClientes: {
        titulo: "Client Review from Tabasco",
        texto: "Working with Jose was an incredible experience. He understood perfectly what we needed and gave it that professional touch we were looking for.",
    },
    experiencias: {
        nivelFronted: 90,
        nivelBackend: 75,
        nivelTailwinds: 50,
        nivelSql: 95
    },
    quienSoy:{
        titulo: "WHO AM I ?",
        parrafos: [
        "I am a System Engineer and Frontend Developer focused on creating modern web interfaces. I specialize in HTML5, CSS3, and Tailwind CSS to build responsive and high-performance digital experiences.",
        "Programming is my passion. I merge my engineering background with web development to transform complex logic into clean, efficient code and intuitive user designs.",
        "I am a constant learner dedicated to professional innovation, always exploring new technologies to stay at the forefront of the industry."
    ],
    imagenesQuienSoy: [ 
        "./assets/img/foto1.jpg",
        "./assets/img/foto2.jpg",
        "./assets/img/foto3.jpg"
    ],
    botonProjectos: "SHOW MY PROJECTS"
    },
    mishabilidades:["html", "css", "javascript", "react", "tailwindcss", "mongoDB", "mySql",],
    añosExperiencia: 4,
    botonDescargaCv: "DOWNLOAD MY CV",
    habilidadesExtras: ["ionic", "bootstrap", "xampp", "power app", "power automate", "node",],

    obras:{
        titulo: " The works closest to my heart" ,
        botonObras: "SHOW MY PROJECTS",
        imagenesObras: [
            "./assets/img/auxiliar.png",
            "./assets/img/image.png",
            "./assets/img/profe.png"
        ]
    },
    formulario: {
        titulo: "let's have a chat",
        placeholder: {
            nombre: "YOUR NAME",
            correo: "EMAIL ADDRESS",
            mensaje: "CHAT HERE"
        },
        botonEnviar: "SUBMIT HERE",
    },
    piePagina: {
        copyright: "© 2026 Derechos Reservados",
        recursos: {
            titulo: "RECURSOS",
            enlace: "Formación de Valores"
        },
    redesSociales: [
            { nombre: "Facebook", url: "https://www.facebook.com/share/1CbZY5U4SS/" },
            { nombre: "LinkedIn", url: "https://www.linkedin.com/in/tu-perfil/" }
        ]
    }
}


console.log(joseG.piePagina.redesSociales[0].nombre);
console.log(joseG.header.menu[1]);






// const joseG = {
//     nombre: "jose Guadalupe",
//     opinionesCliente: "Working with Jose was an incredible experience. He understood perfectly what we needed and gave it that professional touch we were looking for",
//     nivelFronted: 90,
//     nivelBackend: 75,
//     nivelTailwindcss: 50,
//     nivelSql: 95,
//     quienSoy: "I am a System Engineer and Frontend Developer focused on creating modern web interfaces. I specialize in HTML5, CSS3, and TailwindCSS to build responsive and high-performance digital experiences. Programming is my passion. I merge my engineering background with web development to transform complex logic into clean, efficient code and intuitive user designs. I am a constant learner dedicated to professional innovation, always exploring new technologies to stay at the forefront of the industry.",
//     habilidades: ["html", "css", "javascripts", "react", "tailwindcss", "mongoDB", "Django", "MySQL"],
//     habilidadesExtras: ["ionic", "bootstrap", "xampp", "powerApp", "power Automate", "node"],
//     // obras:
//     // formulario: 
//     // piePagina: 

//     imagenPortafolio1: "./assets/img/logo.png", 
//     imagenPortafolio2: "./assets/img/perfil_programador.png", 
//     imagenPortafolio3: "./assets/img/foto1.jpg", 
//     imagenPortafolio4: "./assets/img/foto2.jpg", 
//     imagenPortafolio5: "./assets/img/foto3.jpg", 
//     imagenPortafolio6: "./assets/img/auxiliar.png", 
//     imagenPortafolio7: "./assets/img/image.png" , 
//     imagenPortafolio: "./assets/img/profe.png" , 
// }