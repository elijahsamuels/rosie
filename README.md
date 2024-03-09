A webpage for my pup pup, Rosie.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### commit steps
git add .
git commit -m 'your message'
git push && git push git@gitlab.com:elijahsamuels/rosie.git

the above works. testing the .git/config file

wow, so that works. 
by changing the .git/config file to include BOTH repos:

```
[remote "origin"]
	url = https://github.com/elijahsamuels/rosie.git
	url = https://gitlab.com/elijahsamuels/rosie.git
```

you can use `git push` to push to both repos (Github & Gitlab) in one command