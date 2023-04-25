# Сalculate md5 of file using npm modules

<h2>Version 1.0</h2>

<h2>What is it?</h2>

An <strong>Сalculate md5 of file using only build-in Node.js modules</strong> program is program, which takes a filename as an argument and writes the data from the file as a hash to CLI.

<h2>How to run the program?</h2>

If you want to run this program, you need install
node.js packet.
After you should write in terminal </br>

`node index.js SomeInputText.txt`

<h2>Run result example</h2>

```
`node index.js SomeInputText.txt`

SomeInputText: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Cli: 01aad0e51fcd5582b307613842e4ffe5
Pipeline succeeded.
```
<h2>Use npm exec</h2>

If you don't want download some packages, you can use npm exec.

<h3>For example</h3>

`npm exec md5-file fileName.txt`

