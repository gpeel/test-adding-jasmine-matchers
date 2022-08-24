

npm install karma-jasmine-matchers --save-dev


and add somewhere under ./src a file anything.d.ts containing 

````
/// <reference types="jasmine-expect" />
````

Here in : src/types/jasmine-matchers.d.ts

It gets picked by tsconfig.json

````
  "include": [
    "src/**/*.d.ts"
  ]````
