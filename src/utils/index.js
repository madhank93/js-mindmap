import { Model } from "@blink-mind/core";

export const downloadFile = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
};

export function generateSimpleModel() {

    return Model.create({
        "rootTopicKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        "editorRootTopicKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        "focusKey": "a9f8d9be-7d66-4b3e-941d-429c02913ec5",
        "extData": {
            "TOPIC_REFERENCE": {
                "reference": {}
            }
        },
        "topics": [
            {
                "key": "4567082c-b57b-45f4-8c04-168f9a2f123f",
                "parentKey": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "subKeys": [
                    "f548ba3e-55f6-484d-8289-858f8fd28289"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Boolean"
                    },
                    {
                        "type": "DESC",
                        "data": "The boolean type has only two values: **true** and **false**\n\n```\nconsole.log(typeof(true)); // \"boolean\"\nconsole.log(typeof(false)); // \"boolean\"\n\n```\n\n```\nlet nameFieldChecked = true;\nlet ageFieldChecked = false;\n\nconsole.log(\"Name field checked: \", nameFieldChecked, \" and \" , \"Age field checked: \", ageFieldChecked);\n// Name field checked:  true  and  Age field checked:  false\n\n```\n"
                    }
                ]
            },
            {
                "key": "a1649782-ec29-4030-bb2d-d6044103cf10",
                "parentKey": "f8750599-32db-4fb3-829e-0673887df2c2",
                "subKeys": [
                    "dfb39c55-dfce-4d5a-88a7-5fd066288121"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Function\nexpression"
                    },
                    {
                        "type": "DESC",
                        "data": "A **function expression** is determined by a function keyword, followed by an optional function name \\(anonymous\\), a list of parameters in a pair of parenthesis \\(para1, ..., paramN\\) and a pair of curly braces \\{ ... \\} that delimits the body code.\n\n**example 1: named function**\n```\nconst count = function arrayLength(array) {\n  return array.length;\n}\n\ncount([5, 7, 8]); // output: \"3\"\narrayLength([5, 7, 8]); // ReferenceError: arrayLength is not defined\n\n```\n\n**example 2: anonymous function**\n```\nconst count = function(array) {\n  return array.length;\n}\n\ncount([5, 7, 8]); // output: \"3\"\n\n```\n\n**example 3: Error stack trace**\n```\n// Ex 1:\nconst count = function arrayLength(array) {\n    throw new Error(\"Custom error\")\n}\n\ncount([5, 7, 8]);\n\nError: Custom error\n    at arrayLength (/Users/git/other/js-season-2/programming-basics/test.js:2:11)\n    at Object.<anonymous> (/Users/git/other/js-season-2/programming-basics/test.js:5:1)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\n\n// Ex 2:    \nconst count = function (array) {\n    throw new Error(\"Custom error\")\n}\n\ncount([5, 7, 8]);\n\nError: Custom error\n    at count (/Users/git/other/js-season-2/programming-basics/test.js:2:11)\n    at Object.<anonymous> (/Users/git/other/js-season-2/programming-basics/test.js:5:1)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\n\n```\n"
                    }
                ]
            },
            {
                "key": "9677e53a-05a4-4bd6-9010-f10826426bb6",
                "parentKey": "3854fdd8-7de4-429c-b73d-2519cbf63781",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "else If Statement"
                    },
                    {
                        "type": "DESC",
                        "data": "**if** statement can be extended with an **else if** statement, which adds another conditional with its own block, it is a way to chain on extra choices/outcomes.\n\n**Syntax:**\n\n```\nif (condition) {\n     // condition is true this block will be executed\n     // no futher conditions will be checked\n} else if (condition) {\n      // when a previous block condition has been failed\n      // this(else if) block condition is evaluted\n      // when a condition passed this block will be executed\n} else {\n      //when all condition has been failed this block will be executed\n}\n\n```\n\n**example:**\n\n```\nif (false) {\n      console.log(\"if blocked executed\");\n} else if (2 < 5 && 3 < 5 ) {\n      console.log(\"else if blocked executed\");\n} else {\n      console.log(\"else blocked executed\");\n}\n\n```\n"
                    }
                ]
            },
            {
                "key": "7662833c-7ece-4668-a37b-4e11820503b4",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [
                    "9c9627b1-6bba-4135-955e-608e6a937ed1"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Function scope"
                    },
                    {
                        "type": "DESC",
                        "data": "A function in JavaScript defines a scope for variables declared using **var**, **let** and **const**.\n\n**Example 1:**\n```\nfunction run() {\n  // \"run\" function scope\n  var message = 'Run, Forrest, Run!';\n  console.log(message); // 'Run, Forrest, Run!'\n}\n\nrun();\nconsole.log(message); // throws ReferenceError\n\n```\n\n**run\\(\\)** function body creates a scope. The variable message is accessible inside of the function scope, but inaccessible outside.\n\n**Exmaple 2:**\n```\nfunction run() {\n  // \"run\" function scope\n  const two = 2;\n  let count = 0;\n  function run2() {}\n\n  console.log(two);   // 2\n  console.log(count); // 0\n  console.log(run2);  // function\n}\n\nrun();\nconsole.log(two);   // throws ReferenceError\nconsole.log(count); // throws ReferenceError\nconsole.log(run2);  // throws ReferenceError\n\n```\n\n**Exmaple 3**:\n\nVar is **functional\\-scoped**\n\n```\nvar fullMoon = true;\n\n// Use var to initialize a variable\nvar species = \"human\";\n\nif (fullMoon) {\n  // Attempt to create a new variable in a block\n  var species = \"werewolf\";\n  console.log(`${species}.`); // werewolf\n}\n\nconsole.log(`${species}.`); // werewolf\n\n```\n\nBoth the **global variable** and the **block\\-scoped variable** end up with the same value, **werewolf**. This is because instead of creating a new local variable with var, it is reassigning the same variable in the same scope."
                    }
                ]
            },
            {
                "key": "c1e621c4-ae65-40d0-ad48-650368d181d0",
                "parentKey": "29f23365-fcf6-4f8f-8060-811df84e4770",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "d4cb9863-ba6c-4ea6-903e-44accf4a5b7b",
                    "29f23365-fcf6-4f8f-8060-811df84e4770",
                    "a3055667-8217-484e-aae8-728cab93135c",
                    "65199906-ca55-4ae8-bd9f-a4a08cbc2432",
                    "a70b7d9d-ea0f-49c3-a488-ddbceebe85d8"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Loops"
                    },
                    {
                        "type": "DESC",
                        "data": ""
                    }
                ]
            },
            {
                "key": "dbc9a664-bff0-4263-811c-cb91470ce277",
                "parentKey": "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Object"
                    },
                    {
                        "type": "DESC",
                        "data": "**Object** : typeof instance === \"object\". It is used to store collections of data and more complex entities.\n\n```\nconsole.log(typeof({})); // \"object\"\nconsole.log(typeof([])); // \"object\" Arrays aren’t primitive, they are objects\nconsole.log(typeof(new Map())); // \"object\"\nconsole.log(typeof(new Date())); // \"object\"\n\n```\n\nSpecial non\\-data but Structural type for any constructed object instance also used as data structures: \n\n1. new Object, \n1. new Array, \n1. new Map, \n1. new Set, \n1. new WeakMap, \n1. new WeakSet, \n1. new Date and almost everything made with **new** keyword;\n\n\n**Indexed collections**: Arrays and typed Arrays\n\n**Keyed collections**: Maps, Sets, WeakMaps, WeakSets"
                    }
                ]
            },
            {
                "key": "220e873a-0a0b-4820-9434-42d0727eead5",
                "parentKey": "f8750599-32db-4fb3-829e-0673887df2c2",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Shorthand\nfunction"
                    },
                    {
                        "type": "DESC",
                        "data": "**Shorthand** method definition can be used in a method declaration on object literals and ES2015 classes. You can define them using a function name, followed by a list of parameters in a pair of parenthesis \\(para1, ..., paramN\\) and a pair of curly braces \\{ ... \\} that delimits the body statements.\n\n```\nconst collection = {\n  items: [],\n  add(...items) {\n    this.items.push(...items);\n  },\n  get(index) {\n    return this.items[index];\n  }\n};\ncollection.add('C', 'Js', 'PHP', 'Java');\nconsole.log(collection.get(1)) //output: \"Js\"\n\n```\n\n**add\\(\\)** and **get\\(\\)** methods in **collection** object are defined using short method definition. These methods are called as usual: **collection\\.add\\(...\\)** and **collection\\.get\\(...\\)**."
                    }
                ]
            },
            {
                "key": "a70b7d9d-ea0f-49c3-a488-ddbceebe85d8",
                "parentKey": "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "do while"
                    },
                    {
                        "type": "DESC",
                        "data": "**do\\-while** loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is checked.\n\n```\nlet i = 10;\ndo {\n  console.log(\"The number is \" + i);\n  i++;\n}\nwhile (i < 5);\n\n// output: \"The number is 10\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "d4cb9863-ba6c-4ea6-903e-44accf4a5b7b",
                "parentKey": "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "for"
                    },
                    {
                        "type": "DESC",
                        "data": "The **for** loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times.\n\n**Syntax:**\n\n```\nfor(initialization; condition; final-expression) {\n    // Code to be executed\n}\n\n```\n\n* **initialization** — it is used to initialize the counter variables, and evaluated once unconditionally before the first execution of the body of the loop.\n* **condition** — it is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute. If it evaluates to false, the execution of the loop ends.\n* **final\\-expression** — this is always evaluated \\(or run\\) each time the loop has gone through a full iteration. It usually serves to increment \\(or in some cases decrement\\) the counter variable.\n\n\n**example 1**:\n\n```\nfor (let i = 0; i < 10; i++) {\n  console.log(\"The number is \" + i);\n}\n\n// Output:\n// \"The number is 0\"\n// \"The number is 1\"\n// \"The number is 2\"\n// \"The number is 3\"\n// \"The number is 4\"\n// \"The number is 5\"\n// \"The number is 6\"\n// \"The number is 7\"\n// \"The number is 8\"\n// \"The number is 9\"\n\n```\n\n**example 2: **skipping current execution of loop using **continue** statement\n\n```\nfor (let i = 0; i < 10; i++) {\n  if(i%2===0){\n    continue;\n  }\n  console.log(\"The number is \" + i);\n}\n\n// Output:\n// \"The number is 1\"\n// \"The number is 3\"\n// \"The number is 5\"\n// \"The number is 7\"\n// \"The number is 9\"\n\n```\n\n**example 3**: terminating current execution flow of the loop using **break** statement\n\n```\nfor (let i = 0; i < 10; i++) {\n  if(i===5){\n    break;\n  }\n  console.log(\"The number is \" + i);\n}\n\n// Output:\n// \"The number is 0\"\n// \"The number is 1\"\n// \"The number is 2\"\n// \"The number is 3\"\n// \"The number is 4\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "parentKey": null,
                "subKeys": [
                    "44213600-22aa-4972-aa99-eec27b840064",
                    "252c6937-bd93-4233-90cb-333938667c72",
                    "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                    "3854fdd8-7de4-429c-b73d-2519cbf63781",
                    "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                    "f8750599-32db-4fb3-829e-0673887df2c2"
                ],
                "collapse": false,
                "style": "{\"contentStyle\":{\"background\":\"#f8e71c\"}}",
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Js"
                    },
                    {
                        "type": "DESC",
                        "data": "JavaScript is a **prototype\\-based**, multi\\-paradigm, single\\-threaded, dynamic language, supporting object\\-oriented, imperative, and declarative \\(e.g. functional programming\\) styles.\n\nIt is a lightweight, interpreted, or just\\-in\\-time compiled programming language. Which involves two phases  \n* Parsing/Compilation, and\n* Execution\\.\n\n"
                    }
                ]
            },
            {
                "key": "a37aef6c-b62c-423c-8124-c18edc14142b",
                "parentKey": "f8750599-32db-4fb3-829e-0673887df2c2",
                "subKeys": [
                    "24a0e9fa-2a33-4e0d-8736-ec434151a6d0"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Generator\nfunction"
                    },
                    {
                        "type": "DESC",
                        "data": "A _**generator**_ is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.\n\n**example 1:** function declaration form _**function\\* <name\\>\\(\\)**_\n\n```\nfunction * generatorFunction() {\n  console.log('This will be executed first.');\n  yield 'Hello, ';\n  console.log('I will be printed after the pause');  \n  yield 'World!';\n}\nconst generatorObject = generatorFunction();\n\nconsole.log(generatorObject.next().value);\n// output:\n// This will be executed first.\n// Hello, \nconsole.log(generatorObject.next().value);\n// output:\n// I will be printed after the pause\n// World!\nconsole.log(generatorObject.next().value);\n// output:\n// undefined\n\n```\n\n**example 2: **function expression form _**function\\* \\(\\)**_\n\n```\nconst indexGenerator = function* () {\n  let index = 0;\n  while(true) {\n    yield index++;\n  }\n};\nconst g = indexGenerator();\nconsole.log(g.next().value); // => 0\nconsole.log(g.next().value); // => 1\n\n```\n\n**example 3: **Shorthand method definition form _**\\*<name\\>\\(\\)**_\n\n```\nconst obj = {\n  *indexGenerator() {\n    var index = 0;\n    while(true) {\n      yield index++;\n    }\n  }\n}\nconst g = obj.indexGenerator();\nconsole.log(g.next().value); // => 0\nconsole.log(g.next().value); // => 1\n\n```\n"
                    }
                ]
            },
            {
                "key": "9c9627b1-6bba-4135-955e-608e6a937ed1",
                "parentKey": "7662833c-7ece-4668-a37b-4e11820503b4",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "d3f7bd55-fe91-45b2-b13e-ea98bb7710d9",
                "parentKey": "10d9744a-f521-4bdf-8933-9c3fb1cfb2c8",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "fc11e9b2-fb2a-4f5d-934e-65c172bb61fa",
                "parentKey": "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Function"
                    },
                    {
                        "type": "DESC",
                        "data": "A function is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, arguments are passed to the function as input, and the function can optionally return a value. \n\nA function in JavaScript is also an **object**.\n\n```\nconsole.log(typeof(x => x * 2)); // \"function\"\nconsole.log(typeof(function(){})); // \"function\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "b31ac6cb-b3c3-4dd2-83a1-6b5b7466d048",
                "parentKey": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Null"
                    },
                    {
                        "type": "DESC",
                        "data": "In JavaScript, null is **not** a “reference to a non\\-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “**nothing**”, “**empty**” or “**value unknown**”.\n\nThe special **null** value does not belong to any of the types described above.\n```\nconsole.log(typeof(null)); // \"object\"\n\n// This is a bug and one that unfortunately can’t be fixed, \n// because it would break existing code.\n// https://2ality.com/2013/10/typeof-null.html\n\n```\n\nIt forms a separate type of its own which contains only the null value:\n```\nlet age = null;\nconsole.log(age); // null\n\n```\n\n"
                    }
                ]
            },
            {
                "key": "24a0e9fa-2a33-4e0d-8736-ec434151a6d0",
                "parentKey": "a37aef6c-b62c-423c-8124-c18edc14142b",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "05c8bbd0-fe13-4906-92cf-8507b33954da",
                "parentKey": "252c6937-bd93-4233-90cb-333938667c72",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "var"
                    },
                    {
                        "type": "DESC",
                        "data": "Var is **function** scope \\(will see more of that in **Scopes & Closures**\\). Value stored in it can be reassigned.\n\nTo declare or create a varaible\n```\nvar message;\n\n```\n\nAssign a data into it by using the assignment operator =:\n```\nmessage = 'Hello';\n\n```\n\nCombine the variable _declaration_ and _assignment_ into a single line\n```\nvar message = 'Hello!';\n\n```\n\nDeclare multiple variables in one line\n```\nvar user = 'John', age = 25, message = 'Hello';\n\n```\n\nReassigning a value\n```\nvar userName = \"Bruce\"\nuserName = \"Wayne\"\n\nconsole.log(userName) // \"Wayne\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "a44085f3-06c0-4910-9787-af5b20c0709b",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [],
                "collapse": false,
                "style": "{\"contentStyle\":{\"background\":\"#9b9b9b\"}}",
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Module scope"
                    },
                    {
                        "type": "DESC",
                        "data": "A module is just a file. One script is one module. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:\n\n* **export** keyword labels variables and functions that should be accessible from outside the current module.\n* **import** allows the import of functionality from other modules.\n\n\nBefore modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.\n\nTo make import/export work, browsers need **<script type=\"module\"\\> **and for NodeJS \\- set **\"type\": \"module\"** in the **package\\.json** or use the **.mjs** extension\\.\n\n**Example 1:**\nFor instance, if we have a file** sayHi\\.js** exporting a function:\n```\n// 📁 sayHi.mjs\nexport function sayHi(user) {\n  console.log(`Hello, ${user}!`);\n}\n\n```\n\n…Then another file may import and use it:\n```\n// 📁 main.mjs\nimport {sayHi} from './sayHi.js';\n\nconsole.log(sayHi); // function...\nsayHi('John'); // Hello, John!\n\n```\n\n**Example 2:**\n\n**circle\\.mjs**\n```\n// \"circle\" module scope\nconst pi = 3.14159;\n\nconsole.log(pi); // 3.14159\n\n// Usage of pi\n\n```\n\n**main\\.mjs**\n```\nimport './circle';\n\nconsole.log(pi); // ReferenceError: pi is not defined\n\n```\n\nThe variable pi is **not accessible** outside of circle module \\(unless explicitly exported using export\\).\n\n**Refference**:\n* [https://hacks.mozilla.org/2018/03/es\\-modules\\-a\\-cartoon\\-deep\\-dive/](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)\n\n"
                    }
                ]
            },
            {
                "key": "a3055667-8217-484e-aae8-728cab93135c",
                "parentKey": "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "for .. of"
                    },
                    {
                        "type": "DESC",
                        "data": "The for\\-of loop is similar to the for\\-in loop because it loops over an object’s elements one by one. Compared to the for\\-in loop, it is newer and automatically uses an iterator.\n\n```\nfor (let i of object) {\n    console.log(i);\n}\n\n```\n\nIf the object is an array, the for\\-of loop will **print out the values** of the array’s indexes in order.\n\n**example 1:**\n\n```\nlet arr = [3, 5, 7];\n    \nfor (let i of arr) {\n  console.log(i);\n}\n\n// output:\n// 3\n// 5\n// 7\n\n```\n\n**example 2:**\n\n```\nconst items = {\n  'first': new Date(),\n  'second': 2,\n  'third': 'test'\n}\n\nfor (let i of items) {\n  console.log(i);\n}\n\n// Output: TypeError: items is not iterable\n\n```\n"
                    }
                ]
            },
            {
                "key": "a9f8d9be-7d66-4b3e-941d-429c02913ec5",
                "parentKey": "f8750599-32db-4fb3-829e-0673887df2c2",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Arrow\nfunction"
                    },
                    {
                        "type": "DESC",
                        "data": "An **arrow function** is defined using a pair of parenthesis that contains the list of parameters \\(param1, param2, ..., paramN\\), followed by a fat arrow =\\> and a pair of curly braces \\{...\\} that delimits the body statements.\n\n**example 1:**\n```\nconst square = (value) => {\n  return value * value\n}\nsquare(10); // output: \"100\"\n\n```\n\n**example 2:**\n* When the arrow function has only one parameter, the pair of parentheses can be omitted. When it contains a single statement, the curly braces can be omitted too.\n\n```\nconst square = value => value * value;\nsquare(10); // output: \"100\"\n\n```\n\n**example 3:**\n* when it takes no parameters\n\n```\nconst currentDate = () => console.log(new Date().toString().slice(0,15));\ncurrentDate(); // output: \"Wed Jul 21 2021\"\n\nconst currentTime = _ => console.log(new Date().toTimeString().slice(0, 8));\ncurrentTime(); // output: \"19:08:58\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "265fb26e-4629-437b-8e64-aa7ce30ae47a",
                "parentKey": "252c6937-bd93-4233-90cb-333938667c72",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "let"
                    },
                    {
                        "type": "DESC",
                        "data": "Let is **blocked** scope \\(will see more of that in **Scopes & Closures**\\). Value stored in it can be reassigned.\n\nTo declare or create a varaible\n\n```\nlet message;\n\n```\n\nAssign a data into it by using the assignment operator =:\n\n```\nmessage = 'Hello';\n\n```\n\nCombine the variable _declaration_ and _assignment_ into a single line\n\n```\nlet message = 'Hello!';\n\n```\n\nDeclare multiple variables in one line\n\n```\nlet user = 'John', age = 25, message = 'Hello';\n\n```\n\nReassigning a value\n\n```\nlet userName = \"Bruce\"\nuserName = \"Wayne\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "parentKey": "44213600-22aa-4972-aa99-eec27b840064",
                "subKeys": [
                    "c92fd58b-57a4-4c72-897a-d1c394f9a8aa",
                    "1590d94a-ef69-4f89-9e2d-a3de018ca2d4",
                    "5c6ad5d4-eb49-479c-be03-0b8d8e805cee",
                    "4567082c-b57b-45f4-8c04-168f9a2f123f",
                    "b31ac6cb-b3c3-4dd2-83a1-6b5b7466d048",
                    "b5c8a0d0-01e6-4922-a8f0-132d5442bb1d",
                    "e784d8b5-f79b-469c-8fa4-e7305d4405b3"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Primitive"
                    },
                    {
                        "type": "DESC",
                        "data": "All primitive values are immutable, means “**unchangeable**”. Read\\-only. \n\n**Example 1:**\n```\nExample 1:\nlet str = 'hello';\nconsole.log(str[0]); // \"h\"\nstr[0] = 'j';\nconsole.log(str); // \"hello\"\n\n```\n\n**Example 2:** \\- https://github.com/getify/You\\-Dont\\-Know\\-JS/blob/2nd\\-ed/get\\-started/apA.md\n```\nlet myName = \"Kyle\";\nlet yourName = myName;\nmyName = \"Frank\";\nconsole.log(myName); // \"Frank\"\nconsole.log(yourName); // \"Kyle\"\n\n```\n\n**yourName** wasn't affected by the re\\-assignment of **myName** to \"Frank\"? That's because each variable holds its own copy of the value."
                    }
                ]
            },
            {
                "key": "1590d94a-ef69-4f89-9e2d-a3de018ca2d4",
                "parentKey": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "BigInt"
                    },
                    {
                        "type": "DESC",
                        "data": "In JavaScript, the “**number**” type cannot represent integer values larger than \\(253\\-1\\) \\(that’s 9007199254740991\\), or less than \\-\\(253\\-1\\) for negatives. It’s a technical limitation caused by their internal representation.\n\n```\nconsole.log(typeof(22234234n)); // \"bigint\"\n\n```\n\nA BigInt value is created by appending n to the end of an integer\n```\nconst bigInt = 1234567890123456789012345678901234567890n; // the \"n\" at the end means it's a BigInt\n\n```\n\nBigInt numbers are rarely needed"
                    }
                ]
            },
            {
                "key": "65199906-ca55-4ae8-bd9f-a4a08cbc2432",
                "parentKey": "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "while"
                    },
                    {
                        "type": "DESC",
                        "data": "The **while** loop loops through a block of code as long as the specified condition evaluates to true. As soon as the condition fails, the loop is stopped.\n\n**Syntax:**\n\n```\nwhile(condition) {\n    // as long as the condition is true\n    // code in this block will be executed\n}\n\n```\n\n**example 1:**\n\n```\nlet count = 1;\nwhile(count <= 5) {    \n    console.log(\"The number is \" + count);\n    count++;\n}\n\n// Output:\n// The number is 1\n// The number is 2\n// The number is 3\n// The number is 4\n// The number is 5\n\n```\n\n**example 2: **skipping current execution of loop using **continue** statement\n\n```\nlet count = 1;\nwhile(count <= 10) {\n    if(count%2===0){\n        count++;\n        continue;\n    }    \n    console.log(\"The number is \" + count);\n    count++;\n}\n\n// Output:\n// \"The number is 1\"\n// \"The number is 3\"\n// \"The number is 5\"\n// \"The number is 7\"\n// \"The number is 9\"\n\n```\n\n**example 3**: terminating current execution flow of the loop using **break** statement\n\n```\nlet count = 1;\nwhile(true) {\n    if(count===10){\n        break;\n    }    \n    console.log(\"The number is \" + count);\n    count++;\n}\n\n// Output:\n// \"The number is 1\"\n// \"The number is 2\"\n// \"The number is 3\"\n// \"The number is 4\"\n// \"The number is 5\"\n// \"The number is 6\"\n// \"The number is 7\"\n// \"The number is 8\"\n// \"The number is 9\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "f548ba3e-55f6-484d-8289-858f8fd28289",
                "parentKey": "4567082c-b57b-45f4-8c04-168f9a2f123f",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "35cf3ece-a21e-4a8e-a8f8-d2b24a2b742d",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Global scope"
                    },
                    {
                        "type": "DESC",
                        "data": "Variables defined outside any function, block, or module scope have global scope. Variables in global scope can be accessed from everywhere in the application. When there is no module system in place, it is a lot easier to create global variables. A variable declared outside any function, in any file, is a global variable.\n\nIn a browser environment, the topmost scope of JavaScript file loaded using <script\\> tag is a global scope:\n\n```\n<script src=\"myScript.js\"></script>\n\n```\n\n```\n// myScript.js\n\n// \"global\" scope\nlet counter = 1;\n\n```\n\nThe global scope is a mechanism that lets the host of JavaScript \\(browser, Node\\) supply applications with host\\-specific functions as global variables.\n\n**Note: window** and **document**, for example, are global variables supplied by the **browser**. In a **Node** environment, you can access **global** object as a global variable."
                    }
                ]
            },
            {
                "key": "5499f8cd-26d8-4796-acc9-b138109bcea0",
                "parentKey": "e784d8b5-f79b-469c-8fa4-e7305d4405b3",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "5c6ad5d4-eb49-479c-be03-0b8d8e805cee",
                "parentKey": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "String"
                    },
                    {
                        "type": "DESC",
                        "data": "A string in JavaScript must be surrounded by quotes.\n\n```\nconsole.log(typeof(\"hello\")); // \"string\"\nconsole.log(typeof('hello')); // \"string\"\nconsole.log(typeof(`hello`)); // \"string\"\n\n```\n\n```\nlet str = \"Hello\";\nlet str2 = 'Single quotes are ok too';\nlet phrase = `can embed another ${str}`;\n\nconsole.log(\"Str:\", str, \"+\", \"Str2:\", str2, \"+\", \"Phrase:\", phrase);\n// Str: Hello + Str2: Single quotes are ok too + Phrase: can embed another Hello\n\n```\n\nIn JavaScript, there are 3 types of quotes.\n```\nDouble quotes: \"Hello\".\nSingle quotes: 'Hello'.\nBackticks: `Hello`.\n\n```\n"
                    }
                ]
            },
            {
                "key": "c92fd58b-57a4-4c72-897a-d1c394f9a8aa",
                "parentKey": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Number"
                    },
                    {
                        "type": "DESC",
                        "data": "The number type represents both **integer** and **floating point** numbers\\.\n\n**Example 1: **Checking the type\n```\nconsole.log(typeof(2)); // \"number\"\nconsole.log(typeof(-200)); // \"number\"\nconsole.log(typeof(100.554)); // \"number\"\nconsole.log(typeof(-99.99)); // \"number\"\n\n```\n\n```\nlet age = 35\nconst gravity = 9.81  // const for non-changing values\nlet mass = 72         // mass in Kilogram\nconst PI = 3.14       // pi a geometrical constant\nconst boilingPoint = 100 // temperature in oC, boiling point of water which is a constant\nconst bodyTemp = 37      // oC average human body temperature, which is a constant\n\nconsole.log(age, gravity, mass, PI, boilingPoint, bodyTemp) // 35 9.81 72 3.14 100 37\n\n```\n"
                    }
                ]
            },
            {
                "key": "69e69b35-9400-4fb3-aa5e-e9315b4a6eba",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Closure"
                    },
                    {
                        "type": "DESC",
                        "data": "A **closure** is the combination of a function bundled together \\(enclosed\\) with references to its surrounding state \\(the lexical environment\\). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.\n\nThe closure **captures** variables from lexical environment.\n\n```\nfunction outerFunc() {\n  let outerVar = 'I am outside!';\n\n  function innerFunc() {\n    console.log(outerVar); // => logs \"I am outside!\"\n  }\n\n  return innerFunc; // Even though this function is being returned it still remembers lexical environment\n}\n\nconst myInnerFunc = outerFunc();\nmyInnerFunc();\n\n```\n\nNow **innerFunc\\(\\)** is executed outside of its lexical scope. And what’s important:\n\n**innerFunc\\(\\)** still has access to **outerVar** from its **lexical scope**, _even being executed outside of its lexical scope_.\n\nIn other words, **innerFunc\\(\\) **closes over \\(a.k.a. captures, remembers\\) the variable outerVar from its lexical scope.\n\nFor more info \\- [https://www.youtube.com/watch?v=qikxEIxsXco](https://www.youtube.com/watch?v=qikxEIxsXco)"
                    }
                ]
            },
            {
                "key": "6a4344e6-1374-47f1-973b-74ea51bcc3b1",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Lexical scope"
                    },
                    {
                        "type": "DESC",
                        "data": "Lexical scope means that in a nested group of functions, **the inner functions have access to the variables and other resources of their parent scope. **Lexical scope is sometimes also referred to as **static scope**.\n\n```\nconst myGlobal = 0;\n\nfunction func() {\n  const myVar = 1;\n  console.log(myGlobal); // logs \"0\"\n  function innerOfFunc() {\n    const myInnerVar = 2;\n    console.log(myVar, myGlobal); // logs \"1 0\"\n    function innerOfInnerOfFunc() {\n      console.log(myInnerVar, myVar, myGlobal); // logs \"2 1 0\"\n    }\n    innerOfInnerOfFunc();\n  }\n  innerOfFunc();\n}\n\nfunc();\n\n```\n\nThe lexical scope of **innerOfInnerOfFunc\\(\\)** consits of scopes of **innerOfFunc\\(\\)**, **func\\(\\)** and global scope \\(the outermost scope\\). Within **innerOfInnerOfFunc\\(\\)** you can access the lexical scope variables **myInnerVar, myVar **and** myGlobal**.\n\nThe lexical scope of **innerFunc\\(\\)** consists of **func\\(\\)** and global scope. Within **innerOfFunc\\(\\)** you can access the lexical scope variables **myVar** and **myGlobal**.\n\nFinally, the lexical scope of **func\\(\\)** consists of only the global scope. Within **func\\(\\)** you can access the lexical scope variable **myGlobal**.\n\nFor more info \\- [https://www.youtube.com/watch?v=uH\\-tVP8MUs8](https://www.youtube.com/watch?v=uH-tVP8MUs8)"
                    }
                ]
            },
            {
                "key": "50256453-3cf5-4adf-85c0-562970b46468",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [
                    "c007d461-f421-48fd-9566-ac88d298bbb8"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Block scope"
                    },
                    {
                        "type": "DESC",
                        "data": "A code block in JavaScript defines a scope for variables declared using **let** and **const **within a curly brace **\\{\\}. **it can be accessed only within that curly brace.\n\n**Example 1:**\n```\nif (true) {\n  // \"if\" block scope\n  const message = 'Hello';\n  let name = \"Chris\"\n  console.log(message); // 'Hello'\n  console.log(name); // 'Chris'\n}\nconsole.log(message); // throws ReferenceError\nconsole.log(name); // throws ReferenceError\n\n```\n\n**Example 2:**\n```\nlet fullMoon = true;\n\n// Initialize a global variable\nlet species = \"human\";\n\nif (fullMoon) {\n  // Initialize a block-scoped variable\n  let species = \"werewolf\";\n  console.log(`${species}`); // \"werewolf\"\n}\n\nconsole.log(`${species}`); // \"human\"\n\n```\n\n**Example 3: var is not block scoped**\n```\nif (true) {\n  // \"if\" block scope\n  var count = 0;\n  console.log(count); // 0\n}\nconsole.log(count); // 0\n\n```\n\nA code block does not create a scope for var variables, but a function body does."
                    }
                ]
            },
            {
                "key": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "50256453-3cf5-4adf-85c0-562970b46468",
                    "7662833c-7ece-4668-a37b-4e11820503b4",
                    "a44085f3-06c0-4910-9787-af5b20c0709b",
                    "4c35fca7-ac9c-4475-99ab-d77f97120360",
                    "35cf3ece-a21e-4a8e-a8f8-d2b24a2b742d",
                    "6a4344e6-1374-47f1-973b-74ea51bcc3b1",
                    "84650864-61f6-4e20-b87d-ed779ffa7d20",
                    "69e69b35-9400-4fb3-aa5e-e9315b4a6eba"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Scopes & \nClosure"
                    },
                    {
                        "type": "DESC",
                        "data": "Scope in JavaScript refers to the current context of code, which determines the **accessibility of variables and functions**.\n\nDifference Between **var**, **let**, and **const**\n\n```\n| Keyword |     Scope      | Hoisting | Can Be Reassigned | Can Be Redeclared |\n| :-----: | :------------: | :------: | :---------------: | :---------------: |\n|   var   | Function scope |   Yes    |        Yes        |        Yes        |\n|   let   |  Block scope   |    No    |        Yes        |        No         |\n|  const  |  Block scope   |    No    |        No         |        No         |\n\n```\n\n\n## Var VS let\n\n* [https://www.javascripttutorial.net/es6/difference\\-between\\-var\\-and\\-let/](https://www.javascripttutorial.net/es6/difference-between-var-and-let/)\n\n\n**Reference** \n* [https://dmitripavlutin.com/javascript\\-scope/](https://dmitripavlutin.com/javascript-scope/)\n* [https://www.freecodecamp.org/news/an\\-introduction\\-to\\-scope\\-in\\-javascript\\-cbd957022652/](https://www.freecodecamp.org/news/an-introduction-to-scope-in-javascript-cbd957022652/)\n* [https://blog.bitsrc.io/understanding\\-scope\\-and\\-scope\\-chain\\-in\\-javascript\\-f6637978cf53](https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53)\n\n"
                    }
                ]
            },
            {
                "key": "10d9744a-f521-4bdf-8933-9c3fb1cfb2c8",
                "parentKey": "3854fdd8-7de4-429c-b73d-2519cbf63781",
                "subKeys": [
                    "d3f7bd55-fe91-45b2-b13e-ea98bb7710d9"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "else Statement"
                    },
                    {
                        "type": "DESC",
                        "data": "**if** statement can be extended with an **else** statement, which adds another block to run when the **if** condition doesn’t pass.\n\n**Syntax:**\n\n```\nif (condition) {\n      //condition is true this block will be executed\n      // no futher conditions will be checked\n} else {\n      //when a condition is false/failed this block will be executed\n}\n\n```\n\n**example:**\n\n```\nif (\"cat\" === \"dog\") {\n      console.log(\"if block executed\");\n} else {\n      console.log(\"else block executed\");\n}\n\n```\n"
                    }
                ]
            },
            {
                "key": "3854fdd8-7de4-429c-b73d-2519cbf63781",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "ffcc44e2-dc44-4241-8c15-ee2ab8c71588",
                    "10d9744a-f521-4bdf-8933-9c3fb1cfb2c8",
                    "9677e53a-05a4-4bd6-9010-f10826426bb6",
                    "62136ee4-f92e-49fb-b4de-03911ffe1da1"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Conditional\nStatements"
                    },
                    {
                        "type": "DESC",
                        "data": "Conditional statements controls behavior in JavaScript and determine whether or not a piece of code can run.\n\n\n## Truthy\n\nIn JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy \\(i.e., except for false, 0, \\-0, 0n, \"\", null, undefined, and NaN\\).\n\n**Examples of truthy values** in JavaScript \\(which will be coerced to true in boolean contexts, and thus execute the if block\\)\n\n```\nif (true)\nif ({})\nif ([])\nif (42)\nif (\"0\")\nif (\"false\")\nif (new Date())\nif (-42)\nif (12n)\nif (3.14)\nif (-3.14)\nif (Infinity)\nif (-Infinity)\n\n```\n\n\n## Falsy\n\nA falsy \\(sometimes written falsey\\) value is a value that is considered false when encountered in a Boolean context.\n\n**Complete list of JavaScript falsy values**\n| false | The keyword false. |\n|:--- |:--- |\n| 0 | The Number zero \\(so, also 0.0, etc., and 0x0\\). |\n| \\-0 | The Number negative zero \\(so, also \\-0.0, etc., and \\-0x0\\). |\n| 0n | The BigInt zero \\(so, also 0x0n\\). Note that there is no BigInt negative zero — the negation of 0n is 0n. |\n| \"\", | '', \\`\\` Empty string value. |\n| null | null — the absence of any value. |\n| undefined | undefined — the primitive value. |\n| NaN | NaN — not a number. |\n| document\\.all | Objects are falsy if and only if they have the \\[\\[IsHTMLDDA\\]\\] internal slot.That slot only exists in document.all and cannot be set using JavaScript. |\n"
                    }
                ]
            },
            {
                "key": "4c35fca7-ac9c-4475-99ab-d77f97120360",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [
                    "75e32173-5b17-4d07-b761-2003054bf186"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Scope chain"
                    },
                    {
                        "type": "DESC",
                        "data": "When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.\n\nIf it’s still could not find the variable, it will either implicitly declare the variable in the global scope \\(if not in strict mode\\) or return an error.\n\nExample 1:\n\n```\nfunction run() {\n  // \"run\" function scope\n  const message = 'Run, Forrest, Run!';\n\n  if (true) {\n    // \"if\" code block scope\n    const friend = 'Bubba';\n    console.log(message); // 'Run, Forrest, Run!'\n  }\n\n  console.log(friend); // throws ReferenceError\n}\n\nrun();\n\n```\n\nThe scope contained within another scope is named **_inner scope_**. In the example, if code block scope is an inner scope of run\\(\\) function scope. The scope that wraps another scope is named **_outer scope_**. In the example, run\\(\\) function scope is an outer scope to if code block scope."
                    }
                ]
            },
            {
                "key": "84650864-61f6-4e20-b87d-ed779ffa7d20",
                "parentKey": "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Hoisting"
                    },
                    {
                        "type": "DESC",
                        "data": "Hoisting is a JavaScript mechanism where variables and function declarations are **moved to the top of their scope** before code execution.\n\nWhen you execute a piece of JavaScript code, the JavaScript engine creates the **global execution context**. The global execution context has two phases: _creation_ and **execution**. During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.\n\nRefference \n* [https://www.javascripttutorial.net/javascript\\-hoisting/](https://www.javascripttutorial.net/javascript-hoisting/)\n* [https://www.youtube.com/watch?v=Fnlnw8uY6jo](https://www.youtube.com/watch?v=Fnlnw8uY6jo)\n\n\n## Variable hoisting\n\n* using **var**\n\n\n```\nconsole.log(counter); // undefined\nvar counter = 1;\n\n```\n\n* using **let**\n\n\n```\nconsole.log(counter); // \"ReferenceError: Cannot access 'counter' before initialization\nlet counter = 1;\n\n```\n\n\n## Function hoisting\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\n\n// this prints actual copy of the whole function\nconsole.log(add) // ƒ add(a, b){\n                 //  return a + b;\n                 //  }\n\nconsole.log(result); // 30\n\nfunction add(a, b){\nreturn a + b;\n}\n\n```\n\n\n## Function expressions\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\nconsole.log(result); // \"TypeError: add is not a function\n\nvar add = function(x, y) {\nreturn x + y;\n}\n\n```\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\nconsole.log(result); // \"TypeError: add is not a function\n\nvar add = (x, y) => x + y;\n\n```\n\nDuring the creation phase of the **global execution context**, the JavaScript Engine creates the **add** variable in the memory and initializes its value to **undefined**. When executing the following code, the add is undefined, hence, it isn’t a function."
                    }
                ]
            },
            {
                "key": "85ee6b37-5053-4f78-b25d-53d1bf11d87b",
                "parentKey": "252c6937-bd93-4233-90cb-333938667c72",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "const"
                    },
                    {
                        "type": "DESC",
                        "data": "The keyword **const** is an abbreviation for **constant**. Similar to let, it’s **block\\-scoped**, however, you can’t reassigned it and value must be provided when declaring it.\n\n**Example 1:**\n```\nconst pi = 3.14\nconsole.log(\"Pi :\", pi); // 3.14\n\n```\n\n**Example 2:**\n```\nconst gravity; // SyntaxError: Missing initializer in const declaration\n\n```\n\n**Example 3:**\n```\nconst name = \"Chris\"\nname = \"Jordan\" // TypeError: Assignment to constant variable.\n\n```\n"
                    }
                ]
            },
            {
                "key": "62136ee4-f92e-49fb-b4de-03911ffe1da1",
                "parentKey": "3854fdd8-7de4-429c-b73d-2519cbf63781",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "switch"
                    },
                    {
                        "type": "DESC",
                        "data": "The **switch** statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.\n\n**Example 1:** expression matches a case\n\nThe **break** statement terminates the current flow of execution\n\n```\nconst expr = 'Papayas';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    break;\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// output: \"Mangoes and papayas are $2.79 a pound.\"\n\n```\n\n**Example 2:** expression did not match any cases\n\n```\nconst expr = 'Onion';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    break;\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// output: \"Sorry, we are out of Onion.\"\n\n```\n\n**Example 3:** expression matches a case but break statement is not specified\n\nIf you forget a **_break_** then the script will run from the case where the criterion is met and will run the cases after that **_regardless if a criterion was met_**.\n\n```\nconst expr = 'Oranges';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// Output:\n// Oranges are $0.59 a pound.\n// Mangoes and papayas are $2.79 a pound.\n// Sorry, we are out of Oranges.\n\n```\n"
                    }
                ]
            },
            {
                "key": "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01",
                "parentKey": "44213600-22aa-4972-aa99-eec27b840064",
                "subKeys": [
                    "dbc9a664-bff0-4263-811c-cb91470ce277",
                    "fc11e9b2-fb2a-4f5d-934e-65c172bb61fa"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Non-primitive"
                    },
                    {
                        "type": "DESC",
                        "data": "Non\\-primitive are mutuable means '**changeable**'.  Only object values \\(arrays, objects, functions, etc.\\) are treated as references\n\n**Example 1:**\n```\nlet arr = [212, 8, 506];\nconsole.log(arr[0]); // 212\narr[0] = 420;\nconsole.log(arr); // [420, 8, 506]\n\n```\n\n**Example 2 \\- **https://github.com/getify/You\\-Dont\\-Know\\-JS/blob/2nd\\-ed/get\\-started/apA.m\n```\nlet myAddress = {\n    street: \"123 JS Blvd\",\n    city: \"Austin\",\n    state: \"TX\"\n};\n\nlet yourAddress = myAddress;\n\nmyAddress.street = \"456 TS Ave\";\n\nconsole.log(yourAddress.street); // 456 TS Ave\nconsole.log(myAddress.street) // 456 TS Ave\n\n```\n\nValue assigned to **myAddress** is an object, it's held/assigned by reference, and thus the assignment to the **yourAddress** variable is a copy of the reference, not the object value itself. That's why the updated value assigned to the myAddress.street is reflected when we access yourAddress.street. myAddress and yourAddress have copies of the **reference to the single shared object**, so an update to one is an update to both."
                    }
                ]
            },
            {
                "key": "44213600-22aa-4972-aa99-eec27b840064",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                    "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Data types"
                    },
                    {
                        "type": "DESC",
                        "data": "1. [https://javascript.info/types](https://javascript.info/types)\n1. [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Data\\_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)\n1. [https://github.com/getify/You\\-Dont\\-Know\\-JS/blob/1st\\-ed/types%20%26%20grammar/ch1.md](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20&%20grammar/ch1.md)\n\n"
                    }
                ]
            },
            {
                "key": "ffcc44e2-dc44-4241-8c15-ee2ab8c71588",
                "parentKey": "3854fdd8-7de4-429c-b73d-2519cbf63781",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "If Statement"
                    },
                    {
                        "type": "DESC",
                        "data": "**If** statement only runs if the condition enclosed in parentheses \\(\\) is truthy\n\n**Syntax:**\n\n```\nif (condition) {\n    //condition is true this block will be executed\n}\n\n```\n\n**example**:\n\n```\nif (10 > 5) {\n    console.log(\"if blocked executed\");\n}\n\n```\n"
                    }
                ]
            },
            {
                "key": "75e32173-5b17-4d07-b761-2003054bf186",
                "parentKey": "4c35fca7-ac9c-4475-99ab-d77f97120360",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "252c6937-bd93-4233-90cb-333938667c72",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "05c8bbd0-fe13-4906-92cf-8507b33954da",
                    "265fb26e-4629-437b-8e64-aa7ce30ae47a",
                    "85ee6b37-5053-4f78-b25d-53d1bf11d87b"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Variables"
                    },
                    {
                        "type": "DESC",
                        "data": "A variable is a **container** for a value or **named storage** for data. We can use variables to store goodies, visitors, and other data."
                    }
                ]
            },
            {
                "key": "0341d846-c3f3-4915-a4b3-0c11b3643a9d",
                "parentKey": "f8750599-32db-4fb3-829e-0673887df2c2",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Function\ndeclarations"
                    },
                    {
                        "type": "DESC",
                        "data": "A **function** declaration \\(also called a function statement\\) consists of the function keyword, followed by:\n* The name of the function.\n* A list of parameters to the function, enclosed in parentheses and separated by commas.\n* The JavaScript statements that define the function, enclosed in curly brackets, \\{...\\}.\n\n\n**Syntax:**\n\n```\nfunction validFunctionName(parameter1, parameter2) {\n  return statement;\n}\n\n```\n\n**example 1: which takes no parameters and returns nothing \\(void\\)**\n\n```\nfunction currentTime() {\n  console.log(new Date().toTimeString().slice(0, 8));\n}\n\ncurrentTime() // output: \"18:35:36\"\n\n```\n\n**example 2: which takes parameters and returns a value**\n\nThe **return** statement ends function execution and specifies a value to be returned to the function caller.\n```\nfunction sum(a, b) {\n  return a + b;\n}\nconst result = sum(5, 6);\n\nconsole.log(result); // output: \"11\"\n\n```\n\n**example 3**: **default parameters** \n\n```\nfunction showMessage(from, text = \"no text given\") {\n  console.log( from + \": \" + text );\n}\n\nshowMessage(\"Ann\"); // output: \"Ann: no text given\"\nshowMessage(\"Ann\", \"Hello, world!\"); // output: \"Ann: Hello, world!\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "b5c8a0d0-01e6-4922-a8f0-132d5442bb1d",
                "parentKey": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "subKeys": [],
                "collapse": false,
                "style": "{\"contentStyle\":{\"background\":\"#50e3c2\"}}",
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Undefined"
                    },
                    {
                        "type": "DESC",
                        "data": "The special value undefined also stands apart. It makes a type of its own, just like null.\n\n```\nconsole.log(typeof(undefined)); // \"undefined\"\n\n```\n\nThe meaning of undefined is “**value is not assigned**”. If a **variable is declared, but not assigned**, then its value is undefined:\n```\nlet age;\nconsole.log(age); // shows \"undefined\"\n\n```\n\nTechnically, it is possible to explicitly assign undefined to a variable:\n```\nlet age = 100;\n\n// change the value to undefined\nage = undefined;\n\nconsole.log(age); // shows \"undefined\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "dfb39c55-dfce-4d5a-88a7-5fd066288121",
                "parentKey": "a1649782-ec29-4030-bb2d-d6044103cf10",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "e784d8b5-f79b-469c-8fa4-e7305d4405b3",
                "parentKey": "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
                "subKeys": [
                    "5499f8cd-26d8-4796-acc9-b138109bcea0"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Symbol"
                    },
                    {
                        "type": "DESC",
                        "data": "The JavaScript **ES6** introduced a new primitive data type called Symbol. A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.\n\n```\nconsole.log(typeof(Symbol())); // \"symbol\"\n\n```\n\n```\n// two symbols with the same description\n\nconst value1 = Symbol('hello');\nconst value2 = Symbol('hello');\n\nconsole.log(value1 === value2); // false\n\n```\n"
                    }
                ]
            },
            {
                "key": "c007d461-f421-48fd-9566-ac88d298bbb8",
                "parentKey": "50256453-3cf5-4adf-85c0-562970b46468",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": ""
                    }
                ]
            },
            {
                "key": "29f23365-fcf6-4f8f-8060-811df84e4770",
                "parentKey": "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                "subKeys": [
                    "c1e621c4-ae65-40d0-ad48-650368d181d0"
                ],
                "collapse": true,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "for .. in"
                    },
                    {
                        "type": "DESC",
                        "data": "The for\\-in loop always loops over an object’s elements one by one. These names can be array indexes or key\\-value pairs. \n_**Iterates over all enumerable property keys of an object.**_\n\n**Syntax:**\n\n```\nfor (let i in object) {\n    console.log(object[i]);\n}\n\n```\n\nIf the object is an array, the for\\-in loop will **print out the array indexes in order**. If the object contains key\\-value pairs, the for\\-in loop will **print out each key that exists**. The for\\-in loop does not guarantee that keys within key\\-value pairs will always be accessed in the same order.\n\n**example 1:**\n\n```\nlet arr = [3, 5, 7];\narr.foo = \"hello\";\n    \nfor (let i in arr) {\n  console.log(i); // by default it print outs the indexes and key\n}\n\n// output:\n// 0\n// 1\n// 2\n// foo\n\n```\n\n**example 2:**\n\n```\nlet arr = [3, 5, 7];\narr.foo = \"hello\";\n    \nfor (let i in arr) {\n  console.log(arr[i]);\n}\n\n// output:\n// 3\n// 5\n// 7\n// hello\n\n```\n"
                    }
                ]
            },
            {
                "key": "f8750599-32db-4fb3-829e-0673887df2c2",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "0341d846-c3f3-4915-a4b3-0c11b3643a9d",
                    "a1649782-ec29-4030-bb2d-d6044103cf10",
                    "a9f8d9be-7d66-4b3e-941d-429c02913ec5",
                    "220e873a-0a0b-4820-9434-42d0727eead5",
                    "a37aef6c-b62c-423c-8124-c18edc14142b"
                ],
                "collapse": false,
                "style": "{\"contentStyle\":{\"background\":\"#9eff88\"}}",
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Functions"
                    },
                    {
                        "type": "DESC",
                        "data": "Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition. A function is executed when “something” invokes it \\(calls it\\).\n\n**Referrence:**\n* [https://dmitripavlutin.com/6\\-ways\\-to\\-declare\\-javascript\\-functions/](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/)\n* [https://codeburst.io/understanding\\-generators\\-in\\-es6\\-javascript\\-with\\-examples\\-6728834016d5](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)\n\n"
                    }
                ]
            }
        ],
        "config": {
            "readOnly": false,
            "allowUndo": true,
            "layoutDir": 2,
            "theme": {
                "name": "default",
                "randomColor": true,
                "background": "rgb(57,60,65)",
                "highlightColor": "#50C9CE",
                "marginH": 60,
                "marginV": 20,
                "contentStyle": {
                    "lineHeight": "1.5",
                    "fontSize": "16px"
                },
                "linkStyle": {
                    "lineRadius": 5,
                    "lineType": "curve",
                    "lineWidth": "3px"
                },
                "rootTopic": {
                    "contentStyle": {
                        "fontSize": "36px"
                    },
                    "subLinkStyle": {
                        "lineType": "curve",
                        "lineWidth": "3px"
                    }
                },
                "primaryTopic": {
                    "contentStyle": {
                        "fontSize": "24px"
                    },
                    "subLinkStyle": {
                        "lineType": "curve",
                        "lineWidth": "3px"
                    }
                },
                "normalTopic": {
                    "subLinkStyle": {
                        "lineType": "curve",
                        "lineWidth": "3px"
                    }
                }
            }
        },
        "formatVersion": "0.0"
    });
}
