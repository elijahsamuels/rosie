A webpage for my pup pup, Rosie.
https://rosiethebatdog.netlify.app/

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

### Gitlab pipeline jobs

- test
	- unit
		- runs component tests
	- e2e
		- runs end-to-end tests: currently nothing
	- integration
		- runs integration tests: currently nothing

- monitor
	- accessibility
		- When this job finishes successfully, the artifact (file to download) is located in the job logs, and looks simliar to this: `location=https://gitlab.com/api/v4/jobs/6357625373/artifacts?artifact_format=raw&artifact_type=accessibility`. Once the download is complete, add the extension '.zip' and uncompress. 
	- lighthouse
		- currently not working

- deploy
	- currently nothing
	- need to add a way to get this to automatically deploy to a host. Cloudflare?


### TODO:
- pages/components to add:
	- tricks to learn
- add server (or something) to store state of likes

- add more CSS to TrickCards
	- something onHover, active, etc...


- Pipeline TODOS 
	- Auto Secret Detection
		- https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates/Jobs/Secret-Detection.latest.gitlab-ci.yml
	- Auto Dependency Scanning
		- https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates/Jobs/Dependency-Scanning.gitlab-ci.yml
	- Auto SAST (Static Application Security Testing)
		- https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.gitlab-ci.yml
	- Auto DAST (Dynamic Application Security Testing)
		- https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates/Jobs/DAST-Default-Branch-Deploy.gitlab-ci.yml
	- Auto Deploy
		- https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates/Jobs/Deploy.latest.gitlab-ci.yml
