$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Bharath kumar/NewWorkspace/CucumberFramework/src/test/resources/Feature/E2E_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Automated End2End Tests",
  "description": "Description: The purpose of this feature is to test End 2 End integration.",
  "id": "automated-end2end-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer place an order by purchasing an item from search",
  "description": "",
  "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he search for \"dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout from mini cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter \"\u003ccustomer\u003e\" personal details on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select same delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select payment method as \"check\" payment",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "place the order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the order details",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;",
  "rows": [
    {
      "cells": [
        "customer"
      ],
      "line": 15,
      "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;;1"
    },
    {
      "cells": [
        "Lakshay"
      ],
      "line": 16,
      "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20065194900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Customer place an order by purchasing an item from search",
  "description": "",
  "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he search for \"dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout from mini cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter \"Lakshay\" personal details on checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select same delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select payment method as \"check\" payment",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "place the order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the order details",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 37253108900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dress",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.he_search_for(String)"
});
formatter.result({
  "duration": 9303594700,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.choose_to_buy_the_first_item()"
});
formatter.result({
  "duration": 20333974500,
  "error_message": "java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\r\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\r\n\tat java.base/java.util.Objects.checkIndex(Objects.java:373)\r\n\tat java.base/java.util.ArrayList.get(ArrayList.java:425)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.get(Unknown Source)\r\n\tat PageObjects.ProductListingPage.getProductName(ProductListingPage.java:37)\r\n\tat StepDefinition.ProductPageSteps.choose_to_buy_the_first_item(ProductPageSteps.java:20)\r\n\tat ✽.And choose to buy the first item(C:/Users/Bharath kumar/NewWorkspace/CucumberFramework/src/test/resources/Feature/E2E_Test.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CartPageSteps.moves_to_checkout_from_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lakshay",
      "offset": 7
    }
  ],
  "location": "CheckoutPageSteps.enter_personal_details_on_checkout_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutPageSteps.select_same_delivery_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 26
    }
  ],
  "location": "CheckoutPageSteps.select_payment_method_as_payment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutPageSteps.place_the_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConfirmationPageSteps.verify_the_order_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 735932100,
  "status": "passed"
});
});