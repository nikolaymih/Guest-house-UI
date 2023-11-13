export const navBarItemsProps = [
	{
		type: 'link',
		name: 'НАЧАЛО',
		path: '/',
		iconName: 'fa-solid fa-house'
	},
	{
		type: 'dropdown',
		dropdownLinks: [
			{
				name: 'ЦЕНИ',
				path: '/accommodation'
			},
			{
				name: 'ПОЛИТИКА НА КЪЩАТА',
				path: '/rules'
			},
			{
				name: 'ЗАЩИТА НА ЛИЧНИТЕ ДАННИ',
				path: '/personal-data'
			},
		],
		name: 'НАСТАНЯВАНЕ',
		path: '/house',
		iconName: 'fa-solid fa-people-roof'
	},
	{
		type: 'link',
		name: 'ГАЛЕРИЯ',
		path: '/gallery',
		iconName: 'fa-solid fa-images'
	},
	{
		type: 'link',
		name: 'ЗАБЕЛЕЖИТЕЛНОСТИ',
		path: '/landmarks',
		iconName: 'fa-solid fa-monument'
	},
	{
		type: 'link',
		name: 'РЕЗЕРВАЦИЯ',
		path: '/reservation',
		iconName: 'fa-solid fa-calendar-check'
	},
	{
		type: 'link',
		name: 'КОНТАКТИ',
		path: '/contacts',
		iconName: 'fa-solid fa-phone'
	},
];

export const galleryImageLinks = [
	{
		type: 'link',
		name: 'ГРАДИНА',
		path: 'garden/',
		iconName: 'fa-solid fa-house'
	},
	{
		type: 'link',
		name: 'МЕХАНА',
		path: 'tavern/',
		iconName: 'fa-solid fa-utensils'
	},
	{
		type: 'link',
		name: 'СПА',
		path: 'spa/',
		iconName: 'fa-solid fa-images'
	},
	{
		type: 'link',
		name: 'ИНТЕРИОР',
		path: 'rooms/',
		iconName: 'fa-solid fa-bed'
	},
];