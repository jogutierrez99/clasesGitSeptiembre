const mongoose = require('mongoose');
const Event = require('./src/api/models/sport.model'); // Asegúrate de que la ruta sea correcta

// Array de eventos de ejemplo
const events = [
    { 
      name: 'Cardio Workout', 
      description: 'Intense cardio session', 
      date: new Date('2025-02-15T09:00:00'), 
      location: 'room-1', 
      type: 'cardio',
      image: 'https://media.istockphoto.com/id/1132086660/es/foto/vista-lateral-de-la-mujer-musculosa-hermosa-corriendo-en-la-cinta.jpg?s=2048x2048&w=is&k=20&c=z1_BhvUra_KbApMhNjlj5Q0pvuhWvDFk0END3Sg861g=' // Imagen para Cardio
    },
    { 
      name: 'Yoga Class', 
      description: 'Relaxing yoga session', 
      date: new Date('2025-02-16T10:00:00'), 
      location: 'room-2', 
      type: 'flexibility', 
      image: 'https://media.istockphoto.com/id/1867464627/es/foto/group-of-women-at-yoga-class.jpg?s=1024x1024&w=is&k=20&c=7SLHpxQFa2EPlhKMdycrgCHQb1_yEXbkgRX5mrnzwf4=' // Imagen para Yoga
    },
    { 
      name: 'Strength Training', 
      description: 'Heavy weightlifting session', 
      date: new Date('2025-02-17T11:00:00'), 
      location: 'room-3', 
      type: 'force', 
      image: 'https://media.istockphoto.com/id/1444718645/es/foto/weighlifter.jpg?s=1024x1024&w=is&k=20&c=XGatGbpd9uQe5rOBSIqNaeguDuB8heTlilhikSEJIeM=' // Imagen para Fuerza
    },
    { 
      name: 'Pilates', 
      description: 'Core strength exercises', 
      date: new Date('2025-02-18T12:00:00'), 
      location: 'room-1', 
      type: 'flexibility', 
      image: 'https://media.istockphoto.com/id/1483989758/es/foto/diversos-participantes-de-la-clase-de-yoga-haciendo-una-tabla-lateral-en-sus-colchonetas-de.jpg?s=1024x1024&w=is&k=20&c=YM6HzI21Gpgx9QrQv6iuAZIAn5aKJGUGEc3ZjlKN2oM=' // Imagen para Pilates
    },
    { 
      name: 'HIIT', 
      description: 'High intensity interval training', 
      date: new Date('2025-02-19T07:30:00'), 
      location: 'room-2', 
      type: 'cardio', 
      image: 'https://media.istockphoto.com/id/1347836418/es/foto/foto-de-un-apuesto-hombre-maduro-de-pie-y-usando-cuerdas-de-batalla-en-el-gimnasio-durante-su.jpg?s=1024x1024&w=is&k=20&c=lP2n__axr6-XoqjYIgU01u0RQ8Oz4alL_FvtfgVfmYg=' // Imagen para HIIT
    },
    { 
      name: 'Zumba', 
      description: 'Dance fitness workout', 
      date: new Date('2025-02-20T08:00:00'), 
      location: 'room-3', 
      type: 'cardio', 
      image: 'https://media.istockphoto.com/id/1067011906/es/foto/fitness-danza.jpg?s=1024x1024&w=is&k=20&c=UzYsC2I3yzXBESxKgswsS1woIuIcL0pnPwWIoZxxiP0=' // Imagen para Zumba
    },
    { 
      name: 'Spin Class', 
      description: 'Indoor cycling session', 
      date: new Date('2025-02-21T09:00:00'), 
      location: 'room-1', 
      type: 'cardio', 
      image: 'https://media.istockphoto.com/id/918931148/es/foto/ajuste-personas-trabajando-en-clase-en-el-gimnasio-de-spinning.jpg?s=1024x1024&w=is&k=20&c=9P2wBtBYrt0dOH-6s9D9bF8I41kIviqrdVfx_7CjzMw=' // Imagen para Spin
    },
    { 
      name: 'Stretching', 
      description: 'Flexibility and stretching exercises', 
      date: new Date('2025-02-22T10:00:00'), 
      location: 'room-2', 
      type: 'flexibility', 
      image: 'https://media.istockphoto.com/id/609926926/es/foto/estirarse-fuera.jpg?s=1024x1024&w=is&k=20&c=chimCU4TE6R0O9UxYT8aZeOM9fNDFl_yewAGj3HPryk=' // Imagen para Stretching
    }
  ];
  

// Conectar a MongoDB
mongoose.connect('mongodb+srv://cristian:123456Aa*@cluster0.ikfe5.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');

    // Insertar eventos
    Event.insertMany(events)
      .then((result) => {
        console.log('Eventos insertados:', result);
        mongoose.disconnect();
      })
      .catch((error) => {
        console.error('Error al insertar los eventos:', error);
        mongoose.disconnect();
      });
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });
