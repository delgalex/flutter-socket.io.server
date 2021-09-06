const { io } = require('../index');
// emensajes de sockets
io.on('connection', client => {

    console.log('Cliente conectado');
// on es para escuchar  el evento descrito ejemplo: disconect o mensaje

    client.on('disconnect', () => { 
        console.log('cliente desconectado'); 
    });
 // payload recibe los valores 
    client.on('mensaje', ( payload )=>{ 
        console.log('Mensaje!!!', payload );
// emit emite un mensaje 
        io.emit( 'mensaje', {admin: 'NuevoMensaje'} )
    });

});