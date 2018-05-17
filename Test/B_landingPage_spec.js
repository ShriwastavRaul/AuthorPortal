describe("Landing Page Checks",function(){
var loginPage=require('../main/loginModulePageObject.js');

		

var newURL=browser.params.baseURL+'/?'+Math.random().toString(10).substring(2,4);
		

	

		beforeAll(function(){
			browser.get(newURL);

	browser.driver.manage().window().maximize();
 		loginPage.loginSuccessful(browser.params.user,browser.params.password);
		console.log('counter');

		});


		 	

		
 		
		
 	//browser.get("http://authorportal.packtpub.com/login");

 	 afterAll(function(){
         console.log('calling after all');
         browser.restart();
        
     });
 		
 	

	




	describe("Landing Page Checks",function(){





		
		


		var landingPage=require('../main/landingPageObject.js');
		var EC=protractor.ExpectedConditions;


		it("name above the photo check", function(){

			
			expect(landingPage.nameAbovePhoto()).toBe('Test Author');
			
		});
		it("new alert activities check", function(){

			
			
		
			expect(landingPage.newAlertAvailability()).toBe(true);
	
		});
		it("welcome message check", function(){

			
			
		
			expect(landingPage.welcomeMessageCheck()).toBe("welcome message");
	
		});

		it("other details visibility check", function(){

			expect(landingPage.otherDetailsVisibleCheck()).toBe(true);
	
		});

		it("left pan check", function(){
			var text1=landingPage.checkLeftPane();
			console.log(text1);

			expect(text1.get(0).getText()).toBe('Home');
			expect(text1.get(1).getText()).toBe('Contact Details');
			expect(text1.get(2).getText()).toBe('Projects')
			expect(text1.get(3).getText()).toBe('Logout');

		
	
		});

		it("left pan link check", function(){
			var text1=landingPage.checkLeftPane();
			console.log(text1.get(0).isEnabled());

			expect(text1.get(0).isEnabled()).toBe(true);
			expect(text1.get(1).isEnabled()).toBe(true);
			expect(text1.get(2).isEnabled()).toBe(true);
			expect(text1.get(3).isEnabled()).toBe(true);

		
	
		});

		it("left pan clcikability check", function(){
			expect(landingPage.checkLeftPaneClickabilityFirst()).toBe(true);
		
	
		});
		it("left pan clcikability check second", function(){
			expect(landingPage.checkLeftPaneClickabilitySecond()).toBe(true);
		
	
		});





	});

});