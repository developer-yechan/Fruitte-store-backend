# πλͺ©μ°¨

[μκ΅¬μ¬ν­](#-μκ΅¬μ¬ν­)

[API λ¬Έμ](#-api-λ¬Έμ)

[νμ€νΈ μΌμ΄μ€](#-νμ€νΈ-μΌμ΄μ€)

[μ»¨λ²€μ](#-μ»¨λ²€μ)

[ERD](#-erd)

[ν΄λ κ΅¬μ‘°](#-ν΄λ-κ΅¬μ‘°)

[ν¨ν€μ§](#-ν¨ν€μ§)

[κΈ°μ  μ€ν](#-κΈ°μ -μ€ν)

# π© Fruitte Store service

** νλ£¨λΌ μ€ν μ΄ μλΉμ€ API **


# β μκ΅¬μ¬ν­

### β κΈ°λ₯ μ€λͺ

- νμ κ°μ, λ‘κ·ΈμΈ
  - jwt κΈ°λ° ν ν° λ°©μ λ‘κ·ΈμΈ μΈμ¦ κ΅¬ν
- μ μ  μ‘°ν, μ μ²΄ μ‘°ν, μμ , μ­μ  ν  μ μμ΅λλ€.
- μν μμ±,μ‘°ν, μ μ²΄ μ‘°ν, μμ , μ­μ  ν  μ μμ΅λλ€. 
- μ£Όλ¬Έ μμ±,μ‘°ν, μ μ²΄ μ‘°ν, μμ , μ·¨μ ν  μ μμ΅λλ€. 
- κ²°μ  μμ±, μ‘°ν, μ μ²΄ μ‘°ν, μ·¨μ ν  μ μμ΅λλ€. 
  -κ²°μ  μμ± λ° μ·¨μλ μΉ΄μΉ΄μ€νμ΄ APIλ₯Ό μ°λνμ¬ κ΅¬ν νμ΅λλ€. 
- μν (μ μ²΄)μ‘°ν μΈμ λͺ¨λ  APIλ λ‘κ·ΈμΈμ ν΄μΌ μμ²­ν  μ μμ΅λλ€.

### β κ΅¬νν μκ΅¬μ¬ν­
- κΈ°λ₯ κ΅¬νμ μν DB μμ± : νμκ΄λ¦¬, μνκ΄λ¦¬, κ²°μ κ΄λ¦¬, μ£Όλ¬Έλ΄μ­ λ±
- DBμ μ λ³΄ μλ ₯, μμ , μ‘°ν, μ­μ λ₯Ό μν REST API κ°λ°
- μ λ³΄ μλ ₯, μμ  μ λ°μ΄ν° νμμ μ ν¨μ±μ κ²μ¬(νμκ°μ, λ‘κ·ΈμΈ)
- REST APIμμ λ²μ΄λ Param λλ μμ²­ μ€λ₯μ λν μλ΅μ²λ¦¬
- μ μ λ μ΄μ©μ, κ΄λ¦¬μλ‘ λλμ΄ μμΌλ©° μν λ° κ²°μ , μ£Όλ¬Έμ κ΄λ¦¬μλ§ μλ ₯, μμ , μ­μ  κ°λ₯
  - μ΄μ©μλ μνμ λνμ¬ (μ μ²΄)μ‘°νλ§ ν  μ μμ΅λλ€.
  - μ΄μ©μλ μ£Όλ¬Έμ λνμ¬ κ²°μ  νμλ (μ μ²΄)μ‘°νλ§ ν  μ μμ΅λλ€.
  - μ΄μ©μλ κ²°μ μ λνμ¬ μμ± λ° μ·¨μλ§ ν  μ μμ΅λλ€.

# π API λ¬Έμ

npm start ν http://localhost:10000/api-docs 

[fruitte_store_swagger.pdf](https://github.com/developer-yechan/Fruitte-store-backend/files/9747498/fruitte_store_swagger.pdf)


# π νμ€νΈ μΌμ΄μ€

- μΆκ° μμ 


# π‘ μ»¨λ²€μ

### β camelCase / PascalCase

- **νμΌ, μμ±μ, λ³μ, λ©μλλͺ**μ **camelCase**λ₯Ό μ¬μ©ν©λλ€.
- **ν΄λμ€λͺ**μ **PascalCase**λ₯Ό μ¬μ©ν©λλ€.

### β Lint κ·μΉ

| λ€μ¬μ°κΈ° 2μΉΈ | ν­ μ¬μ© x |
| --- | --- |
| double quote μ¬μ©. | commonJS μ¬μ© |
| λ§μ§λ§ μ½€λ§ μ¬μ© | νμ€ μ΅λ κΈμμ: 80 |
| varλ μ¬μ©νμ§ μμ΅λλ€. | μΈλ―Έ μ½λ‘  μ¬μ©μ νμ©ν©λλ€. |


### β Git commit

![image](https://user-images.githubusercontent.com/80232260/188366205-84d8a796-3c51-4eb0-bb29-3a61c96bb047.png)

[κΉ μ»€λ° μ»¨λ²€μ μ°Έκ³  μ¬μ΄νΈ](https://overcome-the-limits.tistory.com/entry/νμ-νμμ-μν-κΈ°λ³Έμ μΈ-git-μ»€λ°μ»¨λ²€μ-μ€μ νκΈ°)

# π ERD
![image](https://user-images.githubusercontent.com/99064214/194911379-302c88a9-03c3-4d58-86af-d8e143254ef0.png)

# π ν΄λ κ΅¬μ‘°
![image](https://user-images.githubusercontent.com/99064214/194911461-e18ed720-a3b8-4244-b416-1fa3c331dcf5.png)


# β ν¨ν€μ§

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

# β‘ κΈ°μ  μ€ν
## Node.js, Express, Mysql, Git, Github, Sequelize, Swagger

