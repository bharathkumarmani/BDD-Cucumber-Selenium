package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import DataProvider.ConfigFileReader;
import Managers.FileReaderManager;

public class HomePage {
	WebDriver driver;
	 ConfigFileReader configFileReader;
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
//		 configFileReader= new ConfigFileReader();
	}
	
	public void perform_Search(String search) {
//		driver.navigate().to("http://shop.demoqa.com/?s=" + search + "&post_type=product");
		driver.navigate().to(FileReaderManager.getInstance().getConfigReader().getApplicationUrl() + "/?s=" + search + "&post_type=product");
	}
	
	public void navigateTo_HomePage() {
//		driver.get("http://www.shop.demoqa.com");
//		driver.get(configFileReader.getApplicationUrl());
		 driver.get(FileReaderManager.getInstance().getConfigReader().getApplicationUrl());
	}
}