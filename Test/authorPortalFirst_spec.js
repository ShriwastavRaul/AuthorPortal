describe("AuthorPortal Testing",function(){

 


 	describe("Testing Login Module",function(){
 		beforeEach(function() {
 	//browser.get("http://authorportal.packtpub.com/login");
 });

 		afterEach(function() {
 	//browser.close();
 });

 	var loginUserName="menond";
 	var loginPassword="pass@123";	
 	var EC=protractor.ExpectedConditions;


 	it("Login Passed test", function() {
 		browser.get("http://authorportal.packtpub.com/login");

 		element(by.css("#loginBox > div > div.front > div > div > div > form > div:nth-child(1) > input")).sendKeys(loginUserName);
 		element(by.css("#loginBox > div > div.front > div > div > div > form > div:nth-child(2) > input")).sendKeys(loginPassword);
 		element(by.buttonText("Login")).click();
 		
 		browser.wait(EC.urlIs("http://authorportal.packtpub.com/"))
 		expect(browser.getCurrentUrl()).toEqual("http://authorportal.packtpub.com/");
 		browser.restart();
 			
 	
 		});

 	it("forgot password page functionalities", function() {

 		browser.get("http://authorportal.packtpub.com/login");
 		element(by.linkText("Forgotten your password?")).click();
 		//browser.wait(EC.presenceOf(by.linkText("Back to Login")));
 		browser.driver.sleep(3000);

 		element(by.css("#loginBox > div > div.back > div > div > div > form > div:nth-child(1) > input")).sendKeys(loginPassword);




 		
 		
 		console.log(element(by.buttonText("Login")).isEnabled());
 		expect(element(by.buttonText("Login")).isEnabled()).toBe(true);
 			
 	
 		});

 	});
})