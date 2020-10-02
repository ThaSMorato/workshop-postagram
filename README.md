This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Enviroment
* Node.js v10.x or later
* npm v5.x or later
* git v2.14.1 or later
## NPM Installs
### `npm install aws-amplify emotion uuid react-router-dom @aws-amplify/ui-react`
## Installing the CLI & Initializing a new AWS Amplify Project
### `npm install -g @aws-amplify/cli`
Then needs to configure de CLI
### ` amplify configure`
### ` - Specify the AWS Region: us-east-1 || us-west-2 || eu-central-1`
### `- Specify the username of the new IAM user: amplify-cli-user`
### ` > In the AWS Console, click Next: Permissions, Next: Tags, Next: Review, & Create User to create the new IAM user. Then return to the command line & press Enter.`
### `- Enter the access key of the newly created user:   `
### ` ? accessKeyId: (<YOUR_ACCESS_KEY_ID>)  `
### `? secretAccessKey: (<YOUR_SECRET_ACCESS_KEY>)`
### `- Profile Name: amplify-cli-user`
## Initializing A New Project
### `amplify init`
### `- Enter a name for the project: postagram`
### `- Enter a name for the environment: dev`
### `- Choose your default editor: Visual Studio Code (or your default editor)`
### `- Please choose the type of app that youre building: javascript`
### `- What javascript framework are you using: react`
### `- Source Directory Path: src`
### `- Distribution Directory Path: build`
### `- Build Command: npm run-script build`
### `- Start Command: npm run-script start`
### `- Do you want to use an AWS profile? Y`
### `- Please choose the profile you want to use: amplify-cli-user`
## Adding an AWS AppSync GraphQL API
### ` amplify add api`
### `? Please select from one of the above mentioned services: GraphQL`
### `? Provide API name: Postagram`
### `? Choose the default authorization type for the API: API key`
### `? Enter a description for the API key: public`
### `? After how many days from now the API key should expire (1-365): 365 (or your preferred expiration)`
### `? Do you want to configure advanced settings for the GraphQL API: No`
### `? Do you have an annotated GraphQL schema? N `
### `? Choose a schema template: Single object with fields`
### `? Do you want to edit the schema now? (Y/n) Y`
## Deploying the API
### ` amplify push`
### `? Are you sure you want to continue? Y`
### `# You will be walked through the following questions for GraphQL code generation`
### `? Do you want to generate code for your newly created GraphQL API? Y`
### `? Choose the code generation language target: javascript`
### `? Enter the file name pattern of graphql queries, mutations and subscriptions: src/graphql/**/*.js`
### `? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions? Yes`
### `? Enter maximum statement depth [increase from default if your schema is deeply nested]: 2`
Alternately, you can run amplify push -y to answer Yes to all questions.
## Image Storage with Amazon S3
### ` amplify add storage`
### `? Please select from one of the below mentioned services: Content`
### `? Please provide a friendly name for your resource that will be used to label this category in the project: images`
### `? Please provide bucket name: postagram14148f2f4aeb4f259c847e1e27145a2 <use_default>`
### `? Who should have access: Auth and guest users`
### `? What kind of access do you want for Authenticated users? create, update, read, delete`
### `? What kind of access do you want for Guest users? read`
### `? Do you want to add a Lambda Trigger for your S3 Bucket? N`
To deploy, run:
### `amplify push`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

