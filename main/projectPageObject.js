var projectPage=function(){

	
var landingPage=require('../main/landingPageObject.js');
	var loginModulePage=require('../main/loginModulePageObject.js');
	var elemArray=landingPage.checkLeftPane();

	




	var firstProjectHeading=element(by.xpath("//div[@class='itembox-heading']//a"));
	var sections=element.all(by.xpath("//div[@class='bookSection']//h3"));
	var linksInSections=element.all(by.xpath("//ul[@class='cdpEntries']//a"));
	var secondProjectBody=element(by.xpath("//div[@class='itembox-body']//p"));
	var allProjects=element.all(by.xpath("//div[@class='itembox-heading']"));

	


	var EC=protractor.ExpectedConditions;

	this.navigateToProjectPage=function(){
		
		browser.wait(EC.visibilityOf(elemArray.get(2)));
		elemArray.get(2).click();
		browser.wait(EC.visibilityOf(linksInSections.get(1)));
		

	};


	this.projectListCheck=function(){
		//return allProjects;
		return element(by.xpath("//div[@class='itembox-heading']//span")).getText();

	};

	this.firstProjectLink=function(){
		return loginModulePage.clickabilityCheck(allProjects.get(0));

	};

	this.secondProjectLinkCheck=function(){
		return loginModulePage.clickabilityCheck(allProjects.get(1));
	};

	this.sectionsCheck=function(){
		return sections;
	};

	this.conetentInSecondProject=function(){
		return secondProjectBody;
	};

	this.linkDestinationFirstProject=function(){
		return firstProjectHeading.getAttribute("href");
	};

	this.linkDestinationForChapter=function(){
		return linksInSections.get(0).getAttribute("href");
	};

	this.linkDestinationForAppendix=function(){
		return linksInSections.get(3).getAttribute("href");
	};

	

};
module.exports=new projectPage();