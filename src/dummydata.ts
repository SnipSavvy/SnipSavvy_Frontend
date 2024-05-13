const dummyCodeData = [
    {
      title: 'Hello World',
      language: 'javascript',
      code: `\nimport { addSnippet } from \"../controllers/snippet.controller\";\nimport express, { Router } from \"express\";\nconst snippet: Router = express.Router();\n\nsnippet.post(\"/\", addSnippet);\n// snippet.get(\"/\" , fetchWorkspaces)\n\nmodule.exports = snippet;\n`
    },
    {
      title: 'Example 2',
      language: 'python',
      code: `def greet():
      print('Hello, World!')`
    },
    {
      title: 'Example 3',
      language: 'java',
      code: `public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }`
    }
  ];
  
export default dummyCodeData;