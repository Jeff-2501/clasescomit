const usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
};


// verificar autenticación del usuario

if (username.name === "batman" && usuario.password === "Alfred1960KPO!") {
    console.log("Datos del usuario:");
    console.log(`Username: ${usuario.username}`);
    console.log(`Password: ${usuario.password}`)
} else {
    console.error("Usuario no autenticado");
}

