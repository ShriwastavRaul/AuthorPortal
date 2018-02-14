describe("Addopt an animal on the zoo test site",function(){

 beforeEach(function() {
 	browser.get("http://www.thetestroom.com/jswebapp");
 });

	it("should be able to adopt an animal", function(){
		
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");

	});
	it("to check the dynamic text feature",function(){

		//browser.get("http://www.thetestroom.com/jswebapp");

		var textMsg="some testing texts";
		element(by.model("person.name")).sendKeys(textMsg);
		element(by.binding("person.name")).getText().then(function(text) {
		expect(text).toEqual(textMsg);
		});
	});


	
	it("to check the list options",function() {
		//browser.get("http://www.thetestroom.com/jswebapp");
		element(by.buttonText("CONTINUE")).click();
		element(by.model("animal")).$('[value="1"]').click();

		element.all(by.css(".ng-pristine option")).then(function(items) {
		expect(items.length).toBe(4);
		expect(items[1].getText()).toBe("George the Turtle");
		});
		element(by.buttonText("CONTINUE")).click();

	

	});
})