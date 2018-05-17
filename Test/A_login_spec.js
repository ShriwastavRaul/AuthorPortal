

 


 	describe("Testing Login Module",function(){
 		beforeEach(function() {
 	//browser.get("http://authorportal.packtpub.com/login");

 	browser.get(browser.params.baseURL);
 	browser.driver.manage().window().maximize();
 });

 		/*afterALL(function(){
 			browser.restart();
 		});*/

 		

 	var loginPage=require('../main/loginModulePageObject.js');



 	var loginUserName="authort";
 	var loginPassword="pass+123+456";	
 	var EC=protractor.ExpectedConditions;


 	


 	it("Login Passed test", function() {


 		loginPage.loginSuccessful(loginUserName,loginPassword);
 	

 		/*element(by.css("#loginBox > div > div.front > div > div > div > form > div:nth-child(1) > input")).sendKeys(loginUserName);
 		element(by.css("#loginBox > div > div.front > div > div > div > form > div:nth-child(2) > input")).sendKeys(loginPassword);
 		element(by.buttonText("Login")).click();
 		
 		browser.wait(EC.urlIs("http://staging-authorportal.packtpub.com.s3-website-eu-west-1.amazonaws.com/"))
 		expect(browser.getCurrentUrl()).toEqual("http://staging-authorportal.packtpub.com.s3-website-eu-west-1.amazonaws.com/");
 		*/
 			
 	
 		});

 	it("forgot password page functionalities", function() {

 		var errormsg=loginPage.loginFailureWrongUserName(loginPassword);
 		expect(errormsg).toBe("Username and password not recognised");


/*
 		browser.get("http://staging-authorportal.packtpub.com.s3-website-eu-west-1.amazonaws.com/login");
 		element(by.linkText("Forgotten your password?")).click();
 		//browser.wait(EC.presenceOf(by.linkText("Back to Login")));
 		browser.driver.sleep(3000);

 		element(by.css("#loginBox > div > div.back > div > div > div > form > div:nth-child(1) > input")).sendKeys(loginPassword);




 		
 		
 		console.log(element(by.buttonText("Login")).isEnabled());
 		expect(element(by.buttonText("Login")).isEnabled()).toBe(true);
 		*/	
 	
 	});
 	

 	

 	it("forgot password page funtionalities", function() {

 		var errormsg=loginPage.loginFailureWrongPassword(loginPassword);
 		expect(errormsg).toBe("Username and password not recognised");

 	});

 	it("reset password functionlities", function() {
 		
 		var errormsg=loginPage.resetPasswordlinkCheck(loginUserName);
 		expect(errormsg).toBe("Username and password not recognised");

 	});

 	it("wrong Reset Info", function(){

 		var tagPresence=loginPage.wrongResetPassInfo(loginPassword);
 		
 		console.log(tagPresence);

 	});

 	it("reset password functionlities", function() {
 		
 		var btnActive=loginPage.halfResetPassInfo(loginUserName);
 		expect(btnActive).toBe(false);

 	});

 	it("reset password functionlities", function() {
 		
 		var blockHeading=loginPage.checkBackToLoginBtn(loginUserName);
 		expect(blockHeading).toBe("Author Portal");

 	});
});

