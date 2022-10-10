# 🔗목차

[요구사항](#-요구사항)

[API 문서](#-api-문서)

[테스트 케이스](#-테스트-케이스)

[컨벤션](#-컨벤션)

[ERD](#-erd)

[폴더 구조](#-폴더-구조)

[패키지](#-패키지)

[기술 스택](#-기술-스택)

# 🚩 Fruitte Store service

** 프루떼 스토어 서비스 API **


# ✅ 요구사항

### ✔ 기능 설명

- 회원 가입, 로그인
  - jwt 기반 토큰 방식 로그인 인증 구현
- 유저 조회, 전체 조회, 수정, 삭제 할 수 있습니다.
- 상품 생성,조회, 전체 조회, 수정, 삭제 할 수 있습니다. 
- 주문 생성,조회, 전체 조회, 수정, 취소 할 수 있습니다. 
- 결제 생성, 조회, 전체 조회, 취소 할 수 있습니다. 
  -결제 생성 및 취소는 카카오페이 API를 연동하여 구현 했습니다. 
- 상품 (전체)조회 외에 모든 API는 로그인을 해야 요청할 수 있습니다.

### ✔ 구현한 요구사항
- 기능 구현을 위한 DB 생성 : 회원관리, 상품관리, 결제관리, 주문내역 등
- DB에 정보 입력, 수정, 조회, 삭제를 위한 REST API 개발
- 정보 입력, 수정 시 데이터 형식의 유효성을 검사(회원가입, 로그인)
- REST API에서 벗어난 Param 또는 요청 오류에 대한 응답처리
- 유저는 이용자, 관리자로 나뉘어 있으며 상품 및 결제, 주문은 관리자만 입력, 수정, 삭제 가능
  - 이용자는 상품에 대하여 (전체)조회만 할 수 있습니다.
  - 이용자는 주문에 대하여 결제 후에는 (전체)조회만 할 수 있습니다.
  - 이용자는 결제에 대하여 생성 및 취소만 할 수 있습니다.

# 📑 API 문서

npm start 후 http://localhost:10000/api-docs 

[fruitte_store_swagger.pdf](https://github.com/developer-yechan/Fruitte-store-backend/files/9747498/fruitte_store_swagger.pdf)


# 📜 테스트 케이스

- 추가 예정


# 💡 컨벤션

### ✔ camelCase / PascalCase

- **파일, 생성자, 변수, 메서드명**은 **camelCase**를 사용합니다.
- **클래스명**은 **PascalCase**를 사용합니다.

### ✔ Lint 규칙

| 들여쓰기 2칸 | 탭 사용 x |
| --- | --- |
| double quote 사용. | commonJS 사용 |
| 마지막 콤마 사용 | 한줄 최대 글자수: 80 |
| var는 사용하지 않습니다. | 세미 콜론 사용을 허용합니다. |


### ✔ Git commit

![image](https://user-images.githubusercontent.com/80232260/188366205-84d8a796-3c51-4eb0-bb29-3a61c96bb047.png)

[깃 커밋 컨벤션 참고 사이트](https://overcome-the-limits.tistory.com/entry/협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기)

# 🗝 ERD
![image](https://user-images.githubusercontent.com/99064214/194911379-302c88a9-03c3-4d58-86af-d8e143254ef0.png)

# 🗂 폴더 구조
![image](https://user-images.githubusercontent.com/99064214/194911461-e18ed720-a3b8-4244-b416-1fa3c331dcf5.png)


# ⚙ 패키지

```json
{
  "name": "fruitte-store-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/developer-yechan/Fruitte-store-backend.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/developer-yechan/Fruitte-store-backend/issues"
  },
  "homepage": "https://github.com/developer-yechan/Fruitte-store-backend#readme",
  "dependencies": {
    "axios": "^0.27.2",
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "express": "^4.18.1",
    "express-validator": "^6.14.2",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.4",
    "morgan": "^1.10.0",
    "mysql2": "^2.3.3",
    "sequelize": "^6.21.4",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.18.9",
    "dotenv": "^16.0.2",
    "eslint": "^8.23.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.19",
    "prettier": "^2.7.1",
    "sequelize-cli": "^6.4.1",
    "supertest": "^6.2.4",
    "swagger-jsdoc": "^6.2.5",
    "swagger-ui-express": "^4.5.0"
  }
}

```

# ⚡ 기술 스택
## Node.js, Express, Mysql, Git, Github, Sequelize, Swagger

