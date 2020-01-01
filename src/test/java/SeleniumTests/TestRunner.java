package SeleniumTests;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C://Users//Bharath kumar//NewWorkspace//CucumberFramework//src//test//resources//Feature//E2E_Test.feature",glue={"StepDefinition"}
		)

public class TestRunner {

}