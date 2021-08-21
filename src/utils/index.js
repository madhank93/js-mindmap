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
        "focusKey": null,
        "extData": {
            "TOPIC_REFERENCE": {
                "reference": {}
            }
        },
        "topics": [
            {
                "key": "1f66701b-72a2-45be-abad-d14ba71a78e0",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Functional\nProgramming"
                    }
                ]
            },
            {
                "key": "1c417f10-9197-42eb-a724-a2c99a488847",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "forEach"
                    }
                ]
            },
            {
                "key": "9b52509a-42df-4ba8-9200-29ec192e314a",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                    "3dc1c815-02b4-4097-ae29-578920b3a065",
                    "5c0d4a18-5da2-4f3f-9752-4912ae3df225"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Data\nStructures"
                    }
                ]
            },
            {
                "key": "af8c79c0-2a79-40e8-a7ff-5edf08399e5b",
                "parentKey": "3dc1c815-02b4-4097-ae29-578920b3a065",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "get"
                    }
                ]
            },
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
                        "data": "A **function expression** is determined by a function keyword, followed by an optional function name \\(anonymous\\), a list of parameters in a pair of parenthesis \\(para1, ..., paramN\\) and a pair of curly braces \\{ ... \\} that delimits the body code.\n\n**Syntax:**\n```\nconst exp = function functionName(params1, params2) {\n    statements;\n}\n\n```\n\n**example 1: named function**\n```\nconst count = function arrayLength(array) {\n  return array.length;\n}\n\ncount([5, 7, 8]); // output: \"3\"\narrayLength([5, 7, 8]); // ReferenceError: arrayLength is not defined\n\n```\n\n**example 2: anonymous function**\n```\nconst count = function(array) {\n  return array.length;\n}\n\ncount([5, 7, 8]); // output: \"3\"\n\n```\n\n**example 3: Error stack trace**\n```\n// Ex 1:\nconst count = function arrayLength(array) {\n    throw new Error(\"Custom error\")\n}\n\ncount([5, 7, 8]);\n\nError: Custom error\n    at arrayLength (/Users/git/other/js/programming-basics/test.js:2:11)\n    at Object.<anonymous> (/Users/git/other/js/programming-basics/test.js:5:1)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\n\n// Ex 2:    \nconst count = function (array) {\n    throw new Error(\"Custom error\")\n}\n\ncount([5, 7, 8]);\n\nError: Custom error\n    at count (/Users/git/other/js/programming-basics/test.js:2:11)\n    at Object.<anonymous> (/Users/git/other/js/programming-basics/test.js:5:1)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\n\n```\nOne of the benefits of creating a named function expression is that in case we encountered an error, the stack trace will contain the name of the function, making it easier to find the origin of the error."
                    }
                ]
            },
            {
                "key": "c0743415-e5c5-48da-a6ec-a2d0571da863",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Errors"
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
                        "data": "**if** statement can be extended with an **else if** statement, which adds another conditional with its own block, it is a way to chain on extra choices/outcomes.\n\n**Syntax:**\n```\nif (condition) {\n     // when condition is true this block will be executed\n     // no futher conditions will be checked\n} else if (condition) {\n      // when a previous block condition has been failed\n      // this(else if) block condition is evaluted\n      // when a condition passed this block will be executed\n} else {\n      //when all condition has been failed this block will be executed\n}\n\n```\n\n**example:**\n```\nif (false) {\n      console.log(\"if blocked executed\");\n} else if (2 < 5 && 3 < 5 ) {\n      console.log(\"else if blocked executed\");\n} else {\n      console.log(\"else blocked executed\");\n}\n\n// Output - \"else if blocked executed\"\n\n```\n"
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
                        "data": "**Function Scope** \\- A function in JavaScript defines a scope for variables declared using **var**, **let** and **const**.\n\n**Example 1:**\n```\nfunction run() {\n  // \"run\" function scope\n  var message = 'Run, Forrest, Run!';\n  console.log(message); // 'Run, Forrest, Run!'\n}\n\nrun();\nconsole.log(message); // throws ReferenceError\n\n```\n**run\\(\\)** function body creates a scope. The variable message is accessible inside of the function scope, but inaccessible outside.\n\n**Exmaple 2:**\n```\nfunction run() {\n  // \"run\" function scope\n  const two = 2;\n  let count = 0;\n  function run2() {}\n\n  console.log(two);   // 2\n  console.log(count); // 0\n  console.log(run2);  // function\n}\n\nrun();\nconsole.log(two);   // throws ReferenceError\nconsole.log(count); // throws ReferenceError\nconsole.log(run2);  // throws ReferenceError\n\n```\n\n**Exmaple 3**: Var is **functional\\-scoped**\n```\nvar fullMoon = true;\n\n// Use var to initialize a variable\nvar species = \"human\";\n\nif (fullMoon) {\n  // Attempt to create a new variable in a block\n  var species = \"werewolf\";\n  console.log(`${species}.`); // werewolf\n}\n\nconsole.log(`${species}.`); // werewolf\n\n```\nBoth the **global variable** and the **block\\-scoped variable** end up with the same value, **werewolf**. This is because instead of creating a new local variable with var, it is reassigning the same variable in the same scope."
                    }
                ]
            },
            {
                "key": "91f27dd0-5185-4daa-8501-15ba8727dc06",
                "parentKey": "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "for .. each"
                    },
                    {
                        "type": "DESC",
                        "data": "The **forEach\\(\\)** method executes a provided function once for each array element \\(will see more of this in detail in Array & methods\\)\n\n**example 1:**\n```\nconst array = [1, 2, 3, { id: 254, name: \"Chris\" }]\n\narray[5] = 5\narray[-6] = 6;\narray[\"name\"] = \"Lars\"\n\narray.forEach(value => console.log(`Value: ${value}`));\n\n// Output:\n// Value: 1\n// Value: 2\n// Value: 3\n// Value: [object Object]\n// Value: 5\n\n```\n"
                    }
                ]
            },
            {
                "key": "8d03fe66-9d8f-4ae3-96c1-d18220788b3a",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "pop"
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
                    "91f27dd0-5185-4daa-8501-15ba8727dc06",
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
                        "data": "A loop is a sequence of instructions that is **continually repeated** until a certain condition is met. An example would be the process of getting an item of data and changing it, and then making sure some condition is checked such as, if a counter has reached a prescribed number."
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
                        "data": "**Object** : typeof instance === \"object\". It is used to store collections of data and more complex entities.\n\n```\nconsole.log(typeof({})); // \"object\"\nconsole.log(typeof([])); // \"object\" - Arrays aren’t primitive, they are objects\nconsole.log(typeof(new Map())); // \"object\"\nconsole.log(typeof(new Date())); // \"object\"\n\n```\n\nSpecial non\\-data but Structural type for any constructed object instance also used as data structures: \n1. new Object, \n1. new Array, \n1. new Map, \n1. new Set, \n1. new WeakMap, \n1. new WeakSet, \n1. new Date and almost everything made with **new** keyword;\n\n\n**Indexed collections**: Arrays and typed Arrays\n**Keyed collections**: Maps, Sets, WeakMaps, WeakSets"
                    }
                ]
            },
            {
                "key": "277f12bf-6cef-4676-92bb-ee233886e4cb",
                "parentKey": "5df46409-6d87-4099-85c8-664e7e703c8e",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Class"
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
                "key": "88317110-d644-4ca9-84bf-01ae778571da",
                "parentKey": "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "entries"
                    }
                ]
            },
            {
                "key": "fa03906c-9682-4352-98eb-3a4525a5780c",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "filter"
                    }
                ]
            },
            {
                "key": "f9aad4c2-5205-49ec-a74c-ed04c3bb6813",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "push"
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
                        "data": "The **for** loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times.\n\n**Syntax:**\n```\nfor(initialization; condition; final-expression) {\n    // Code to be executed\n}\n\n```\n\n* **initialization** — it is used to initialize the counter variables, and evaluated once unconditionally before the first execution of the body of the loop.\n* **condition** — it is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute. If it evaluates to false, the execution of the loop ends.\n* **final\\-expression** — this is always evaluated \\(or run\\) each time the loop has gone through a full iteration. It usually serves to increment \\(or in some cases decrement\\) the counter variable.\n\n\n**example 1**:\n```\nfor (let i = 0; i < 10; i++) {\n  console.log(\"The number is \" + i);\n}\n\n// Output:\n// \"The number is 0\"\n// \"The number is 1\"\n// \"The number is 2\"\n// \"The number is 3\"\n// \"The number is 4\"\n// \"The number is 5\"\n// \"The number is 6\"\n// \"The number is 7\"\n// \"The number is 8\"\n// \"The number is 9\"\n\n```\n\n**example 2: **skipping current execution of loop using **continue** statement\n```\nfor (let i = 0; i < 10; i++) {\n  if(i%2===0){\n    continue;\n  }\n  console.log(\"The number is \" + i);\n}\n\n// Output:\n// \"The number is 1\"\n// \"The number is 3\"\n// \"The number is 5\"\n// \"The number is 7\"\n// \"The number is 9\"\n\n```\n\n**example 3**: terminating current execution flow of the loop using **break** statement\n```\nfor (let i = 0; i < 10; i++) {\n  if(i===5){\n    break;\n  }\n  console.log(\"The number is \" + i);\n}\n\n// Output:\n// \"The number is 0\"\n// \"The number is 1\"\n// \"The number is 2\"\n// \"The number is 3\"\n// \"The number is 4\"\n\n```\n\n**example 4: **following example is valid js code\n```\nfor (; ;) {\n    console.log(\"Infinite loop - 'JavaScript heap out of memory' it is what you get when you run\");\n}\n\n```\n\n**example 5: **And it iterates over by **positive numeric index**.\n```\nconst array = [1, 2, 3, { id: 254, name: \"Chris\" }]\n\narray[5] = 5\narray[-6] = 6;\narray[\"name\"] = \"Lars\"\n\nfor (let index = 0; index < array.length; index++)\n    console.log(`Index: ${index} & Value: ${array[index]}`);\n\n// Output:\n//Index: 0 & Value: 1\n//Index: 1 & Value: 2\n//Index: 2 & Value: 3\n//Index: 3 & Value: [object Object]\n//Index: 4 & Value: undefined\n//Index: 5 & Value: 5     \n\n```\n"
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
                    "f8750599-32db-4fb3-829e-0673887df2c2",
                    "5df46409-6d87-4099-85c8-664e7e703c8e",
                    "9b52509a-42df-4ba8-9200-29ec192e314a",
                    "1f66701b-72a2-45be-abad-d14ba71a78e0",
                    "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
                    "c0743415-e5c5-48da-a6ec-a2d0571da863",
                    "1340cde2-dcef-48de-a00e-1ce996ecf377",
                    "131c9433-90a2-40b8-9e02-b774761c2456"
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
                        "data": "A **generator** is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.\n\n**example 1:** function declaration form **function\\* <name\\>\\(\\)**\n```\nfunction* generatorFunction() {\n  console.log('This will be executed first.');\n  yield 'Hello, ';\n  console.log('I will be printed after the pause');  \n  yield 'World!';\n}\nconst generatorObject = generatorFunction();\n\nconsole.log(generatorObject.next().value);\n// output:\n// This will be executed first.\n// Hello, \nconsole.log(generatorObject.next().value);\n// output:\n// I will be printed after the pause\n// World!\nconsole.log(generatorObject.next().value);\n// output:\n// undefined\n\n```\n\n**example 2: **function expression form **function\\* \\(\\)**\n```\nconst indexGenerator = function* () {\n  let index = 0;\n  while(true) {\n    yield index++;\n  }\n};\nconst g = indexGenerator();\nconsole.log(g.next().value); // => 0\nconsole.log(g.next().value); // => 1\n\n```\n\n**example 3: **Shorthand method definition form **\\*<name\\>\\(\\)**\n```\nconst obj = {\n  *indexGenerator() {\n    var index = 0;\n    while(true) {\n      yield index++;\n    }\n  }\n}\nconst g = obj.indexGenerator();\nconsole.log(g.next().value); // => 0\nconsole.log(g.next().value); // => 1\n\n```\n"
                    }
                ]
            },
            {
                "key": "62774116-bea5-49c3-a72c-6371f1cde7cb",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "find"
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
                "key": "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
                "parentKey": "9b52509a-42df-4ba8-9200-29ec192e314a",
                "subKeys": [
                    "6608af00-8cd4-4fe1-bd0b-e18e12f4a684",
                    "bb6f8cdb-b6ee-4040-9195-170825342ded",
                    "12256f82-0a50-4408-8a76-525865cbad4b",
                    "88317110-d644-4ca9-84bf-01ae778571da",
                    "af72cd3d-9be6-4420-9c07-1a80e2c62e2d"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Set &\nmethods"
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
                        "data": "A function is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, optionally arguments are passed to the function as input, and the function can return a value. \n\nA function in JavaScript is also an **object**.\n\n```\nconsole.log(typeof(x => x * 2)); // \"function\"\nconsole.log(typeof(function(){})); // \"function\"\n\n```\n"
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
                        "data": "Value stored in it can be **reassigned**. Variables, declared with var, are either function\\-scoped or global\\-scoped. \\(will see more of that in **Scopes & Closures**\\). Their visibility is scoped to current function, or global, if declared outside function.\n\nTo declare or create a varaible\n```\nvar message;\n\n```\n\nAssign a data into it by using the assignment operator **=**\n```\nmessage = 'Hello';\n\n```\n\nCombine the variable _declaration_ and _assignment_ into a single line\n```\nvar message = 'Hello!';\n\n```\n\nDeclare multiple variables in one line\n```\nvar user = 'John', age = 25, message = 'Hello';\n\n```\n\nReassigning a value\n```\nvar userName = \"Bruce\"\nuserName = \"Wayne\"\n\nconsole.log(userName) // \"Wayne\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "28bcdae2-e48d-47e3-bc28-5f6afecfef7d",
                "parentKey": "3dc1c815-02b4-4097-ae29-578920b3a065",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "delete"
                    }
                ]
            },
            {
                "key": "bb6f8cdb-b6ee-4040-9195-170825342ded",
                "parentKey": "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "clear"
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
                        "data": "**Module Scope **\\- A module is just a file. One script is one module. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:\n\n* **export** keyword labels variables and functions that should be accessible from outside the current module.\n* **import** allows the import of functionality from other modules.\n\n\nBefore modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.\n\nTo make import/export work, browsers need **<script type=\"module\"\\> **and for NodeJS \\- set **\"type\": \"module\"** in the **package\\.json** or use the **.mjs** extension\\.\n\n**Example 1:**\nFor instance, if we have a file** sayHi\\.mjs** exporting a function:\n```\n// 📁 sayHi.mjs\nexport function sayHi(user) {\n  console.log(`Hello, ${user}!`);\n}\n\n```\n\n…Then another file may import and use it:\n```\n// 📁 main.mjs\nimport {sayHi} from './sayHi.mjs';\n\nconsole.log(sayHi); // function...\nsayHi('John'); // Hello, John!\n\n```\n\n**Example 2:**\n**circle\\.mjs**\n```\n// \"circle\" module scope\nconst pi = 3.14159;\n\nconsole.log(pi); // 3.14159\n\n// Usage of pi\n\n```\n\n**main\\.mjs**\n```\nimport './circle';\n\nconsole.log(pi); // ReferenceError: pi is not defined\n\n```\n\nThe variable pi is **not accessible** outside of circle module \\(unless explicitly exported using export\\).\n\n**Refference**:\n* [https://hacks.mozilla.org/2018/03/es\\-modules\\-a\\-cartoon\\-deep\\-dive/](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)\n* [https://javascript.info/modules\\-intro](https://javascript.info/modules-intro)\n\n"
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
                        "data": "The **for\\-of** loop is similar to the for\\-in loop because it loops over iterable objects. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. Compared to the for\\-in loop, it is newer and automatically uses an iterator.\n\n**Syntax:**\n```\nfor (let i of object) {\n    console.log(i);\n}\n\n```\nIf the object is an array, the for\\-of loop will **print out the values** of the array’s indexes in order.\n\n**example 1:**\n```\nlet arr = [3, 5, 7];\n\nfor (let i of arr) {\n  console.log(i);\n}\n\n// output:\n// 3\n// 5\n// 7\n\n```\n\n**example 2:**\n```\nconst items = {\n  'first': new Date(),\n  'second': 2,\n  'third': 'test'\n}\n\nfor (let i of items) {\n  console.log(i);\n}\n\n// Output: TypeError: items is not iterable\n\n```\n\n**example 3: **And it gets all the **values** of all postivie index\n```\nconst array = [1, 2, 3, { id: 254, name: \"Chris\" }]\n\narray[5] = 5\narray[-6] = 6;\narray[\"name\"] = \"Lars\"\n\nfor (let value of array)\n    console.log(`Value: ${value}`);\n    \n// Output:\n// Value: 1\n// Value: 2\n// Value: 3\n// Value: [object Object]\n// Value: undefined\n// Value: 5\n\n```\n"
                    }
                ]
            },
            {
                "key": "3993010c-2552-4c4e-ad7e-195cb2bbc7e5",
                "parentKey": "5df46409-6d87-4099-85c8-664e7e703c8e",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Constructor\nfunction"
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
                        "data": "An **arrow function** is defined using a pair of parenthesis that contains the list of parameters \\(param1, param2, ..., paramN\\), followed by a fat arrow =\\> and a pair of curly braces \\{...\\} that delimits the body statements.\n\n**example 1:**\n```\nconst square = (value) => {\n  return value * value\n}\nsquare(10); // output: \"100\"\n\n```\n\n**example 2:**\n* When the arrow function has only one parameter, the pair of parentheses can be omitted. When it contains a single statement, the curly braces and return can be omitted too.\n\n```\nconst square = value => value * value;\nsquare(10); // output: \"100\"\n\n```\n\n**example 3:**\n* when it takes no parameters\n\n```\nconst currentDate = () => console.log(new Date().toString().slice(0,15));\ncurrentDate(); // output: \"Wed Jul 21 2021\"\n\nconst currentTime = _ => console.log(new Date().toTimeString().slice(0, 8));\ncurrentTime(); // output: \"19:08:58\"\n\n```\n\n**example 4:**\n```\nlet add = (a, b) => a + b;\n\nconst result = add(2, 2);\nconsole.log(result); // output: \"4\"\n\n```\n"
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
                        "data": "Value stored in it can be reassigned. Let is **blocked** scope \\(will see more of that in **Scopes & Closures**\\).\n\nTo declare or create a varaible\n```\nlet message;\n\n```\n\nAssign a data into it by using the assignment operator =:\n```\nmessage = 'Hello';\n\n```\n\nCombine the variable _declaration_ and _assignment_ into a single line\n```\nlet message = 'Hello!';\n\n```\n\nDeclare multiple variables in one line\n```\nlet user = 'John', age = 25, message = 'Hello';\n\n```\n\nReassigning a value\n```\nlet userName = \"Bruce\"\nuserName = \"Wayne\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "c1f96a01-5d07-4fd0-99fb-210490cb6f5a",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "concat"
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
                        "data": "All primitive values are **immutable**, means “**unchangeable**”. Read\\-only. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.\n\n**Example 1:**\n```\nExample 1:\nlet str = 'hello';\nconsole.log(str[0]); // \"h\"\nstr[0] = 'j';\nconsole.log(str); // \"hello\"\n\n```\n\n**Example 2:**\nhttps://github.com/getify/You\\-Dont\\-Know\\-JS/blob/2nd\\-ed/get\\-started/apA.md\n```\nlet myName = \"Kyle\";\nlet yourName = myName;\nmyName = \"Frank\";\nconsole.log(myName); // \"Frank\"\nconsole.log(yourName); // \"Kyle\"\n\n```\n**yourName** wasn't affected by the re\\-assignment of **myName** to \"Frank\"? That's because each variable holds its own copy of the value.\n\n**Example 3:**\n```\n// Using a string method doesn't mutate the string\nvar bar = \"baz\";\nconsole.log(bar);               // baz\nbar.toUpperCase();\nconsole.log(bar);               // baz\n\n// Assignment gives the primitive a new (not a mutated) value\nbar = bar.toUpperCase();       // BAZ\n\n```\n\nFor more info \\- [https://developer.mozilla.org/en\\-US/docs/Glossary/Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)"
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
                        "data": "The scope of a variable declared with **var** is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global. \n\nYou can also assign a value to a variable For example, **x = 42**. This form creates an **undeclared global variable**. \n\n```\nvar x = 0; // Declares x within file scope, then assigns it a value of 0.\n\nconsole.log(typeof z); // \"undefined\", since z doesn't exist yet\n\nfunction a() {\n    var y = 2; // Declares y within scope of function a, then assigns it a value of 2.\n\n    console.log(x, y); // 0 2\n\n    function b() {\n        x = 3; // Assigns 3 to existing file scoped x.\n        y = 4; // Assigns 4 to existing outer y.\n        z = 5; // Creates a new global variable z, and assigns it a value of 5.\n        // (Throws a ReferenceError in strict mode.)\n    }\n\n    b(); // Creates z as a global variable.\n    console.log(x, y, z); // 3 4 5\n}\n\na(); // Also calls b.\nconsole.log(x, z);     // 3 5\nconsole.log(typeof y); // \"undefined\", as y is local to function a\n\n```\n\n**Note: window** and **document**, for example, are global variables supplied by the **browser**. In a **Node** environment, you can access **global** object as a global variable.\n\n**Refference:**\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Statements/var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)\n* https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Guide/Grammar\\_and\\_types#variable\\_scope\n\n"
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
                "key": "12256f82-0a50-4408-8a76-525865cbad4b",
                "parentKey": "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "delete"
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
                        "data": "A **closure** is the combination of a function bundled together \\(enclosed\\) with references to its surrounding state \\(the lexical environment\\). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. In JavaScript, closures are created every time a function is created, at function creation time.\n\nThe closure **captures** variables from lexical environment.\n```\nfunction outerFunc() {\n  let outerVar = 'I am outside!';\n\n  function innerFunc() {\n    console.log(outerVar); // => logs \"I am outside!\"\n  }\n\n  return innerFunc; // Even though this function is being returned it still remembers lexical environment\n}\n\nconst myInnerFunc = outerFunc();\nmyInnerFunc();\n\n```\nNow **innerFunc\\(\\)** is executed outside of its lexical scope. And what’s important. **innerFunc\\(\\)** still has access to **outerVar** from its **lexical scope**, _even being executed outside of its lexical scope_.\n\nIn other words, **innerFunc\\(\\) **closes over \\(a.k.a. captures, remembers\\) the variable outerVar from its lexical scope.\n\n**Refference:**\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)\n* https://javascript.info/closure#lexical\\-environment\n\n"
                    }
                ]
            },
            {
                "key": "131c9433-90a2-40b8-9e02-b774761c2456",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [],
                "collapse": false,
                "style": "{\"contentStyle\":{\"background\":\"#f1919f\",\"borderStyle\":\"none\"},\"linkStyle\":{\"lineType\":\"curve\"}}",
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "OOP"
                    }
                ]
            },
            {
                "key": "af72cd3d-9be6-4420-9c07-1a80e2c62e2d",
                "parentKey": "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "forEach"
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
                        "data": "**Block scope** \\- A code block in JavaScript defines a scope for variables declared using **let** and **const **within a curly brace **\\{\\}. **it can be accessed only within that curly brace.\n\n**Example 1:**\n```\nif (true) {\n  // \"if\" block scope\n  const message = 'Hello';\n  let name = \"Chris\"\n  console.log(message); // 'Hello'\n  console.log(name); // 'Chris'\n}\nconsole.log(message); // throws ReferenceError\nconsole.log(name); // throws ReferenceError\n\n```\n\n**Example 2:**\n```\nlet fullMoon = true;\n\n// Initialize a global variable\nlet species = \"human\";\n\nif (fullMoon) {\n  // Initialize a block-scoped variable\n  let species = \"werewolf\";\n  console.log(`${species}`); // \"werewolf\"\n}\n\nconsole.log(`${species}`); // \"human\"\n\n```\n\n**Example 3: var is not block scoped**\n```\nif (true) {\n  // \"if\" block scope\n  var count = 0;\n  console.log(count); // 0\n}\nconsole.log(count); // 0\n\n```\n\nA code block does not create a scope for var variables, but a function body does.\n\n**Refference:**\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Statements/block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)\n\n"
                    }
                ]
            },
            {
                "key": "3dc1c815-02b4-4097-ae29-578920b3a065",
                "parentKey": "9b52509a-42df-4ba8-9200-29ec192e314a",
                "subKeys": [
                    "c261d5f7-915b-4abd-b3d1-47ef335bc8ff",
                    "28bcdae2-e48d-47e3-bc28-5f6afecfef7d",
                    "ed43d880-a946-4d1f-8a16-fc59a0662188",
                    "a6c4854c-be38-4f7f-9866-a0025b236e65",
                    "af8c79c0-2a79-40e8-a7ff-5edf08399e5b"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Map &\nmethods"
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
                        "data": "The **current context of execution**. The context in which values and expressions are \"visible\" or can be referenced. If a variable or other expression is not \"in the current scope,\" then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.\n\nDifference Between **var**, **let**, and **const**\n```\n| Keyword |     Scope      | Hoisting | Can Be Reassigned | Can Be Redeclared |\n| :-----: | :------------: | :------: | :---------------: | :---------------: |\n|   var   | Function scope |   Yes    |        Yes        |        Yes        |\n|   let   |  Block scope   |    No    |        Yes        |        No         |\n|  const  |  Block scope   |    No    |        No         |        No         |\n\n```\n\n**Reference** \n* [https://javascript.info/var](https://javascript.info/var)\n* [https://javascript.info/closure](https://javascript.info/closure)\n* [https://developer.mozilla.org/en\\-US/docs/Glossary/Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)\n\n"
                    }
                ]
            },
            {
                "key": "45b02b6a-06f9-4bad-80bb-14c97acb3b80",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "unshift"
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
                        "data": "**if** statement can be extended with an **else** statement, which adds another block to run when the **if** condition doesn’t pass.\n\n**Syntax:**\n```\nif (condition) {\n      //when condition is true this block will be executed\n      // no futher conditions will be checked\n} else {\n      //when a condition is false/failed this block will be executed\n}\n\n```\n\n**example:**\n```\nif (\"cat\" === \"dog\") {\n      console.log(\"if block executed\");\n} else {\n      console.log(\"else block executed\");\n}\n// Output: \"else block executed\"\n\n```\n"
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
                        "data": "Conditional statements controls behavior and determines whether or not a piece of code can run.\n\n## Truthy\n\nIn JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy \\(i.e., except for false, 0, \\-0, 0n, \"\", null, undefined, and NaN\\).\n\n**Examples of truthy values** in JavaScript \\(which will be coerced to true in boolean contexts, and thus execute the if block\\)\n```\nif (true)\n    if ({})\n        if ([])\n            if (42)\n                if (\"0\")\n                    if (\"false\")\n                        if (new Date())\n                            if (-42)\n                                if (12n)\n                                    if (3.14)\n                                        if (-3.14)\n                                            if (Infinity)\n                                                if (-Infinity)\n                                                    console.log(\"Yay!!! Success\")                                                    \n// Output - \"Yay!!! Success\"\n\n```\n\n\n## Falsy\n\nA falsy \\(sometimes written falsey\\) value is a value that is considered false when encountered in a Boolean context.\n\n**Complete list of JavaScript falsy values**\n| false | The keyword false. |\n|:--- |:--- |\n| 0 | The Number zero \\(so, also 0.0, etc., and 0x0\\). |\n| \\-0 | The Number negative zero \\(so, also \\-0.0, etc., and \\-0x0\\). |\n| 0n | The BigInt zero \\(so, also 0x0n\\). Note that there is no BigInt negative zero — the negation of 0n is 0n. |\n| \"\", | '', \\`\\` Empty string value. |\n| null | null — the absence of any value. |\n| undefined | undefined — the primitive value. |\n| NaN | NaN — not a number. |\n| document\\.all | Objects are falsy if and only if they have the \\[\\[IsHTMLDDA\\]\\] internal slot.That slot only exists in document.all and cannot be set using JavaScript. |\n"
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
                        "data": "**Scope chain** \\- When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.\n\nIf it’s still could not find the variable, it will either implicitly declare the variable in the global scope \\(if not in strict mode\\) or return an error.\n\n**Example 1:**\n```\nfunction run() {\n  // \"run\" function scope\n  const message = 'Run, Forrest, Run!';\n\n  if (true) {\n    // \"if\" code block scope\n    const friend = 'Bubba';\n    console.log(message); // 'Run, Forrest, Run!'\n  }\n\n  console.log(friend); // throws ReferenceError\n}\n\nrun();\n\n```\n\nThe scope contained within another scope is named **_inner scope_**. In the example, if code block scope is an inner scope of run\\(\\) function scope. The scope that wraps another scope is named **_outer scope_**. In the example, run\\(\\) function scope is an outer scope to if code block scope.\n\n**example 2:**\n```\n// global scope\nvar e = 10;\nfunction sum(a){\n  return function sum2(b){\n    return function sum3(c){\n      // outer functions scope\n      return function sum4(d){\n        // local scope\n        return a + b + c + d + e;\n      }\n    }\n  }\n}\n\nvar sum2 = sum(1);\nvar sum3 = sum2(2);\nvar sum4 = sum3(3);\nvar result = sum4(4);\nconsole.log(result) //log 20\n\n```\n"
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
                        "data": "Hoisting is a JavaScript mechanism where variables and function declarations are **moved to the top of their scope** before code execution.\n\nWhen you execute a piece of JavaScript code, the JavaScript engine creates the **global execution context**. The global execution context has two phases: **creation** and **execution**. During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as **_hoisting_** in JavaScript.\n\n## Variable hoisting\n\n* using **var**\n\n```\nconsole.log(counter); // undefined\nvar counter = 1;\n\n```\n\n* using **let**\n\n```\nconsole.log(counter); // \"ReferenceError: Cannot access 'counter' before initialization\nlet counter = 1;\n\n```\n\n\n## Function hoisting\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\n\nconsole.log(add) // ƒ add(a, b){\n                 //  return a + b;\n                 //  }\n\nconsole.log(result); // 30\n\nfunction add(a, b){\nreturn a + b;\n}\n\n```\n\n\n## Function expressions\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\nconsole.log(result); // \"TypeError: add is not a function\n\nvar add = function(x, y) {\nreturn x + y;\n}\n\n```\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\nconsole.log(result); // \"TypeError: add is not a function\n\nvar add = (x, y) => x + y;\n\n```\n\nDuring the creation phase of the **global execution context**, the JavaScript Engine creates the **add** variable in the memory and initializes its value to **undefined**. When executing the following code, the add is undefined, hence, it isn’t a function."
                    }
                ]
            },
            {
                "key": "6608af00-8cd4-4fe1-bd0b-e18e12f4a684",
                "parentKey": "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "add"
                    }
                ]
            },
            {
                "key": "ebc9a270-2a40-4a5c-bf55-79f90cd5f8ce",
                "parentKey": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "shift"
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
                        "data": "The keyword **const** is an abbreviation for **constant**. Similar to **let**, it’s **block\\-scoped**, however, you can’t reassigned it and value must be provided when declaring it.\n\n**Example 1:**\n```\nconst pi = 3.14\nconsole.log(\"Pi :\", pi); // 3.14\n\n```\n\n**Example 2:**\n```\nconst gravity; // SyntaxError: Missing initializer in const declaration\n\n```\n\n**Example 3:**\n```\nconst name = \"Chris\"\nname = \"Jordan\" // TypeError: Assignment to constant variable.\n\n```\n"
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
                        "data": "The **switch** statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.\n\n**Example 1:** expression matches a case\nThe **break** statement terminates the current flow of execution\n```\nconst expr = 'Papayas';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    break;\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// output: \"Mangoes and papayas are $2.79 a pound.\"\n\n```\n\n**Example 2:** expression did not match any cases\n```\nconst expr = 'Onion';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    break;\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// output: \"Sorry, we are out of Onion.\"\n\n```\n\n**Example 3:** expression matches a case but break statement is not specified\nIf you forget a _break_ then the script will run from the case where the criterion is met and will run the cases after that _regardless if a criterion was met_.\n```\nconst expr = 'Oranges';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// Output:\n// Oranges are $0.59 a pound.\n// Mangoes and papayas are $2.79 a pound.\n// Sorry, we are out of Oranges.\n\n```\n"
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
                        "data": "Non\\-primitive are mutuable means '**changeable**'.  Only object values \\(arrays, objects, functions, etc.\\) are treated as references\n\n**Example 1:**\n```\nlet arr = [212, 8, 506];\nconsole.log(arr[0]); // 212\narr[0] = 420;\nconsole.log(arr); // [420, 8, 506]\n\n```\n\n**Example 2 \\-**\n[https://github.com/getify/You\\-Dont\\-Know\\-JS/blob/2nd\\-ed/get\\-started/apA.md](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apA.md)\n```\nlet myAddress = {\n    street: \"123 JS Blvd\",\n    city: \"Austin\",\n    state: \"TX\"\n};\n\nlet yourAddress = myAddress;\n\nmyAddress.street = \"456 TS Ave\";\n\nconsole.log(yourAddress.street); // 456 TS Ave\nconsole.log(myAddress.street) // 456 TS Ave\n\n```\n\nValue assigned to **myAddress** is an object, it's held/assigned by reference, and thus the assignment to the **yourAddress** variable is a copy of the reference, not the object value itself. That's why the updated value assigned to the myAddress.street is reflected when we access yourAddress.street. myAddress and yourAddress have copies of the **reference to the single shared object**, so an update to one is an update to both."
                    }
                ]
            },
            {
                "key": "5df46409-6d87-4099-85c8-664e7e703c8e",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [
                    "89f35d77-be58-421f-96f1-c53ebf79d892",
                    "79a87fe8-34ea-45e0-90b4-ee2399074191",
                    "3993010c-2552-4c4e-ad7e-195cb2bbc7e5",
                    "277f12bf-6cef-4676-92bb-ee233886e4cb",
                    "e153daae-cd39-4033-bd24-8fcf1a6f9f84"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Objects"
                    }
                ]
            },
            {
                "key": "e153daae-cd39-4033-bd24-8fcf1a6f9f84",
                "parentKey": "5df46409-6d87-4099-85c8-664e7e703c8e",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Object.create()"
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
                "key": "ed43d880-a946-4d1f-8a16-fc59a0662188",
                "parentKey": "3dc1c815-02b4-4097-ae29-578920b3a065",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "entries"
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
                        "data": "**If** statement only runs if the condition enclosed in parentheses \\(\\) is truthy\n\n**Syntax:**\n```\nif (condition) {\n    //when condition is true this block will be executed\n}\n\n```\n\n**example**:\n```\nif (10 > 5) {\n    console.log(\"if blocked executed\");\n}\n\n// Output - \"if blocked executed\"\n\n```\n"
                    }
                ]
            },
            {
                "key": "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
                "parentKey": "9b52509a-42df-4ba8-9200-29ec192e314a",
                "subKeys": [
                    "c1f96a01-5d07-4fd0-99fb-210490cb6f5a",
                    "fa03906c-9682-4352-98eb-3a4525a5780c",
                    "62774116-bea5-49c3-a72c-6371f1cde7cb",
                    "1c417f10-9197-42eb-a724-a2c99a488847",
                    "f9aad4c2-5205-49ec-a74c-ed04c3bb6813",
                    "8d03fe66-9d8f-4ae3-96c1-d18220788b3a",
                    "ebc9a270-2a40-4a5c-bf55-79f90cd5f8ce",
                    "45b02b6a-06f9-4bad-80bb-14c97acb3b80"
                ],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Array &\nmethods"
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
                        "data": "A variable is a **container** for a value or **named storage** for data. And it is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name."
                    }
                ]
            },
            {
                "key": "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Classes"
                    }
                ]
            },
            {
                "key": "a6c4854c-be38-4f7f-9866-a0025b236e65",
                "parentKey": "3dc1c815-02b4-4097-ae29-578920b3a065",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "forEach"
                    }
                ]
            },
            {
                "key": "89f35d77-be58-421f-96f1-c53ebf79d892",
                "parentKey": "5df46409-6d87-4099-85c8-664e7e703c8e",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Object\nliterals"
                    },
                    {
                        "type": "DESC",
                        "data": "**Shorthand** method definition can be used in a method declaration on object literals and ES2015 classes. You can define them using a function name, followed by a list of parameters in a pair of parenthesis \\(para1, ..., paramN\\) and a pair of curly braces \\{ ... \\} that delimits the body statements.\n\n```\nconst collection = {\n  items: [],\n  add(...items) {\n    this.items.push(...items);\n  },\n  get(index) {\n    return this.items[index];\n  }\n};\ncollection.add('C', 'Js', 'PHP', 'Java');\nconsole.log(collection.get(1)) //output: \"Js\"\n\n```\n\n**add\\(\\)** and **get\\(\\)** methods in **collection** object are defined using short method definition. These methods are called as usual: **collection\\.add\\(...\\)** and **collection\\.get\\(...\\)**."
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
                        "data": "Function\ndeclaration"
                    },
                    {
                        "type": "DESC",
                        "data": "A **function** declaration \\(also called a function statement\\) consists of the function keyword, followed by:\n* The **name** of the function.\n* A list of **parameters** to the function, enclosed in parentheses and separated by commas.\n* The JavaScript **statements** that define the function, enclosed in braces, **\\{**...**\\}**.\n\n\n**Syntax:**\n```\nfunction validFunctionName(parameter1, parameter2) {\n  return statement;\n}\n\n```\n\n**example 1: which takes no parameters and returns nothing \\(void\\)**\n```\nfunction currentTime() {\n  console.log(new Date().toTimeString().slice(0, 8));\n}\n\ncurrentTime() // output: \"18:35:36\"\n\n```\n\n**example 2: which takes parameters and returns a value**\nThe **return** statement ends function execution and specifies a value to be returned to the function caller.\n```\nfunction sum(a, b) {\n  return a + b;\n}\nconst result = sum(5, 6);\n\nconsole.log(result); // output: \"11\"\n\n```\n\n**example 3**: **default parameters** \n```\nfunction showMessage(from, text = \"no text given\") {\n  console.log( from + \": \" + text );\n}\n\nshowMessage(\"Ann\"); // output: \"Ann: no text given\"\nshowMessage(\"Ann\", \"Hello, world!\"); // output: \"Ann: Hello, world!\"\n\n```\n\n**example 4: constructor function **\\(will see more this in detail when it comes to **objects**\\)\n```\nfunction Emp(id, name) {\n    this.id = id;\n    this.name = name;\n}\n\nlet emp1 = new Emp(1, \"John\");\n\nconsole.log(emp1.id); // output: \"1\"\nconsole.log(emp1.name); // output: \"John\"\n\n```\n"
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
                "key": "1340cde2-dcef-48de-a00e-1ce996ecf377",
                "parentKey": "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Operators"
                    }
                ]
            },
            {
                "key": "840a8fff-1b5b-48bd-9aae-6214c599c5ab",
                "parentKey": "f8750599-32db-4fb3-829e-0673887df2c2",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "Immediately invoked \nfunction expression"
                    },
                    {
                        "type": "DESC",
                        "data": "An **IIFE** \\(Immediately Invoked Function Expression\\) is a JavaScript function that runs as soon as it is defined or as soon as it starts to executes.\n\n**Syntax:**\n```\n(function () {\n  statements\n})();\n\n```\n* The first is the anonymous function with lexical scope enclosed within the Grouping Operator \\(\\). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.\n* The second part creates the immediately invoked function expression \\(\\) through which the JavaScript engine will directly interpret the function.\n\n\n**example 1:**\n```\n(function () {\n    console.log(\"Immediately invoked\")\n})();\n\n```\n\n**example 2: **Avoid polluting the global namespace\n* If we have some initiation code that we don't need to use again, we could use the IIFE pattern.\n\n```\n(function () {\n  // some initiation code\n  let firstVariable;\n  let secondVariable;\n})();\n\n// firstVariable and secondVariable will be discarded after the function is executed.\n\n```\n\n**example 3: **stack trace\n```\n// Ex 1:\n(function () {\n    throw new Error(\"Exception has occurred\");\n})();\n\n// Error: Exception has occurred\n//     at /Users/git/other/js/test.js:2:11\n//     at Object.<anonymous> (/Users/git/other/js/test.js:3:3)\n//     at Module._compile (node:internal/modules/cjs/loader:1101:14)\n//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n//     at Module.load (node:internal/modules/cjs/loader:981:32)\n//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n//     at node:internal/main/run_main_module:17:47\n\n// Ex 2:\n(function deposit() {\n    throw new Error(\"Exception has occurred\");\n})();\n\n// Error: Exception has occurred\n//     at deposit (/Users/git/other/js/test.js:6:11)\n//     at Object.<anonymous> (/Users/git/other/js/test.js:7:3)\n//     at Module._compile (node:internal/modules/cjs/loader:1101:14)\n//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n//     at Module.load (node:internal/modules/cjs/loader:981:32)\n//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n//     at node:internal/main/run_main_module:17:47\n\n```\nOne of the benefits of creating a named function expression is that in case we encountered an error, the stack trace will contain the name of the function, making it easier to find the origin of the error."
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
                        "data": "The **for\\-in** loop always loops over an object’s elements one by one. It can be **array indexes** or **key incase of objects**. Iterates over all **enumerable property** keys of an object.\n\n**Syntax:**\n```\nfor (let i in object) {\n    console.log(object[i]);\n}\n\n```\nIf the object is an array, the for\\-in loop will **print out the array indexes in order**. If the object contains key\\-value pairs, the for\\-in loop will **print out each key that exists**. A for...in loop iterates over the properties of an object in an **arbitrary** order\n\n**example 1:**\n```\nlet arr = [3, 5, 7];\narr.foo = \"hello\";\n\nfor (let i in arr) {\n  console.log(i); // by default it prints the indexes and key\n}\n\n// output:\n// 0\n// 1\n// 2\n// foo\n\n```\n\n**example 2:**\n```\nconst object = { a: 1, b: 2, c: 3 };\n\nfor (const property in object) {\n  console.log(property); // by default it prints the indexes and key\n}\n\n// output:\n// a\n// b\n// c\n\n```\n\n**example 3:**\n```\nconst object = { a: 1, b: 2, c: 3 };\n\nfor (const property in object) {\n  console.log(`${property}: ${object[property]}`);\n}\n\n// output:\n// \"a: 1\"\n// \"b: 2\"\n// \"c: 3\"\n\n```\n\n**exmaple 4: **And it iterates over by **all index**.\n```\nconst array = [1, 2, 3, { id: 254, name: \"Chris\" }]\n\narray[5] = 5\narray[-6] = 6;\narray[\"name\"] = \"Lars\"\n\nfor (let index in array)\n    console.log(`Index: ${index} & Value: ${array[index]}`);\n    \n// Output:\n// Index: 0 & Value: 1\n// Index: 1 & Value: 2\n// Index: 2 & Value: 3\n// Index: 3 & Value: [object Object]\n// Index: 5 & Value: 5\n// Index: -6 & Value: 6\n// Index: name & Value: Lars\n\n```\n"
                    }
                ]
            },
            {
                "key": "79a87fe8-34ea-45e0-90b4-ee2399074191",
                "parentKey": "5df46409-6d87-4099-85c8-664e7e703c8e",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "new Object()"
                    }
                ]
            },
            {
                "key": "c261d5f7-915b-4abd-b3d1-47ef335bc8ff",
                "parentKey": "3dc1c815-02b4-4097-ae29-578920b3a065",
                "subKeys": [],
                "collapse": false,
                "style": null,
                "blocks": [
                    {
                        "type": "CONTENT",
                        "data": "clear"
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
                    "a37aef6c-b62c-423c-8124-c18edc14142b",
                    "840a8fff-1b5b-48bd-9aae-6214c599c5ab"
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
                        "data": "Function is a \"subprogram\" that can be called by code external \\(or internal in the case of recursion\\) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function will return a value.\n\n**Referrence**:\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)\n\n"
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
