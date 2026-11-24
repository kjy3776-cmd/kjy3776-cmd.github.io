#!/bin/bash
# 맥: 더블클릭으로 숲 사무실 열기
cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$HOME/.claude/local:/opt/homebrew/bin:/usr/local/bin:$PATH"
if ! command -v node >/dev/null 2>&1; then echo "Node.js가 필요해요: https://nodejs.org 에서 LTS 버전을 설치한 뒤 다시 실행하세요."; read -r; exit 1; fi
if ! command -v claude >/dev/null 2>&1; then echo "Claude Code(claude 명령)가 필요해요. 터미널에서: npm install -g @anthropic-ai/claude-code  설치 후 'claude' 를 한 번 실행해 로그인하세요."; read -r; exit 1; fi
(sleep 2; open "http://localhost:4747") &
node server.js
