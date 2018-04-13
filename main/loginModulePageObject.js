var loginPage=function(){

	//All the locators
	this.userNameTextBox=element(by.css("#loginBox > div > div.front > div > div > div > form > div:nth-child(1) > input"));
	this.passwordTextBox=element(by.css("#loginBox > div > div.front > div > div > div > form > div:nth-child(2) > input"));
	this.emailTextBox=element(by.css("#loginBox > div > div.back > div > div > div > form > div:nth-child(2) > input"));
	this.userNameBack=element(by.css("#loginBox > div > div.back > div > div > div > form > div:nth-child(1) > input"));
	this.loginBtn=element(by.buttonText("Login"));
	this.forgotPasswordLink=element(by.linkText("Forgotten your password?"));
	this.errorTextMsg=element(by.css("#loginBox > div > div.front > div > div > div > form > p.error"));
	this.resetPasswordHeading=element(by.css("#loginBox > div > div.back > div > div > div > h1"));
	this.toastContainer=element(by.css("#toast-container"));
	this.sendResetPasswordBtn=element(by.id("passwordResetBtn"));

	this.toastMessage=element(by.css(".toast-meassage"));
	this.backToLoginLink=element(by.linkText("Forgotten your password?"));
	this.loginPageHeading=element(by.css("#loginBox > div > div.front > div > div > div > h1"));
	this.WelcomeBoxCeoss=element(by.css("#gz2nuul > span"));
	this.googleToastBoxMessage=element(by.id("toast-container"));


	var EC=protractor.ExpectedConditions;

	this.loginSuccessful=function(value1, value2){

		this.userNameTextBox.sendKeys(value1);
		this.passwordTextBox.sendKeys(value2);
		this.loginBtn.click();
		

		

	};

	this.loginFailureWrongUserName=function(value2) {
		this.userNameTextBox.sendKeys("asdkjhjaslj");
		this.passwordTextBox.sendKeys(value2);
		this.loginBtn.click();
		browser.wait(EC.presenceOf(this.errorTextMsg));
		var errTxt= this.errorTextMsg.getText();
		console.log(errTxt);
		return errTxt;


	};


	this.loginFailureWrongPassword=function(value1){
		this.userNameTextBox.sendKeys(value1);
		this.passwordTextBox.sendKeys("sjfdhkjazldkjspo");
		this.loginBtn.click();
		browser.wait(EC.presenceOf(this.errorTextMsg));
		return this.errorTextMsg.getText();



	};

	this.resetPasswordlinkCheck=function(){
		this.forgotPasswordLink.click();
		browser.wait(EC.presenceOf(this.resetPasswordHeading));
		return this.resetPasswordHeading.getText();



	};

	this.wrongResetPassInfo=function(value1){
		this.forgotPasswordLink.click();
		browser.wait(EC.presenceOf(this.resetPasswordHeading));
		this.userNameBack.sendKeys(value1);

		this.emailTextBox.sendKeys("sdhkjl;");
		browser.wait(EC.elementToBeClickable(this.sendResetPasswordBtn),10000);
		this.sendResetPasswordBtn.click();
		console.log("waitting start");
		browser.wait(EC.visibilityOf(this.googleToastBoxMessage),10000);
		console.log("waitting done");
		browser.driver.actions().moveMouse(this.googleToastBoxMessage).perform();
		return this.googleToastBoxMessage.isDisplayed();

		



	};

	this.halfResetPassInfo=function(value1){
		this.forgotPasswordLink.click();
		browser.wait(EC.presenceOf(this.resetPasswordHeading),10000);
		this.userNameBack.sendKeys(value1)
		return this.sendResetPasswordBtn.isEnabled();
	};

	this.checkBackToLoginBtn=function(){
		this.forgotPasswordLink.click();
		browser.wait(EC.presenceOf(this.resetPasswordHeading), 10000);
		this.backToLoginLink.click();
		browser.wait(EC.presenceOf(this.loginPageHeading),10000)
		return this.loginPageHeading.getText();

	};






};

module.exports=new loginPage();

