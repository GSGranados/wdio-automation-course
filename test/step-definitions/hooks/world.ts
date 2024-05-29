import { setWorldConstructor } from "@wdio/cucumber-framework";

class CustomWorld {
  testid: string;
  appid: string;
  constructor() {
    this.testid = "";
  }
}

setWorldConstructor(CustomWorld);