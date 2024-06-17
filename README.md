## SnipSavvy 🚀

SnipSavvy is a code snippet management platform, coded by developers for developers

Website Link: https://snipsavvy.vercel.app/

Backend Repo: https://github.com/SnipSavvy/SnipSavvy_Backend

![image](https://github.com/SnipSavvy/SnipSavvy_Frontend/assets/169388490/e3be5a71-2ed7-4543-b12e-97e144336797)

![image](https://github.com/sahilrohera10/SnipSavvy_Prod_Frontend/assets/90958499/f3ae0e5d-e3c8-4770-bb72-31612fe857d8)

![image](https://github.com/sahilrohera10/SnipSavvy_Prod_Frontend/assets/90958499/4671bb1e-b725-4224-b68e-c0c0b5fa8251)


## ⭐Features 

* The Platform serves as a repository for storing, categorizing and sharing their code snippets 

* Users can organize components into different categories for easy navigation and retrieval

* The platform allows users to share their code snippets with others, enabling seamless collaboration and knowledge sharing among developers

* We have a global search feature for users to easily navigate among their code snippets via the tags they set with the code snippet

* Sharing is multi level, a user can share a whole workspace, a collection or a single snippet which can be restricted by the user.
  
![image](https://github.com/SnipSavvy/SnipSavvy_Frontend/assets/169388490/bad6ce8e-f7ca-41bc-9bf9-c1675196df44)
![image](https://github.com/SnipSavvy/SnipSavvy_Frontend/assets/169388490/66184825-d1db-4caf-8957-7e3aa0b84ecf)



## ✨Upcoming Features

* AI Support for code suggestion and completion upon prompt

* Community Support and Knowledge sahring page built in the spirit of Learn in public

* Implementing History Tracking feature for code snippets, upto the last edition
  
![image](https://github.com/SnipSavvy/SnipSavvy_Frontend/assets/169388490/9a415e7f-321a-4c5e-85a6-ea041e0c63a6)


## Frontend Tech Stack 🚀

 * **Typescript**
 * **Next JS**
 * **Tailwind CSS**
 * **Zod**
 * **Axios**
 * **Material UI**


## ⭐Getting Started with Contributing

Refer to this Contributing guide- 
https://github.com/SnipSavvy/SnipSavvy_Frontend/blob/main/.github/Contribution%20Guide/CONTRIBUTING.md

Refer to this for Issue Template- 
https://github.com/SnipSavvy/SnipSavvy_Frontend/blob/main/.github/Issue%20Template/new_issue.md

Thank you for considering contributing to our project. Your involvement is invaluable to us. To ensure a smooth and collaborative process, please follow these steps:

**Fork the Repository**: Begin by forking the repository to your personal GitHub account. This will create a copy of the project under your account.

**Clone Your Fork Locally**: Use the following command to clone your forked repository to your local machine:

``` bash
git clone <fork-link>
```
**Get the backend**: Fork and clone the backend part of the project from the links above


**Install the needed dependencies for both backend and frontend before trying it out in the development environment**:

``` sh
npm install
```

**Set up your .env file for the backend**: Initialize the .env variables

``` sh
MONGO_URL='Your MongoDB URI'
ENCRYPTION_KEY=
ALGORITHM=
PORT='Your Desired Port value, ex: 4000'
EMAIL_USERNAME= 'Your Email'
EMAIL_PASSWORD= 'Your Password'
``` 

**Set up your .env file for the frontend**: Initialize the .env variables

``` sh
NEXT_PUBLIC_BASEURL=http://localhost:"Your backend PORT"
AUTH_GOOGLE_ID="Your Google Client ID"
AUTH_GOOGLE_SECRET="Your Google Client Secret"
NEXTAUTH_URL=http://localhost:3000/api/auth/
NEXTAUTH_SECRET="Your Secret Key"
``` 
**Note**: To get your Google client ID and Client Secret go to https://console.cloud.google.com/ , go to API and Services and generate your credentials


There should be a "Authorized Redirect URIs" in the credentials sections, there copy paste this URI: http://localhost:3000/api/auth/callback/google


**Set Up the Backend Development Environment**: Initialize the development environment by running the appropriate command:

``` sh
npm start
# or
yarn start
# or
pnpm start
# or
bun start
``` 


**Set Up the Frontend Development Environment**: Initialize the development environment by running the appropriate command:

``` sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
``` 


**Implement Your Changes**: Once the development environment is set up, proceed to make your desired changes to the codebase.

**Test Your Changes**: Thoroughly test your modifications in the development environment to ensure they meet the project's standards and do not introduce any regressions.

**Commit Your Changes**: Commit your changes to your local repository with clear and concise commit messages:

``` bash
git add .
git commit -m "[Prefix]: Change"
Prefix = [DOC,CHORE,FEATURE,BUGFIX,ORGNIZE]

``` 

**Create a New Branch**: Before making any changes, create a new branch to isolate your work from the main codebase 

**Push Your Changes**: Push your commits to your forked repository on GitHub using the following command:

``` bash
git push origin <branch-name>
``` 

**Submit a Pull Request**: Once your changes are pushed to your fork, navigate to the repository's page on GitHub and initiate a pull request. Please follow the Pull Request template given below, provide a detailed description of your changes and any relevant context. If you have changed the UI, please add the screenshots of the changes you have done

We greatly appreciate your contributions and look forward to reviewing your pull request.

![image](https://github.com/SnipSavvy/SnipSavvy_Frontend/assets/169388490/c9fa4d44-a709-4fac-85e0-07c5fcad6626)

## ⭐Pull Request Template

### Description

[Provide a brief description of the changes you've made and why they are necessary. Mention any related issues or feature requests if applicable.]

### Changes Made

[List the main changes made in bullet points.]

### Screenshots (if applicable)
[Include any relevant screenshots to visually demonstrate the changes, especially for UI/UX-related modifications.]

### Checklist
Please ensure that your pull request meets the following requirements:

 - I have tested my changes thoroughly.
 - I have added necessary documentation or updated existing documentation (if applicable).
 - My changes do not introduce any new issues or regressions.


### Related Issues
[List any related issues or feature requests that are addressed or resolved by this pull request.]


### Additional Notes
[Include any additional information or notes that may be relevant for reviewers.]
