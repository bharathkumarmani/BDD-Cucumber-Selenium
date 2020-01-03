package SeleniumTests;
import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.vimalselvam.cucumber.listener.Reporter;

import Managers.FileReaderManager;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)


/*
 * @CucumberOptions( features =
 * "C://Users//Bharath kumar//NewWorkspace//CucumberFramework//src//test//resources//Feature//E2E_Test.feature"
 * ,glue={"StepDefinition"},
 * 
 * plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json",
 * "junit:target/cucumber-reports/Cucumber.xml",
 * "html:target/cucumber-reports"}, monochrome = true )
 */


 @CucumberOptions( features = "C://Users//Bharath kumar//NewWorkspace//CucumberFramework//src//test//resources//Feature//E2E_Test.feature" ,glue={"StepDefinition"},
 
		 plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}, monochrome = true )



public class TestRunner {
	
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
	}

}