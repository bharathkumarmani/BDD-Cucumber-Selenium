package StepDefinition;
import com.vimalselvam.cucumber.listener.Reporter;
import Cucumber.TestContext;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
public class Hooks {	
	TestContext testContext;	
	public Hooks(TestContext context) {
		testContext = context;
	}
	
	@Before
	public void beforeScenario(Scenario scenario) {
	    Reporter.assignAuthor("Bharath");
	}
	
	@After
	public void AfterSteps() {
		testContext.getWebDriverManager().closeDriver();
	}
}