localStorage.setItem('information', JSON.stringify({
	name: 'Yiran Zhang',
	email: 'yiranzhang.00@gmail.com',
	CurrentCity: 'San Francisco',
	Zipcode: '94112'

}));

var information = JSON.parse(localStorage.getItem('information'));