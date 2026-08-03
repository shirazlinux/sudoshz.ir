#!/usr/bin/bash
# Push ShirazLinux source (Publii input) to remotes.
# Branch: selfhost-database
# Remotes: origin (libremobileos), github (shirazlinux/sudoshz.ir)

set -e
cd "$(dirname "$0")"

if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "this directory is not under version control"
    exit 1
fi

BRANCH="selfhost-database"

echo "Pushing branch: $BRANCH"
git push origin "$BRANCH"
echo "successfully pushed to origin"

git push github "$BRANCH"
echo "successfully pushed to github"
