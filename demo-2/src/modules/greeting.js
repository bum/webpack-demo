function sayHello(greeting) {
	var currentHour = new Date().getHours();
	var timeGreeting = 'Good morning!';

	if (currentHour >= 12 && currentHour <= 17) {
		timeGreeting = 'Good afternoon!';
	} else if (currentHour >= 17) {
		timeGreeting = 'Good evening!';
	}

	return timeGreeting + ' ' + greeting;
}

module.exports = {
	sayHello: sayHello
};