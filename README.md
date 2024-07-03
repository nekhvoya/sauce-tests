# Sauce Demo tests
This is a demo test automation project demonstrating set up of test automation using Playwright with Typescript.
The website under test is `https://www.saucedemo.com/`.

### Prerequisites:
Following tools need to be installed:
* NodeJs
* Npm (npx)
* VS Code
* Plawright browsers

### Project architecture
The project is implemented based on the Page Object pattern, i.e., each application page has a dedicated Page Object class. 
Additionally, there are dedicated classes for common compomemnts (available on multiple pages), e.g. `src/ui/header_component.ts`.
The Page Object classes can be found under `src/ui`.
In the `src/utils` there are useful utility functions, e.g., functions providing generation of random strings.
The `src/constants` directory provides constants used throughout the project.
The test scenarios can be found in the `tests` directory.

### Project configurations
The Playwright specific configurations in the following config file: `playwright.config.ts`. 
The project configurations can be found in `packaje.json`. 

### How to run the tests
There are multiple Playwright config files in this project. To run the tests the appropriate config file need to be specified.
E.g., e2e tests can be run via the following npm command:
`npx playwright test --config='e2e.playwright.config.ts'`.

### CI/CD
CI/CD is implemented via the Github Actions pipeline. The workflow file can be found under the follwoing path:
`.github/workflows/playwright.yml`.
The workflow is implemented to run tests on the master branch on every push and pull request to the remote repository.
When the run is done, the test report is going to uploaded as an artifact of the build.

### Reporting
After each run a Playwright report is generated. The report can be found in the `playwright-report` directory.

### Assumptions made for this project: 
1. When defining locators the preference was given to data-test attributes as such attributes are usually added to the elements specifically to use them for the automation testing.
2. Credentials used to authenticate with the websit are not sensitive data and for the simplicity were put in the source code unencrypted.
3. WEB UI and API belong to the same application (UI and API tests were put to the same project for simplicity).
4. This is a basic set up created as a POC, which is why the automated scenarios could be any, as long as they illustrate the project set up and architecture.