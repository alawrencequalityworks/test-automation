# automation-repo


## Initialize project
`npm install`

### Run all tests
`npm run test`

### Run Authentication tests
`npm run authentication`

### Run Add to cart tests
`npm run addToCart`

### Run checkout tests
`npm run checkout`

### Change the environment
change environment to dev or prod in `.env` file__
.env was used because the test was setup on my Windows machine and only .env would work

### Create Reports
`npx marge  ./report/{result_json_file_name}`

### Babel config
babel was used to setup the .env file so that it would be a project-wide configuration, and to make the test run smoother.



