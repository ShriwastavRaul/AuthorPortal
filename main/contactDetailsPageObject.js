var contactDetails=function(){
	var landingPage=require('../main/landingPageObject.js');
	var loginModulePage=require('../main/loginModulePageObject.js');
	var elemArray=landingPage.checkLeftPane();

	var prfileTabs=element.all(by.xpath("//*[@id='profileTabs']/li/a"));
	var labesInContactDetails=element.all(by.xpath("//*[@id='contact_details']/contact-details//profile-field//label"));
	var btnUpdateContactDetails=element(by.buttonText('Update Contact Details'));
	this.textBoxSalutation=element(by.id("salutation"));
	var textBoxFirstName=element(by.id("first_name"));
	var textBoxLastName=element(by.id("last_name"));
	var textBoxPhoneWork=element(by.id("phone_work"));
	var textBoxEmail1=element(by.id("email1"));
	var textBoxAddressLine1=element(by.id("primary_address_street_1"));
	var textBoxAddressLine2=element(by.id("primary_address_street_2"));
	var textBoxCity=element(by.id("primary_address_city"));
	var textBoxState=element(by.id("primary_address_state"));
	var textBoxPostalCode=element(by.id("primary_address_postalcode"));
	var textBoxCountry=element(by.id("primary_address_country"));
	

	var paymentDetailsTabs=element.all(by.xpath("//*[@id='payment_tabs']//li"));
	var labelsInAccountHoldersDetails=element.all(by.xpath("//*[@id='account_holder']/profile-field"));
	var btnUpdateAccountDetails=element(by.buttonText("Update Payment Details"));
	var labelsInBankDetailsTabs=element.all(by.xpath("//*[@id='bank_details']/profile-field"));
	var labelsInAccountDetailsTabs=element.all(by.xpath("//*[@id='account_details/]/profile-field"));

	var labelsInSocialProfileTabs=element.all(by.xpath("//*[@id='social_profiles']/social-profiles//profile-field"));
	var btnUpdateSocialProfile=element(by.buttonText('Update Social Profiles'));

	var btnUpdateResetPassowrd=element(by.buttonText('Update Reset Password'));
	var labelsInResetPasswordTab=element.all(by.xpath("//*[@id='reset_password']//profile-field"));
	var confNewPassTxtBox=element(by.xpath("//*[@for='confirm_new_password']"));

	var labelsForContactDetails=['Title','First Name','Last Name','Telephone','Primary Contact Email','Address Line 1', 'Address Line 2','City','County','Postal COde','Country'];
	var tabs=['Contact Details','Payment Details','Social Profiles', 'Reset Password'];
	


	var EC=protractor.ExpectedConditions;


	this.navigateToDetailsPage=function(){
		browser.wait(EC.visibilityOf(elemArray.get(2)));
		elemArray.get(1).click();
		browser.wait(EC.visibilityOf(prfileTabs.get(1)));
		

	};


	this.presentDetailsCheck=function(){
		console.log('in first function');


		console.log(this.textBoxSalutation.getAttribute("value"));
	


		var presentDetails=[this.textBoxSalutation.getAttribute("value"),textBoxFirstName.getAttribute("value"),textBoxLastName.getAttribute("value"),textBoxEmail1.getAttribute("value")];
		return presentDetails;

	};

	this.tabChecks=function(){

		return prfileTabs;



	};

	this.contactDetailsTLabelsCheck=function(){

		var flag=true;
		var i=0;

		while(flag==true){
			var actualLabels=(labesInContactDetails.get(i).getText().toString());
			console.log(actualLabels);
			var expectedLabels=labelsForContactDetails[i];
			console.log(expectedLabels);
			if(actualLabels.toBe(expectedLabels))
				i++;
			else
				flag=false;
		};

		return flag;


	}

	this.successfullDetailsUpdate=function(value){

		textBoxFirstName.clear();
		textBoxFirstName.sendKeys(value);

		btnUpdateContactDetails.click();
		elemArray.get(0).click();
		browser.wait(EC.visibilityOf(landingPage.editProfileLinkBelowPhoto),90000);
		return landingPage.authorName.getText();
		elemArray.get(1).click();


	};


	this.paymentDeatailsSubTabsCheck=function(){

		textBoxFirstName.clear();
		textBoxFirstName.sendKeys(value);

		btnUpdateContactDetails.click();
		elemArray.get(0).click();
		browser.wait(EC.visibilityOf(landingPage.editProfileLinkBelowPhoto),90000);
		return landingPage.authorName.getText();
		elemArray.get(1).click();


	};




};



module.exports=new contactDetails();