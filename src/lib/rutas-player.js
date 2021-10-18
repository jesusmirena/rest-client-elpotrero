// **-- TODAS LAS RUTAS TRAEN LA INFORMACIÓN EN ESTE FORMATO:
[
	{
		id: 7,
		name: 'Yoko Estes',
		userName: 'Yoko',
		gender: 'FEMALE',
		birthday: '21/03/1977',
		cellphone: -1123420219,
		mail: 'felis.ullamcorper@laciniased.ca',
		position: 'MIDFIELDER',
		qualification: 28,
		votes: 7,
		punctuation: 4,
		available: true,
		image:
			'http://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/06/10/15601767026611.jpg'
	}
];

// **-- ruta: localhost:3001/player
// Trae "todos los players" (ordenados por id)

// **-- ruta: localhost:3001/player?order=ascendent (ascendent | descendent)
// Trae "todos los players" ordenados por nombre

// **-- ruta: localhost:3001/player/byid/:id (donde id es un número)
// Trae "player" cuyo "id" es el pasado por "params"

// **-- ruta: localhost:3001/player/byname/:name (donde name es el string de búsqueda)
// Trae "players" cuyo "string de búsqueda" está incluído en su nombre
// **-- ruta: localhost:3001/player/byname?order=ascendent
// Trae "players" encontrados en orden alfabético ascendente
// **-- ruta: localhost:3001/player/byname?order=descendent
// Trae "players" encontrados en orden alfabético descendente

// **-- ruta: localhost:3001/player/available
// Trae "players" que están disponibles para jugar (available === "true")
// **-- ruta: localhost:3001/player/available?order=ascendent
// Trae "players" disponibles en orden alfabético ascendente
// **-- ruta: localhost:3001/player/available?order=descendent
// Trae "players" disponibles en orden alfabético descendente

// **-- ruta: localhost:3001/player/female
// Trae "players" gender === FEMALE
// **-- ruta: localhost:3001/player/female?order=ascendent
// Trae "players" gender === FEMALE en orden alfabético ascendente
// **-- ruta: localhost:3001/player/female?order=descendent
// Trae "players" gender === FEMALE en orden alfabético descendente

// **-- ruta: localhost:3001/player/male
// Trae "players" de gender === MALE
// **-- ruta: localhost:3001/player/female?order=ascendent
// Trae "players" gender === MALE en orden alfabético ascendente
// **-- ruta: localhost:3001/player/female?order=descendent
// Trae "players" gender === MALE en orden alfabético descendente

// **-- ruta: localhost:3001/player/undefined
// Trae "players" de gender === UNDEFINED
// **-- ruta: localhost:3001/player/female?order=ascendent
// Trae "players" gender === UNDEFINED en orden alfabético ascendente
// **-- ruta: localhost:3001/player/female?order=descendent
// Trae "players" gender === UNDEFINED en orden alfabético descendente

// **-- ruta: localhost:3001/player/punctuation/ascendent
// Trae "players" ordenados por puntuación ascendente (1 a 5)

// **-- ruta: localhost:3001/player/punctuation/descendent
// Trae "players" ordenados por puntuación descendente (5 a 1)

// **-- ruta: localhost:3001/player/punctuation/:numero (1, 2, 3, 4 ó 5)
// Trae "players" con la puntuación pasada por parámetro (1, 2, 3, 4 ó 5)

// **-- ruta: localhost:3001/player/position/:position
// pudiendo ser position -> goalkeeper | defender | midfielder | attacker
// Trae "players" con la posición pasada por parámetro
// **-- ruta: localhost:3001/player/position/:position?order=ascendent
// Trae "players" con la posición pasada por parámetro en orden alfabético ascendente
// **-- ruta: localhost:3001/player/position/:position?order=descendent
// Trae "players" con la posición pasada por parámetro en orden alfabético descendente
