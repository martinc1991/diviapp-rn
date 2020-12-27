// Enlaces del Menu Lateral

// En un array de secciones que adentro tienen dos propiedades: 'title' que es el titulo de cada seccion y un array 'links' donde que contiene los objetos de los enlaces

// Cada enlace tiene a su vez tres propiedades:
//      label       ------>       Lo que va a decir en el menu lateral
//      icon      ------->        Nombre del icono, ver el enlace (https://ionicons.com/v4/cheatsheet.html)
//      screen      ----->        Nombre de la screen a la que tiene que redirigir (propiedad 'name' de cada screen en app.js)

// NO HACE FALTA MODIFICAR EL ARCHIVO CustomDrawerContent.js

const SideBarLinks = [
	{
		sectionTitle: 'Calculos',
		links: [
			{
				label: 'Inicio',
				icon: 'ios-home',
				screen: 'Home',
			},
			{
				label: 'Calculo Basico',
				icon: 'ios-home',
				screen: 'BasicCalculation',
			},
			{
				label: 'Modo Vacaciones',
				icon: 'ios-home',
				screen: '',
			},
		],
	},

	{
		sectionTitle: 'Acerca',
		links: [
			{
				label: 'Acerca',
				icon: 'ios-home',
				screen: 'About',
			},
		],
	},
];

export default SideBarLinks;
