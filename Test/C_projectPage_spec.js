describe("Project Page Checks",function(){

	var loginPage=require('../main/loginModulePageObject.js');
	var projectPage=require('../main/projectPageObject.js');

	

		

			var newURL=browser.params.baseURL+'/?'+Math.random().toString(10).substring(2,4);
		

		browser.get(newURL);

		 	browser.driver.manage().window().maximize();
 		loginPage.loginSuccessful(browser.params.user,browser.params.password);
 		projectPage.navigateToProjectPage();

 		 afterAll(function(){
         console.log('calling after all');
         browser.restart();
        
     });




	describe("project page entered", function(){

		it('project List Check',function(){

			expect(projectPage.projectListCheck()).toBe('Cross-platform UI layouts with Flexbox and Facebook Yoga');
			expect(projectPage.projectListCheck()).toBe("Bitcoin for Expert's");

		});

		it('project List clcikability Check',function(){

			expect(projectPage.firstProjectLink()).toBe(true);
			//expect(projectPage.firstProjectLink()).toBe("Bitcoin for Expert's");

		});

		it('project List clcikability Check',function(){

			expect(projectPage.secondProjectLinkCheck()).toBe(false);
			//expect(projectPage.firstProjectLink()).toBe("Bitcoin for Expert's");

		});

		it('first project section Check',function(){

			expect(projectPage.sectionsCheck().get(0).getText()).toBe('Front Matter');
			expect(projectPage.sectionsCheck().get(1).getText()).toBe('Chapters');
			expect(projectPage.sectionsCheck().get(2).getText()).toBe('Back Matter');
			//expect(projectPage.firstProjectLink()).toBe("Bitcoin for Expert's");

		});

		it('second project body check',function(){

			expect(projectPage.conetentInSecondProject().getText()).toBe("This book isn't currently available for authoring.");
			
			//expect(projectPage.firstProjectLink()).toBe("Bitcoin for Expert's");

		});

		it('first project link destination',function(){

			expect(projectPage.linkDestinationFirstProject()).toBe("https://staging-cdp.packtpub.com/cross_platform_ui_layouts_with_flexbox_and_facebook_yoga/wp-admin/");

		

		});

		it('chapter link destination',function(){
https://staging-cdp.packtpub.com/cross_platform_ui_layouts_with_flexbox_and_facebook_yoga/wp-admin/post.php?post=24&action=edit
			expect(projectPage.linkDestinationForChapter()).toBe("https://staging-cdp.packtpub.com/cross_platform_ui_layouts_with_flexbox_and_facebook_yoga/wp-admin/post.php?post=24&action=edit");

		

		});

		//https://staging-cdp.packtpub.com/cross_platform_ui_layouts_with_flexbox_and_facebook_yoga/wp-admin/post.php?post=6&action=edit
		it('appendix link destination',function(){
		https://staging-cdp.packtpub.com/cross_platform_ui_layouts_with_flexbox_and_facebook_yoga/wp-admin/post.php?post=24&action=edit
			expect(projectPage.linkDestinationForChapter()).toBe("https://staging-cdp.packtpub.com/cross_platform_ui_layouts_with_flexbox_and_facebook_yoga/wp-admin/post.php?post=6&action=edit");

		

		});

	});

});