describe("test zoo site field on the home page", function(){
	beofreEach(function(){
		browser.get("http://www.thetestroom.com/jswebapp");

	})
	xit("to test input field and check text outputs", function(){
		

		element(by.model("person.name")).sendKeys("I will subscribe to this channel");
		element(by.binding("person.name")).getText().then(function(text) {
			console.log(text);
		})

	});

	var home_page=require('../pageObject/homePage.js');

	it('should be able to adopt animal by page objects', function(){
		home_page.enterFieldValue('you will subscribe');
		var getHomePageText=home_page.getDynamicText();
		expect(getHomePageText).toBe('you will subscribe');
		home_page.clickContinue();

	})
});