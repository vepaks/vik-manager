# ВиК Мениджър
#### Учебен проект за защита на ReactJS - октомври 2023
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaSript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

[![Feature-Sliced Design][shields-fsd-domain]](https://feature-sliced.design/)

[shields-fsd-domain]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&color=F2F2F2&labelColor=262224&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dKxCQAgDETR0w2cws0cys2cwhEUBbsggikCuVekDHwSQFlYo7Q+8KnmtHdFWMdk2cl5wSsbxGSZw8dm8pX9ZHUTMBUgGU2F718AAAAASUVORK5CYII=

![img](https://github.com/vepaks/vik-manager/blob/main/public/img/screen.png)


## Идеята
1. При регистрация ВиК служителят получава уникален референтен номер. 
2. Потребителят с помощта на този ref номер може да изпраща снимки и данни от водомера.
3. В апп-а ВиК служителят може да следи и организира данните от потреблението на всички поверени адреси.
4. ВиК служителят може да изпраща специфични масови и индивидуални съобщения от апп-а към телеграм бота.
5. С помощта на апп-а служителят може да изчислява потреблението на водата за определен адрес.
6. Служителят може да вижда историята на постъпилите данни за всеки адрес.
7. Служителят може да запазва снимки и документация на сървъра на приложението.

### Настройки и инсталиране

За правилнта работа по приложението е необходимо да имате MongoDb, Telegram, NodeJS
Вземете нов API_KEY от BotFatherBot в Telegram.

* Клонирай репо-то
```bash
git clone https://github.com/vepaks/vik-manager.git
```
* Влез в директорията на сървъра и инсталирай зависимостите:
```bash
cd server
npm install

Пусни сървъра за разработка

npm run dev
```
* След това влез в директорията на клиента и инсталирай зависимостите:
```bash
cd client
npm install

Пусни клиентският сървър за разработка

npm start
```

## API

#### Регистрация
```http
  POST /api/signup
```
| Параметър | Тип     |
| :-------- | :------- |
| `email` | `string` |
| `password` | `string` | 

#### Вход
```http
  POST /api/login
```
| Параметър | Тип     |
| :-------- | :------- |
| `email` | `string` |
| `password` | `string` | 

#### Създаване на файлове в сървъра
```http
  POST /api/files
```
| Параметър | Тип     |
| :-------- | :------- |
| `name` | `string` |
| `type` | `string` | 

#### Достъпване на файлове от сървъра 
```http
  GET /api/files
```
| Параметър | Тип     |
| :-------- | :------- |
| `parent` | `string` |

#### Достъпване на данни от сървъра
```http
  GET /api/data
```
| Параметър | Тип     |
| :-------- | :------- |
| `parent` | `string` |

## Architecture

![img](https://github.com/vepaks/vik-manager/blob/main/public/img/fsd.png)