# nls - Node.js Command Line Tool

This project is a small Node.js-based command line application called nls. It is a custom implementation of the ls command, designed to provide practice with JavaScript and Node.js. The app lists files and directories in the current directory, with folders and files color-coded using the Chalk library for improved readability.

### Features

1. **Custom Command:** The application introduces a custom command `nls` to list directory contents.
2. **Color Coding:** Folders are displayed in red, and files are displayed in green.
3. **Node.js Integration:** The tool is built using Node,js v22.13.0.
4. **Chalk Library:** Utilizes **Chalk v4.1.0** for coloring terminal output.

### Installation

To use `nls`, follow these steps:

1. Clone the repository or download the porject files.
2. Navigate to the project directory in your terminal.
3. Install dependencies:

```
npm install
```

4. Ensure Node.js v22.13.0 is installed on your system.

### Usage

1. To execute the tool, use the command `nls` in your terminal. Ensure the current directory contains the project files and dependencies.

```
nls
```

2. The command will output the contents of the current directory:

- Folders are displayed in red.
- Files are displayed in green.

### Key Files

- `index.js`: The main script file for the application.
- `package.json`: Contains project metadata and the `bin` section:

```json
"bin":{
    "nls" : "index.js"
}
```

This setup allows the `nls` command to execute the `index.js` file.

### Learning Goals

This project was created to:

- Practice using Node.js to build command line tools.
- Explore JavaScript file system modules for directory operations.
- Learn how to use external libraries like Chalk for enhancing terminal output.

### dependencies

- ![Node.js v22.13.0](https://nodejs.org/en)
- ![Chalk v4.1.0](https://www.npmjs.com/package/chalk)
