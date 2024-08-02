# 🔥 Nextjs Students Table

**This component is equipped with a beautiful user interface, complete with pagination, search functionality, and a full range of basic CRUD operations.**

![Table](/public/screenshots/table.png)

The student creation functionality utilizes React's Context API to provide a seamless user experience. 
Notifications are displayed to confirm successful creation, and the main component automatically refreshes to reflect the updated data.

![Table](/public/screenshots/create.png)
![Table](/public/screenshots/dialog.png)

This is a simple build of a crud, using nextjs and a [node server](https://github.com/kzares-dev/express-students-crud)

## 🔥 Features

- [x] Search
- [x] Server Actions
- [x] Notifications
- [x] Paginations
- [x] Context API
- [x] Typescript

## Project Structure

```bash
/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── public/
├── styles/
│   ├── globals.scss
├── lib/
│   ├── actions/
│   ├── constants.ts
│   ├── context.tsx
│   ├── types.ts
│
└── package.json
```

## 💻 Tech Stack

**Main Framework** - [Next](https://nextjs.org)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [SCSS](https://sass-lang.com/)  
 **Context** - [React Context API]
**Code Formatting** - [Prettier](https://prettier.io/)

##  👨🏻‍💻 Running Locally

You can start using this project locally by running the following command in your desired directory:

```bash
git clone https://github.com/kzares-dev/students-nextjs-demo.git ./
npm install
npm run dev
```
