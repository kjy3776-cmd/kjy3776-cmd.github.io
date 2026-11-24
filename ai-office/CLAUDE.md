# 숲 사무실 개발 지도

사용법은 README.md. 이 파일은 코드를 고칠 때 지킬 규칙만 담습니다.

## 구조
- `server.js` — HTTP + SSE 서버, claude CLI 실행(`-p --output-format stream-json`), 작업 큐·위임, 인증, 백업. 외부 패키지 없음.
- `agents.js` — 직원 명단·역할·공통 규칙·팀장 위임 형식(```delegate```, ```choices```).
- `public/` — 화면. `scene.js`(코드로 그린 픽셀 숲·스프라이트), `app.js`(UI), `app.css`.
- `data/` — 실행 중 생성(대화, 상태, PIN). 커밋 금지.

## 규칙
- [추가된 규칙]: Node 기본 모듈만 사용하고 npm 의존성을 추가하지 않는다. 맥·윈도우에서 설치 없이 돌아가야 한다.
- [추가된 규칙]: 윈도우에서는 claude를 `shell: true`로 실행하므로 인자는 `quoteWin`을 거치고, 프롬프트는 stdin, 시스템 프롬프트는 `--append-system-prompt-file`로 넘긴다.
- [추가된 규칙]: 배열에서 꺼내는 값(`shift()` 등)은 `find` 콜백 밖에서 먼저 변수에 담는다.
  [업데이트 이유]: `find(t => t.id === queue.shift())`가 비교마다 큐를 비워 첫 작업 외에는 실행되지 않던 버그.
- [추가된 규칙]: 직원 기본 권한에서 git commit·push·reset과 rm -rf를 막아 둔다. 블로그는 main 푸시가 곧 공개 배포다.
- [추가된 규칙]: 파일 제공(`/api/file`)은 `insideAllowed`로 작업 폴더·업로드 폴더 안만 허용한다.
- [추가된 규칙]: 그림·캐릭터는 코드로 그린 오리지널만 쓴다. 기존 게임의 이름·캐릭터·그림체를 따라 하지 않는다.
- 고친 뒤 확인: `node --check server.js public/*.js`, 서버 실행 후 Playwright로 데스크톱(1440px)·휴대폰(390px) 화면과 콘솔 오류 확인, 실제 작업 1건 실행.
