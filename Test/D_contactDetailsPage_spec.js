describe("Contact Details Check",function(){
	var loginPage=require('../main/loginModulePageObject.js');
	var contactDetails=require('../main/contactDetailsPageObject.js');


	var newURL=browser.params.baseURL+'/?'+Math.random().toString(10).substring(2,4);

	beforeAll(function(){
			browser.get(newURL);

	browser.driver.manage().window().maximize();
 	loginPage.loginSuccessful(browser.params.user,browser.params.password);
 	contactDetails.navigateToDetailsPage();

		});

		

	

 	 afterAll(function(done){
         console.log('calling after all');
         browser.quit();
        
     });

 	describe("Contact Details Page entered", function(){


 		it('Already Present Details Check',function(){
 			console.log('here');
 		
 			var alreadyPresentValues=contactDetails.presentDetailsCheck();
 			console.log('there');
 			expect(alreadyPresentValues[0]).toBe('Mr.');
 			expect(alreadyPresentValues[1]).toBe('Test');

 		});

 		it('tab check ',function(){
 			var tabNames =contactDetails.tabChecks();
 			expect(tabNames.get(0).getText()).toBe("Contact Details");
 			expect(tabNames.get(1).getText()).toBe("Payment Details");
 			expect(tabNames.get(2).getText()).toBe("Social Profiles");
 			expect(tabNames.get(3).getText()).toBe("Reset Password");
 		});

 		it('Contact Details check ',function(){

 			var checkFlag=contactDetails.contactDetailsTLabelsCheck();
 			expect(checkFlag).toBe(true);

 		});

 		it('Name Updated successfully',function(){
 			var newName="TestUpdated"

 			var updatedName=contactDetails.successfullDetailsUpdate(newName);
 			expect(updatedName).toBe(newName);


 		});






 	});


});