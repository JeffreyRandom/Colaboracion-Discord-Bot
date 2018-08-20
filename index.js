const Discord = require('discord.js');
const configuracion = require('./configuracion.json');

const cliente = new Discord.Client();
const prefijo = configuracion.prefijo(); //Añadí configuracion.json

cliente.on("ready", async () => {
    console.log(`${cliente.user.username} está en linea en ${cliente.guilds.size} servidores!`);//Cambié online & server, por en linea & sevidor.
    cliente.user.setActivity(`?ayuda || en linea en ${cliente.guilds.size} servidores.`);
});

cliente.on("message", message => {

  if(message.author.bot) return;
  if(!message.content.startsWith(prefijo)) return;

  let comando = message.content.toLowerCase();

  if (comando == `${prefijo}ayuda`) {
    message.channel.send("¡Solicitud de ayuda recibida! Enviando ayuda...")
    let bicon = cliente.user.avatarURL;
    let embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/464810032081666048/469634532522590228/jeffreybot.png")
    .setColor('RANDOM')


    let embed2 = new Discord.RichEmbed()
    .setTitle("Comandos")
    .setColor("RANDOM")
    .setDescription("▸ ?pre: Te muestra el prefijo para los comandos actuales. \n▸ ayuda: Te muestra estos mensajes. \n▸ encuesta: Con este comando haces una encuesta donde los usuarios pueden reaccionar. \n▸ report: ¿Has visto una injusticia? ¡Usa este comando para reportar al pillo!\n▸ serverinfo: Te da la información del server donde se ejecute este comando.\n▸ botinfo: Te dice la información de este bot.\n▸ pregunta: Hazme una pregunta y te la respondo ;)\n▸ pesos: Te diré cuantos JeffreyPesos tienes, estas se ganan hablando en el chat.\n▸pagar: Le pagas JeffreyPesos a un usuario.")
    .setFooter("Si usas el comando de forma incorrecta, te diré la forma correcta de hacerlo después. ;)")
    .setThumbnail(bicon)

    let embed3 = new Discord.RichEmbed()
    .setTitle("Mod Comandos")
    .setColor('RANDOM')
    .setDescription("▸ ban: Baneas a un usuario. \n▸ kick: Sacas del server a un usuario :O \n▸ tempmute: Muteas a un usuario temporalmente.\n▸ warn: Le das un warn a un usuario.\n▸ infracciones: Puedes ver los warns que tiene un usuario.")
    .setFooter("Si usas el comando de forma incorrecta, te diré la forma correcta de hacerlo después. ;)")
    .setThumbnail(bicon)

    message.author.send(embed)
    .then(msg => {
        message.author.send(embed2)
    }).then(msg => {
        message.author.send(embed3);
    })
    return;
  }

  if (comando == `${prefijo}prefijo`) {
    let embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/464810032081666048/469643936638697492/prefijo.png")
    .setColor("#00ff00")

    let embed2 = new Discord.RichEmbed()
    .setTitle("Prefijo")
    .setColor("#ffffff")
    .setDescription(`▸ El prefijo predeterminado es **${prefijo}**.`)
    .setFooter("Recuerda no spamear comandos en los canales de texto, pueden ser molestos.")

    message.channel.send(embed)
    .then(msg => {
        return message.channel.send(embed2);
    });
  }

  if (comando == `${prefijo}ping`) {
    let start = Date.now(); message.reply('Pong! ').then(message => {
        let diff = (Date.now() - start);
        let API = (cliente.ping).toFixed(2)

            let embed = new Discord.RichEmbed()
            .setTitle(`🔔 Pong!`)
            .setColor(0xff2f2f)
            .addField("📶 Ping", `${diff}ms`)
            .addField("💻 API", `${API}ms`)
            message.edit(embed);
          });
  }

  if (comando == `${prefijo}ja`) {
    message.channel.send("CHINGUE SU MADRE")
  }

  if (comando == `${prefijo}gay`) {
    message.channel.send('yes sir');
  }

});

cliente.login(configuracion.token);
