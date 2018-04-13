var landingPage=function(){


	this.welComeMessage=element(by.cssContainingText('.ng-star-inserted','Welcome To Your Author Portal'));
	this.newAlerts=element(by.className('.alert beacon-bg'));
	 this.authorName=element(by.cssContainingText('ng-star-inserted','Test Author'));
	this.detailsInHomePage=element(by.css('body > app-root > div > app-home > div > div.col-sm-10.main-area > div > ng-component > div > div.col-md-9.col-sm-6 > item-box > div > div.itembox-body'));
	this.listOfOtherModules=element.all(by.css('ul.nav nav-pills nav-stacked li'));
	this.editProfileLinkBelowPhoto=element(by.xpath("(//*[@routerlink='/contact-details'])[1]"));

	var EC=protractor.ExpectedConditions;

	this.nameAbovePhoto=function(){


		browser.wait(EC.visibilityOf(this.authorName));




		var userName = this.authorName.getText();
		return userName;


	};

	this.editProfileLink=function(){
		this.editProfileLink.click();
		
	};

	this.newAlertAvailability=function(){
		var tag=this.newAlerts.isDisplayed();
		return tag;

	};

	this.newAlertAvailability=function(){
		var welcomeMessage=this.welComeMessage.getText();
		return welcomeMessage;

	};

	this.otherDetailsVisibleCheck=function(){
		var tag=this.detailsInHomePage.isDisplayed();
		return tag;

	};



};
module.exports=new landingPage();