package StepDefinition;

import org.openqa.selenium.WebDriver;

import Managers.PageObjectManager;
import Managers.WebDriverManager;
import PageObjects.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageSteps {
	WebDriver driver;
	HomePage homePage;
	PageObjectManager pageObjectManager;	
	WebDriverManager webDriverManager;
	
	
	@Given("^user is on Home Page$")
	public void user_is_on_Home_Page(){
		webDriverManager = new WebDriverManager();
		driver = webDriverManager.getDriver();
		pageObjectManager = new PageObjectManager(driver);
		homePage = pageObjectManager.getHomePage();
		homePage.navigateTo_HomePage();	
	}
	
	@When("^he search for \"([^\"]*)\"$")
	public void he_search_for(String product)  {
		homePage.perform_Search(product);
	}

}