# NextJs Tutorial for Beginners

## ⚡ Installation ⚡

### ⚙️ ️How to Set Up a Next.js Project

- To start, create a folder and open it in your favorite code editor.
- Next, open the terminal and run this command to create a new Next.js project:
```jsx
npx create-next-app@latest ./
```
> The `./` means the current directory where your project will be created.
> The `@latest` means the latest version of Next.js.
- Then, you will be asked to choose some options:
  - Would you like to use TypeScript? (y/N)
    - TypeScript is a version of JavaScript that adds static type definitions to the language. This can help you catch errors and write better code. I chose Yes for this option.
  - Would you like to use ESLint with this project? (Y/n)
    - ESLint is a tool that checks your JavaScript code for common mistakes and style issues. It can help you improve your code quality and consistency. I chose No for this option.
  - Would you like to use Tailwind CSS with this project? (y/N)
    - Tailwind CSS is a framework that provides you with many ready-made CSS classes that you can use to style your components. It allows you to customize your design without writing too much CSS code. I chose Yes for this option.
  - Would you like to use `src/` directory with this project? (y/N)
    - This is a folder structure that is recommended when you have a large project. It helps you organize your files and folders better. I chose No for this option.
    - If you choose Yes, it will create a `src/` folder and move all the files into it.
  - Would you like to use experimental `app/` directory with this project? (Y/n)
    - This is a new feature in Next 13.4 that adds some benefits to your project, such as faster builds and better performance. I choose Yes for this option.
  - What import alias would you like to configure?
    - I choose yes for this option and then it will ask me to enter the alias name. I entered `@` for this option.
    - >This is an optional feature that lets you use shorter paths when importing modules in your project. For example, instead of writing `import Component from '../../components/Component'`, you can write `import Component from '@components/Component'`. I just pressed Enter for this option.
> **After that, it will install all the dependencies and create a new Next.js project for you.**
