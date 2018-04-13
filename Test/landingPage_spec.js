describe("Author Portal Module",function(){

	var loginPage=require('../main/loginModulePageObject.js');
	beforeEach(function() {
		
 	//browser.get("http://authorportal.packtpub.com/login");
 		browser.get(browser.params.baseURL);
 		browser.driver.manage().window().maximize();
 		loginPage.loginSuccessful(browser.params.user,browser.params.password);
 	});

	describe("Landing Page Checks",function(){

		var landingPage=require('../main/landingPageObject.js');
		var EC=protractor.ExpectedConditions;
		it("name above the photo check", function(){

			
			expect(landingPage.nameAbovePhoto()).toBe('Test Author');



			
		});

	});

});