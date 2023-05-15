import { 
    RiLayout3Fill,
    RiShoppingCartFill,
    RiFileTextFill,
    RiTodoFill,
    RiLoginBoxFill
 } from "react-icons/ri";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <RiLayout3Fill />
	},
	{
		key: 'productos',
		label: 'Productos',
		path: '/productos',
		icon: <RiShoppingCartFill />
	},
	{
		key: 'detalles',
		label: 'Detalles',
		path: '/detalles',
		icon: <RiFileTextFill />
	},
	{
		key: 'categorías',
		label: 'Categorías',
		path: '/categorias',
		icon: <RiTodoFill />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'logout',
		label: 'Cerrar sesión',
		path: '/logout',
		icon: <RiLoginBoxFill />
	}
]