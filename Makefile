# Node Package Manager Environment Variables
NODE_PORT ?= 3000
NODE_HOST ?= 0.0.0.0

# Git Environment Variables
MAIN_BRANCH ?= PROD/main
FUNCTION_BRANCH ?= DEV/FUNCTION/Default
FUNCTION_DEFAULT_BRANCH ?= DEV/FUNCTION/Default
DEV_BRANCH ?= DEV/RELEASE/v1.0.0
RELEASE_BRANCH ?= RELEASE/v1.0.0-beta
FUNCTION_COMMIT_MSG ?= config: Update configuration files in $(FUNCTION_BRANCH)
DEV_COMMIT_MSG ?= config: Update configuration files in $(DEV_BRANCH)
RELEASE_COMMIT_MSG ?= config: Update configuration files in $(RELEASE_BRANCH)

# Git Commands
git-commit-function:
	git fetch origin
	git checkout $(FUNCTION_BRANCH)
	git pull origin $(FUNCTION_BRANCH)
	git add .
	git commit -m "$(FUNCTION_COMMIT_MSG)"
	git push origin $(FUNCTION_BRANCH)

git-commit-dev:
	git fetch origin
	git checkout $(DEV_BRANCH)
	git pull origin $(DEV_BRANCH)
	git add .
	git commit -m "$(DEV_COMMIT_MSG)"
	git push origin $(DEV_BRANCH)

git-commit-release:
	git fetch origin
	git checkout $(RELEASE_BRANCH)
	git pull origin $(RELEASE_BRANCH)
	git add .
	git commit -m "$(RELEASE_COMMIT_MSG)"
	git push origin $(RELEASE_BRANCH)

git-merge-function-to-function:
	git fetch origin
	git checkout $(FUNCTION_BRANCH)
	git pull origin $(FUNCTION_BRANCH)
	git add .
	git commit -m "$(FUNCTION_COMMIT_MSG)"
	git push origin $(FUNCTION_BRANCH)
	git fetch origin
	git checkout $(FUNCTION_DEFAULT_BRANCH)
	git pull origin $(FUNCTION_DEFAULT_BRANCH)
	git merge $(FUNCTION_BRANCH) --no-edit
	git push origin $(FUNCTION_DEFAULT_BRANCH)
	git checkout $(FUNCTION_BRANCH)

git-merge-dev: 
	git fetch origin
	git checkout $(DEV_BRANCH)
	git pull origin $(DEV_BRANCH)
	git merge $(FUNCTION_BRANCH) --no-edit
	git push origin $(DEV_BRANCH)
	git checkout $(FUNCTION_BRANCH)

git-merge-release: 
	git fetch origin
	git checkout $(RELEASE_BRANCH)
	git pull origin $(RELEASE_BRANCH)
	git merge $(DEV_BRANCH) --no-edit
	git push origin $(RELEASE_BRANCH)
	git checkout $(FUNCTION_BRANCH)

git-merge-main: 
	git fetch origin
	git checkout $(MAIN_BRANCH)
	git pull origin $(MAIN_BRANCH)
	git merge $(RELEASE_BRANCH) --no-edit
	git push origin $(MAIN_BRANCH)
	git checkout $(FUNCTION_BRANCH)

git-merge-dev-from-function: git-commit-function git-merge-dev

git-merge-public: git-merge-release git-merge-main

git-deploy-public: git-merge-function-to-function git-merge-dev git-merge-public

git-deploy-function: git-merge-dev-from-function git-merge-public

git-deploy-dev: git-commit-dev git-deploy-public

# Node Package Manager Commands
install:
	npm install

cleanup:
	npx nuxi cleanup
	rm -rf .nuxt node_modules package-lock.json

reinstall: cleanup install

run-dev:
	npm run dev

run-dev-host:
	npm run dev -- --host ${NODE_HOST} --port=$(NODE_PORT)

build:
	npm run build

preview:
	npm run preview

generate:
	npm run generate

generate-dev:
	npm run generate:dev

dev: install run-dev-host

production: build preview