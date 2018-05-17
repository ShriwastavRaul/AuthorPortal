var landingPage=function(){


	this.welComeMessage=element(by.xpath("//item-box[@title='Welcome To Your Author Portal']//span[@class='ng-star-inserted']"));
	this.newAlerts=element(by.className('alert beacon-bg'));
	 //this.authorName=element(by.cssContainingText('ng-star-inserted','Test Author'));
	this.authorName=element(by.xpath("(//div[@class='itembox-heading']//span[@class='ng-star-inserted'])[1]"));
	this.detailsInHomePage=element(by.css('body > app-root > div > app-home > div > div.col-sm-10.main-area > div > ng-component > div > div.col-md-9.col-sm-6 > item-box > div > div.itembox-body'));
    var listOfOtherModules=element.all(by.xpath("//ul[@class='nav nav-pills nav-stacked']/li/a"));
	this.editProfileLinkBelowPhoto=element(by.xpath("(//*[@routerlink='/contact-details'])[1]"));

	var logoutBtn=element(by.className('fa fa-sign-out'));

	var EC=protractor.ExpectedConditions;

	this.nameAbovePhoto=function(){			

		browser.wait(EC.visibilityOf(this.editProfileLinkBelowPhoto),90000);
		return this.authorName.getText();
	};

	this.editProfileClick=function(){
		browser.wait(EC.visibilityOf(this.editProfileLinkBelowPhoto),30000);
		return this.editProfileLinkBelowPhoto.isEnabled();
		
	};

	this.newAlertAvailability=function(){
		//browser.wait(EC.visibilityOf(this.newAlerts),30000);
		return this.newAlerts.isDisplayed();
	};

	this.welcomeMessageCheck=function(){
		browser.wait(EC.visibilityOf(this.welComeMessage),30000);
		return this.welComeMessage.getText();
		
	};

	this.otherDetailsVisibleCheck=function(){
		browser.wait(EC.visibilityOf(this.detailsInHomePage),30000);
		return this.detailsInHomePage.isDisplayed();
		

	};


	this.checkLeftPane=function(){
		return listOfOtherModules;

	};

	this.checkLeftPaneClickabilityFirst=function(){

		
		try {

			browser.wait(EC.elementToBeClickable(listOfOtherModules.get(1)),5000);
			return true;

		}
		catch(e){
			return false;

		}

	};

	this.checkLeftPaneClickabilitySecond=function(){

		
		try {

			browser.wait(EC.elementToBeClickable(listOfOtherModules.get(2)),5000);
			return true;

		}
		catch(e)
		{
			return false;

		}

	};

	this.getLoggedOut=function(){
		logoutBtn.click();

	};



};
module.exports=new landingPage();