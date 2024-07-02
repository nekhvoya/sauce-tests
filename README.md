Assignment: 

Task 1 - Mindset / Planning: Your client is seeking your guidance, take us on your journey and
thought process.
Case: Your client is building a new finance system and are still currently supporting a legacy
system in the meantime. An extensive UI end-to-end & API automation suite exists for the legacy
system but tests are slowly starting to break as new features are developed. Simultaneously you
need ensure that features for the new system are thoroughly tested.
● What challenges can you identify?
● What’s your plan of action, how are you going to ensure testing/ releases remain
efficient?
● How will you strike the balance between automation for the new & legacy system?
Conditions:
● This is a new client and your first week.
● Single tester in the team (you).
● 2-week sprint.
● There’s no automation for the new system - tasked to you.
Note:
● Please list any assumptions you make for the given scenario.

Task 2 - Test Automation: Let’s dive into some automated tests. Include your source-code during
submission. The playing field is open when it comes to which tool you use, however if you’re
comfortable with Playwright then it would be nice to use this to automate the test cases (API/
Web) all the while keeping your implementation inline with the restrictions/ languages outlined
below.
Test Cases:
● You’ll write 3 UI web tests.
● You’ll write 3 API web tests.
Rules:
● UI tests via https://www.saucedemo.com.
● API tests via https://reqres.in.
● Provide a clear README for your automation solution.
Tech:
● Tool: [Your choice] OR [Playwright] Restriction: No “Record and Play” tools
● Language (pick one): [C#] [Typescript] [ Javascript] [Java] [Python]
Note:
● Please list any assumptions you make for the given scenario.
Bonus
To have the tests up and running CI/CD
environment of your choice. If you opt to undergo
the Bonus please then be ready to share this
implementation during the interview.

What do we evaluate?
- Ability to build architecture from scratch.
- Testing and validation skills.
- Codebase maintainability, repetition, and
readability.



# Sauce Demo tests
This is a demo test automation project demonstrating minimal set up of test automation using Playwright with Typescript.
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
The tests can be run via the following npm command:
`npx playwright test`.

### CI/CD
CI/CD is implemented via the Github Actions pipeline. The workflow file can be found under the follwoing path:
`.github/workflows/playwright.yml`.
The workflow is implemented to run tests on the master branch on every push and pull request to the remote repository.
When the run is done, the test report is going to uploaded as an artifact of the build.

### Reporting
After each run a Playwright report is generated. The report can be found in the `playwright-report` directory.

### Assumptions made for this project: 
1. When defining locators the preference was given to data-test attributes as such attributes are usually added to the elements specifically to use them for the ustomation testing
2. Credentials used to authenticate with the websit are not sensitive data and for the simplicity were put in the source code unencrypted
3. WEB UI and API belong to the same application (UI and API tests were put to the same project for simplicity)
4. This is a basic set up created as a POC, which is why the automated scenarios could be any, as long as they illustrate the project set up and architecture.