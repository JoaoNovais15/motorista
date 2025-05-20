//function notifyClick(appName) {
//    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//      to_email: "joaonovais15@hotmail.com",
//      from_email: "joaonovais1547@gmail.com",
//      message: `Alguém clicou no botão da ${appName}!`
//    }).then(
//      () => console.log("E-mail enviado!"),
//      (error) => console.error("Erro ao enviar e-mail:", error)
//    );
 // }

 function notifyClick(appName) {
  emailjs.send("joaonovais1547", "template_mp1ayeh", {
    app_name: appName,
    to_email: "joaonovais15@hotmail.com",
    date: new Date().toLocaleString(),
     message: `Alguém clicou no botão da ${appName}!`
  }).then(
    () => console.log("E-mail enviado!"),
    (error) => console.error("Erro ao enviar e-mail:", error)
  );
}