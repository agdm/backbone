requirejs.config({
	baseUrl: '../assets/js/libs',
	// except if module ID starts with key then load from value
	paths: {
		module: '../../../src/modules',
		helper: '../../../src/helper',
	}
});

require([
	'main'
],function(main) {
	// loads alert	
	main.initialize();
});
