HOMEDIR = $(shell pwd)
GITDIR = /var/repos/slack-gis.git

test:
	node tests/basictests.js

start:
	psy start -n slack-gis -- node slack-gis.js

stop:
	psy stop slack-gis || echo "Non-zero return code is OK."

sync-worktree-to-git:
	git --work-tree=$(HOMEDIR) --git-dir=$(GITDIR) checkout -f

npm-install:
	cd $(HOMEDIR)
	npm install
	npm prune

post-receive: sync-worktree-to-git npm-install stop start

pushall:
	git push origin master && git push server master

