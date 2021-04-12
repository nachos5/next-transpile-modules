#!/bin/bash
# Look at how messy this script is :p

NEXT_VERSION="10.0.9"
ROOT=$(pwd)

echo "==================== NPM ===================="
npm --prefix "$ROOT/src/__tests__/__apps__/npm-basic" install "next@$NEXT_VERSION"

echo "==================== PNPM ===================="
pnpm --dir "$ROOT/src/__tests__/__apps__/pnpm" install "next@$NEXT_VERSION"

echo "==================== WEBPACK 5 ===================="
yarn --cwd "$ROOT/src/__tests__/__apps__/webpack-5/app" add "next@$NEXT_VERSION"

echo "==================== WEBPACK 5 SYMLINKS ===================="
yarn --cwd "$ROOT/src/__tests__/__apps__/webpack-5-symlinks/app" add "next@$NEXT_VERSION"

echo "==================== YARN WORKSPACES ===================="
yarn --cwd "$ROOT/src/__tests__/__apps__/yarn-workspaces/app" add "next@$NEXT_VERSION"

echo "==================== YARN WORKSPACES SYMLINKS ===================="
yarn --cwd "$ROOT/src/__tests__/__apps__/yarn-workspaces-symlinks/app" add "next@$NEXT_VERSION"
