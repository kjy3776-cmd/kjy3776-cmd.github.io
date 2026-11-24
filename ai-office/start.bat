@echo off
chcp 65001 >nul
REM 윈도우: 더블클릭으로 숲 사무실 열기
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js가 필요해요: https://nodejs.org 에서 LTS 버전을 설치한 뒤 다시 실행하세요. & pause & exit /b 1)
where claude >nul 2>nul || (echo Claude Code가 필요해요. 명령 프롬프트에서: npm install -g @anthropic-ai/claude-code 설치 후 claude 를 한 번 실행해 로그인하세요. & pause & exit /b 1)
start "" http://localhost:4747
node server.js
pause
