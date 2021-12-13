import { Model } from "@blink-mind/core";

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export function generateSimpleModel() {
  return Model.create({
    rootTopicKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
    editorRootTopicKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
    focusKey: "d051afcf-8e00-4760-8d65-783421039068",
    extData: {
      TOPIC_REFERENCE: {
        reference: {
          "131c9433-90a2-40b8-9e02-b774761c2456": {
            keyList: ["33b684a7-f2aa-41a1-93fb-f5e1e621511d"],
            dataMap: {},
          },
          "e1994f06-f679-4c5f-9197-90f6f2a551e7": {
            keyList: ["bae54fe2-5e3a-40ec-8f36-4d7df7fd5a33"],
            dataMap: {},
          },
        },
      },
    },
    topics: [
      {
        key: "1f66701b-72a2-45be-abad-d14ba71a78e0",
        parentKey: "ccf815c4-e6ad-4cbb-9427-cca701828c6c",
        subKeys: [
          "a2462a85-2447-4110-b244-6d399bcdcd36",
          "16bb2549-ee9b-4d13-bf1f-ee0ba86872b5",
          "ea213084-3b9f-4c99-8f2b-903c00394708",
          "e6406abc-7710-4f4d-9b0d-3b40d9b2d0a7",
          "6a995fff-008c-4e66-a127-590b13b99ffd",
          "97c73d77-1496-431f-93e6-5aebcfbf8020",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Functional\nProgramming",
          },
        ],
      },
      {
        key: "f8959855-b412-49cf-b308-d4b014a6fc59",
        parentKey: "183f002c-a1ac-4ef6-bd23-2495e98fefaa",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Abstraction",
          },
        ],
      },
      {
        key: "1c417f10-9197-42eb-a724-a2c99a488847",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "forEach",
          },
        ],
      },
      {
        key: "9b52509a-42df-4ba8-9200-29ec192e314a",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
          "3dc1c815-02b4-4097-ae29-578920b3a065",
          "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Data\nStructures",
          },
        ],
      },
      {
        key: "af8c79c0-2a79-40e8-a7ff-5edf08399e5b",
        parentKey: "3dc1c815-02b4-4097-ae29-578920b3a065",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "get",
          },
        ],
      },
      {
        key: "4567082c-b57b-45f4-8c04-168f9a2f123f",
        parentKey: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        subKeys: ["f548ba3e-55f6-484d-8289-858f8fd28289"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Boolean",
          },
          {
            type: "DESC",
            data:
              'The boolean type has only two values: **true** and **false**\n\n```\nconsole.log(typeof(true)); //=> "boolean"\nconsole.log(typeof(false)); //=> "boolean"\n\n```\n\n```\nlet nameFieldChecked = true;\nlet ageFieldChecked = false;\n\nconsole.log("Name field checked: ", nameFieldChecked, " and " , "Age field checked: ", ageFieldChecked);\n//=> Name field checked:  true  and  Age field checked:  false\n\n```\n',
          },
        ],
      },
      {
        key: "a1649782-ec29-4030-bb2d-d6044103cf10",
        parentKey: "f8750599-32db-4fb3-829e-0673887df2c2",
        subKeys: ["dfb39c55-dfce-4d5a-88a7-5fd066288121"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Function\nexpression",
          },
          {
            type: "DESC",
            data:
              'A **function expression** is determined by a function keyword, followed by an optional function name \\(anonymous\\), a list of parameters in a pair of parenthesis \\(para1, ..., paramN\\) and a pair of curly braces \\{ ... \\} that delimits the body code.\n\n**Syntax:**\n```\nconst exp = function functionName(params1, params2) {\n    statements;\n}\n\n```\n\n**example 1: named function**\n* It provides the ability to write recursive function\n* Better stack strace and readability\n\n```\nconst count = function arrayLength(array) {\n  return array.length;\n}\n\ncount([5, 7, 8]); // output: "3"\narrayLength([5, 7, 8]); // ReferenceError: arrayLength is not defined\n\n```\n\n**example 2: anonymous function**\n```\nconst count = function(array) {\n  return array.length;\n}\n\ncount([5, 7, 8]); // output: "3"\n\n```\n\n**example 3: Error stack trace**\n```\n// Ex 1:\nconst count = function arrayLength(array) {\n    throw new Error("Custom error")\n}\n\ncount([5, 7, 8]);\n\nError: Custom error\n    at arrayLength (/Users/git/other/js/programming-basics/test.js:2:11)\n    at Object.<anonymous> (/Users/git/other/js/programming-basics/test.js:5:1)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\n\n// Ex 2:    \nconst count = function (array) {\n    throw new Error("Custom error")\n}\n\ncount([5, 7, 8]);\n\nError: Custom error\n    at count (/Users/git/other/js/programming-basics/test.js:2:11)\n    at Object.<anonymous> (/Users/git/other/js/programming-basics/test.js:5:1)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\n\n```\nOne of the benefits of creating a named function expression is that in case we encountered an error, the stack trace will contain the name of the function, making it easier to find the origin of the error.',
          },
        ],
      },
      {
        key: "ddfd37cf-11f2-4176-9d67-f494b6ea0263",
        parentKey: "89cf71a0-0ca8-45ff-b136-62ffbf6ff778",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Default Binding",
          },
          {
            type: "DESC",
            data:
              'The first rule is that, if the function contains a **this** reference and it is a standalone function invocation, then it is bound to global object, the default binding rule applies and it is the default catch\\-all rule when none of the other rules apply. It behaves differently for strict\\-mode and non strict\\-mode.\n\n* Non strict mode\n\n```\nfunction foo() {\n  console.log(this.bar);\n}\nvar bar = "bar"\n\nfoo(); //=> bar\n\n```\n\n* Strict mode\n\n```\nfunction foo() {\n\'use strict\'\nconsole.log(this.bar);\n}\n\nvar bar = "yay"\n\nfoo(); //=> TypeError: this is undefined\n\n```\n',
          },
        ],
      },
      {
        key: "c0743415-e5c5-48da-a6ec-a2d0571da863",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "d48e8af6-6e14-4a4c-967b-15cf3d58036c",
          "245b9e77-ccdc-49b6-8a0a-838244d1de2e",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Exceptions &\nError handling",
          },
          {
            type: "DESC",
            data:
              "* **Exceptions** are expected failures\n* **Errors** are unexpected failures\n   * Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user\\-defined exceptions.\n\n\n**example**\n```\ntry {\n  throw new Error('Whoops!')\n} catch (e) {\n  console.error(e.name + ': ' + e.message) //=> Error: Whoops!\n}\n\n```\n",
          },
        ],
      },
      {
        key: "31aa7d3d-f836-4d0f-8704-6606fb0a1577",
        parentKey: "183f002c-a1ac-4ef6-bd23-2495e98fefaa",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Polymorphism",
          },
        ],
      },
      {
        key: "ea213084-3b9f-4c99-8f2b-903c00394708",
        parentKey: "1f66701b-72a2-45be-abad-d14ba71a78e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "First-class \nfunctions",
          },
        ],
      },
      {
        key: "d1972f4f-fd4a-43b1-8575-480a88d66898",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Shadowing",
          },
          {
            type: "DESC",
            data:
              "**Variable shadowing** occurs when a variable declared within a certain scope \\(decision block, or method\\) has the same name as a variable declared in an outer scope. This _outer variable_ is said to be shadowed by the inner variable, while the inner identifier is said to mask the outer identifier.\n\n**Example 1:**\n```\nlet number = 10; //variable declared in outer scope\n\nfunction displayDouble() {\n  let number = 3; //same variable declared in inner scope\n\n  number = number * 2;\n  console.log(number); //=> 6\n}\n\ndisplayDouble();\nconsole.log(number); //=> 10\n\n```\n\n**Example 2:**\n```\nlet employee = 'Kenny'; //variable declared in outer scope\n\n['Alice', 'Bob', 'Cathy'].forEach(employee => { //same variable declared in inner scope\n  console.log(employee); //=> Alice Bob Cathy\n});\n\nconsole.log(employee); //=> Kenny\n\n```\n\n**Example 3:**\n```\nlet name = 'Jenny'; //variable declared in outer scope\n\nfor (let name = 0; name < 3; name++) { //same variable declared in inner scope\n  console.log(name); //=> 0 1 2\n}\n\nconsole.log(name); //=> Jenny\n\n```\n",
          },
        ],
      },
      {
        key: "9677e53a-05a4-4bd6-9010-f10826426bb6",
        parentKey: "3854fdd8-7de4-429c-b73d-2519cbf63781",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "else If Statement",
          },
          {
            type: "DESC",
            data:
              '**if** statement can be extended with an **else if** statement, which adds another conditional with its own block, it is a way to chain on extra choices/outcomes.\n\n**Syntax:**\n```\nif (condition) {\n     // when condition is true this block will be executed\n     // no futher conditions will be checked\n} else if (condition) {\n      // when a previous block condition has been failed\n      // this(else if) block condition is evaluted\n      // when a condition passed this block will be executed\n} else {\n      //when all condition has been failed this block will be executed\n}\n\n```\n\n**example:**\n```\nif (false) {\n      console.log("if blocked executed");\n} else if (2 < 5 && 3 < 5 ) {\n      console.log("else if blocked executed");\n} else {\n      console.log("else blocked executed");\n}\n\n// Output - "else if blocked executed"\n\n```\n',
          },
        ],
      },
      {
        key: "7662833c-7ece-4668-a37b-4e11820503b4",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: ["9c9627b1-6bba-4135-955e-608e6a937ed1"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Function scope",
          },
          {
            type: "DESC",
            data:
              "**Function Scope** \\- A function in JavaScript defines a scope for variables declared using **var**, **let** and **const**.\n\n**Example 1:**\n```\nfunction run() {\n  // \"run\" function scope\n  var message = 'Run, Forrest, Run!';\n  console.log(message); //=> 'Run, Forrest, Run!'\n}\n\nrun();\nconsole.log(message); //=> throws ReferenceError\n\n```\n**run\\(\\)** function body creates a scope. The variable message is accessible inside of the function scope, but inaccessible outside.\n\n**Exmaple 2:**\n```\nfunction run() {\n  // \"run\" function scope\n  const two = 2;\n  let count = 0;\n  function run2() {}\n\n  console.log(two);   //=> 2\n  console.log(count); //=> 0\n  console.log(run2);  //=> function\n}\n\nrun();\nconsole.log(two);   //=> throws ReferenceError\nconsole.log(count); //=> throws ReferenceError\nconsole.log(run2);  //=> throws ReferenceError\n\n```\n\n**Exmaple 3**: Var is **functional\\-scoped**\n```\nvar fullMoon = true;\n\n// Use var to initialize a variable\nvar species = \"human\";\n\nif (fullMoon) {\n  // Attempt to create a new variable in a block\n  var species = \"werewolf\";\n  console.log(`${species}.`); //=> werewolf\n}\n\nconsole.log(`${species}.`); //=> werewolf\n\n```\nBoth the **global variable** and the **block\\-scoped variable** end up with the same value, **werewolf**. This is because instead of creating a new local variable with var, it is reassigning the same variable in the same scope.\n\n**Example 4:**\n```\nvar foo = 'bar';\n\nfunction bar() {\n    var foo = 'baz';\n\n    function baz(foo) {\n        foo = 'bam';\n        bam = 'yay';\n    }\n    baz();\n}\n\nbar();\nconsole.log(foo); //=> bar\nconsole.log(bam); //=> yay\nbaz(); //=> ReferenceError: bam is not defined\n\n\n```\n",
          },
        ],
      },
      {
        key: "91f27dd0-5185-4daa-8501-15ba8727dc06",
        parentKey: "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "for .. each",
          },
          {
            type: "DESC",
            data:
              'The **forEach\\(\\)** method executes a provided function once for each array element \\(will see more of this in detail in Array & methods\\)\n\n**example 1:**\n```\nconst array = [1, 2, 3, { id: 254, name: "Chris" }]\n\narray[5] = 5\narray[-6] = 6;\narray["name"] = "Lars"\n\narray.forEach(value => console.log(`Value: ${value}`));\n\n// Output:\n// Value: 1\n// Value: 2\n// Value: 3\n// Value: [object Object]\n// Value: 5\n\n```\n',
          },
        ],
      },
      {
        key: "96d2f138-986b-4286-b6da-755624dba9c4",
        parentKey: "e1994f06-f679-4c5f-9197-90f6f2a551e7",
        subKeys: [
          "e94db39f-5a03-4a4c-95ab-dec899802e63",
          "a3a421e7-3427-489e-892c-2342014a2235",
          "8800712b-3d36-41bf-a8d2-a4bdb3b520e5",
          "9a4cffea-7c9c-428d-8b2f-14e22805be6e",
        ],
        collapse: false,
        style: '{"contentStyle":{"background":"#eb7bb2"}}',
        blocks: [
          {
            type: "CONTENT",
            data: "Promises",
          },
          {
            type: "DESC",
            data:
              "Promise is an object represents the eventual completion \\(or failure\\) of an asynchronous operation and its resulting value. And it address the callback hell problem, inversion of control.\n\nA **Promise** is in one of these states:\n* **pending**: initial state, neither fulfilled nor rejected.\n* **fulfilled**: meaning that the operation was completed successfully.\n* **rejected**: meaning that the operation failed.\n\n\n```none\n                                            ┌───────────┐                                     \n                                            │   async   │                                     \n                                    ┌──────▶│  actions  │                                     \n                                    │       └───────────┘                                     \n                           settled  │                                                         \n                           ┌────────┴────────┐                                                \n                           │      .then      │                                                \n                     ┌─────▶ (onFulfillment) ├───┐                                            \n                     │     │                 │   │                                            \n                 fulfill   └─────────────────┘   │                                            \n    pending          │                           │                                            \n┌──────────────┐     │                        return      pending                             \n│              │     │                           │   ┌─────────────────┐        ┌────────────┐\n│   Promise    ├─────┤                           │   │                 │        │  .then()   │\n│              │     │                           ├───▶    Promise      ├────────▶  .catch()  │ ... \n└──────────────┘     │                           │   │                 │        │            │\n                  reject                         │   └─────────────────┘        └────────────┘\n                     │     ┌─────────────────┐ return                                         \n                     │     │                 │   │                                            \n                     └─────▶                 ├───┘                                            \n                           │     .catch      │                                                \n                           │  (onRejection)  │                                                \n                           └────────┬────────┘                                                \n                                    │                                                         \n                                    │        ┌───────────┐                                    \n                                    │        │   error   │                                    \n                                    └───────▶│ handling  │                                    \n                                             └───────────┘\n\n```\n\nFor more info,\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Global\\_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Guide/Using\\_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)\n\n",
          },
        ],
      },
      {
        key: "66e79181-e275-41de-94c5-eac1802afc6b",
        parentKey: "277f12bf-6cef-4676-92bb-ee233886e4cb",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "8d03fe66-9d8f-4ae3-96c1-d18220788b3a",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "pop",
          },
        ],
      },
      {
        key: "f319a1ab-dd84-45fa-b56f-023f85f0e1a9",
        parentKey: "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "objects",
          },
        ],
      },
      {
        key: "c1e621c4-ae65-40d0-ad48-650368d181d0",
        parentKey: "29f23365-fcf6-4f8f-8060-811df84e4770",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "d4cb9863-ba6c-4ea6-903e-44accf4a5b7b",
          "29f23365-fcf6-4f8f-8060-811df84e4770",
          "a3055667-8217-484e-aae8-728cab93135c",
          "91f27dd0-5185-4daa-8501-15ba8727dc06",
          "65199906-ca55-4ae8-bd9f-a4a08cbc2432",
          "a70b7d9d-ea0f-49c3-a488-ddbceebe85d8",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Loops",
          },
          {
            type: "DESC",
            data:
              "A loop is a sequence of instructions that is **continually repeated** until a certain condition is met. An example would be the process of getting an item of data and changing it, and then making sure some condition is checked such as, if a counter has reached a prescribed number.",
          },
        ],
      },
      {
        key: "ef12f21d-9fc6-4b69-9034-dfe4162cf6e7",
        parentKey: "183f002c-a1ac-4ef6-bd23-2495e98fefaa",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Inheritance",
          },
        ],
      },
      {
        key: "dbc9a664-bff0-4263-811c-cb91470ce277",
        parentKey: "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Object",
          },
          {
            type: "DESC",
            data:
              '**Object** : typeof instance === "object". It is used to store collections of data and more complex entities.\n\n```\nconsole.log(typeof({})); //=> "object"\nconsole.log(typeof([])); //=> "object" - Arrays aren’t primitive, they are objects\nconsole.log(typeof(new Map())); //=> "object"\nconsole.log(typeof(new Date())); //=> "object"\n\n```\n\nSpecial non\\-data but Structural type for any constructed object instance also used as data structures: \n1. new Object, \n1. new Array, \n1. new Map, \n1. new Set, \n1. new WeakMap, \n1. new WeakSet, \n1. new Date and almost everything made with **new** keyword;\n\n\n**Indexed collections**: Arrays and typed Arrays\n**Keyed collections**: Maps, Sets, WeakMaps, WeakSets',
          },
        ],
      },
      {
        key: "d48e8af6-6e14-4a4c-967b-15cf3d58036c",
        parentKey: "c0743415-e5c5-48da-a6ec-a2d0571da863",
        subKeys: ["31322dda-20dd-46ac-846f-5a632516e9dd"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "throw /\nerror",
          },
          {
            type: "DESC",
            data:
              "## Throw\n\n* The **throw** statement throws a user\\-defined exception. Execution of the current function will stop \\(the statements after throw won't be executed\\), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.\n\n\n**Syntax:**\n```\nthrow expression;\n\n```\n\n**example 1:**\n```\nthrow 'Error2'; // generates an exception with a string value\nthrow 42;       // generates an exception with the value 42\nthrow true;     // generates an exception with the value true\n\n```\n\n**example 2:**\n```\nfunction getRectArea(width, height) {\n    if (isNaN(width) || isNaN(height)) {\n        throw 'Parameter is not a number!';\n    }\n}\n\ntry {\n    getRectArea(3, 'A');\n} catch (e) {\n    console.error(e); //=> Parameter is not a number!\n}\n\n```\n\n## Error\n\n* **Error** objects are thrown when runtime errors occur. The Error object can also be used as a base object for user\\-defined exceptions.\n\n\n**example**\n* Throwing a generic error\n\n```\ntry {\n  throw new Error('Whoops!')\n} catch (e) {\n  console.error(e.name + ': ' + e.message) //=> Error: Whoops!\n}\n\n```\n\n* Handling a specific error type\n\n```\ntry {\n    foo.bar()\n} catch (e) {\n    if (e instanceof EvalError) {\n        console.error(e.name + ': ' + e.message)\n    } else if (e instanceof RangeError) {\n        console.error(e.name + ': ' + e.message)\n    }\n    else {\n        // If none of our cases matched leave the Error unhandled\n        throw e;\n    }\n}\n\nResult:\n\nfile:///Users/execption.js:2\nfoo.bar()\n^\n\nReferenceError: foo is not defined\nat file:///Users/execption.js:2:5\nat ModuleJob.run (node:internal/modules/esm/module_job:183:25)\nat async Loader.import (node:internal/modules/esm/loader:178:24)\nat async Object.loadESM (node:internal/process/esm_loader:68:5)\nat async handleMainPromise (node:internal/modules/run_main:63:12)\n\n```\n\n* Custom Error Class\n\n```\nclass CustomError extends Error {\n    constructor(foo = 'bar', ...params) {\n        // Pass remaining arguments (including vendor specific ones) to parent constructor\n        super(...params)\n\n        // Maintains proper stack trace for where our error was thrown (only available on V8)\n        if (Error.captureStackTrace) {\n            Error.captureStackTrace(this, CustomError)\n        }\n\n        this.name = 'CustomError'\n        // Custom debugging information\n        this.foo = foo\n        this.date = new Date()\n    }\n}\n\ntry {\n    throw new CustomError('baz', 'bazMessage')\n} catch (e) {\n    console.error(e.name)    //=> CustomError\n    console.error(e.foo)     //=> baz\n    console.error(e.message) //=> bazMessage\n    console.error(e.stack)   //=> stacktrace\n}\n\n```\n\nFor more info,\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Global\\_Objects/Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)\n\n",
          },
        ],
      },
      {
        key: "36a2fcb8-8f7a-4b25-adbc-3be25f6f534a",
        parentKey: "89cf71a0-0ca8-45ff-b136-62ffbf6ff778",
        subKeys: ["73667249-cfd7-438c-a8db-cb40b58d16fb"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Explicit Binding",
          },
          {
            type: "DESC",
            data:
              "**Explicit Binding** will force a function call to use a particular object for the **this** binding\\. And it can be achieved using **call\\(\\)** and **apply\\(\\)**.\n\n* example 1\n\n```\nfunction foo() {\n    console.log(this.bar);\n}\n\nlet obj1 = { bar: 'bar 1' };\nlet obj2 = { bar: 'bar 2' };\n\nfoo.call(obj1); //=> bar 1\nfoo.apply(obj2) //=> bar 2\n\n```\n\n* example 2\n\n```\nfunction foo() {\n    console.log(this.bar);\n}\n\nlet obj1 = { bar: 'bar 1' };\nlet obj2 = { bar: 'bar 2' };\n\nlet orig = foo;\n\nfoo = function () { orig.call(obj1) };\n\nfoo(); //=> bar 1\nfoo.call(obj2); //=> bar 1 'it is explicitly bound to obj1'\n\n```\n",
          },
        ],
      },
      {
        key: "277f12bf-6cef-4676-92bb-ee233886e4cb",
        parentKey: "5df46409-6d87-4099-85c8-664e7e703c8e",
        subKeys: ["66e79181-e275-41de-94c5-eac1802afc6b"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Class",
          },
          {
            type: "DESC",
            data:
              '**Classes** are a template for creating objects. Classes in JS are built on prototypes. It is useful for creating multiple objects. And it is a new ES style convention and recommended one.\n\n```\nclass Employee {\n    constructor(firstName, lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n    print() {\n        console.log(`${this.firstName} ${this.lastName}`)\n    }\n}\n\nlet user1 = new Employee("Jack", "Ryan");\nuser1.print(); //=> Jack Ryan\n\nlet user2 = new Employee("Alice", "Martin");\nuser2.print(); //=> Alice Martin\n\n```\n',
          },
        ],
      },
      {
        key: "a70b7d9d-ea0f-49c3-a488-ddbceebe85d8",
        parentKey: "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "do while",
          },
          {
            type: "DESC",
            data:
              '**do\\-while** loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is checked.\n\n```\nlet i = 10;\ndo {\n  console.log("The number is " + i);\n  i++;\n}\nwhile (i < 5);\n\n// output: "The number is 10"\n\n```\n',
          },
        ],
      },
      {
        key: "88317110-d644-4ca9-84bf-01ae778571da",
        parentKey: "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "entries",
          },
        ],
      },
      {
        key: "fa03906c-9682-4352-98eb-3a4525a5780c",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "filter",
          },
        ],
      },
      {
        key: "f9aad4c2-5205-49ec-a74c-ed04c3bb6813",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "push",
          },
        ],
      },
      {
        key: "d4cb9863-ba6c-4ea6-903e-44accf4a5b7b",
        parentKey: "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "for",
          },
          {
            type: "DESC",
            data:
              'The **for** loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times.\n\n**Syntax:**\n```\nfor(initialization; condition; final-expression) {\n    // Code to be executed\n}\n\n```\n\n* **initialization** — it is used to initialize the counter variables, and evaluated once unconditionally before the first execution of the body of the loop.\n* **condition** — it is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute. If it evaluates to false, the execution of the loop ends.\n* **final\\-expression** — this is always evaluated \\(or run\\) each time the loop has gone through a full iteration. It usually serves to increment \\(or in some cases decrement\\) the counter variable.\n\n\n**example 1**:\n```\nfor (let i = 0; i < 10; i++) {\n  console.log("The number is " + i);\n}\n\n// Output:\n// "The number is 0"\n// "The number is 1"\n// "The number is 2"\n// "The number is 3"\n// "The number is 4"\n// "The number is 5"\n// "The number is 6"\n// "The number is 7"\n// "The number is 8"\n// "The number is 9"\n\n```\n\n**example 2: **skipping current execution of loop using **continue** statement\n```\nfor (let i = 0; i < 10; i++) {\n  if(i%2===0){\n    continue;\n  }\n  console.log("The number is " + i);\n}\n\n// Output:\n// "The number is 1"\n// "The number is 3"\n// "The number is 5"\n// "The number is 7"\n// "The number is 9"\n\n```\n\n**example 3**: terminating current execution flow of the loop using **break** statement\n```\nfor (let i = 0; i < 10; i++) {\n  if(i===5){\n    break;\n  }\n  console.log("The number is " + i);\n}\n\n// Output:\n// "The number is 0"\n// "The number is 1"\n// "The number is 2"\n// "The number is 3"\n// "The number is 4"\n\n```\n\n**example 4: **following example is valid js code\n```\nfor (; ;) {\n    console.log("Infinite loop - \'JavaScript heap out of memory\' it is what you get when you run");\n}\n\n```\n\n**example 5: **And it iterates over by **positive numeric index**.\n```\nconst array = [1, 2, 3, { id: 254, name: "Chris" }]\n\narray[5] = 5\narray[-6] = 6;\narray["name"] = "Lars"\n\nfor (let index = 0; index < array.length; index++)\n    console.log(`Index: ${index} & Value: ${array[index]}`);\n\n// Output:\n//Index: 0 & Value: 1\n//Index: 1 & Value: 2\n//Index: 2 & Value: 3\n//Index: 3 & Value: [object Object]\n//Index: 4 & Value: undefined\n//Index: 5 & Value: 5     \n\n```\n',
          },
        ],
      },
      {
        key: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        parentKey: null,
        subKeys: [
          "44213600-22aa-4972-aa99-eec27b840064",
          "252c6937-bd93-4233-90cb-333938667c72",
          "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
          "3854fdd8-7de4-429c-b73d-2519cbf63781",
          "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
          "f8750599-32db-4fb3-829e-0673887df2c2",
          "5df46409-6d87-4099-85c8-664e7e703c8e",
          "9b52509a-42df-4ba8-9200-29ec192e314a",
          "c0743415-e5c5-48da-a6ec-a2d0571da863",
          "1340cde2-dcef-48de-a00e-1ce996ecf377",
          "ccf815c4-e6ad-4cbb-9427-cca701828c6c",
          "e1994f06-f679-4c5f-9197-90f6f2a551e7",
          "bae54fe2-5e3a-40ec-8f36-4d7df7fd5a33",
        ],
        collapse: false,
        style: '{"contentStyle":{"background":"#f8e71c"}}',
        blocks: [
          {
            type: "CONTENT",
            data: "Js",
          },
          {
            type: "DESC",
            data:
              "JavaScript is a **prototype\\-based**, multi\\-paradigm, single\\-threaded, dynamic language, supporting object\\-oriented, imperative, and declarative \\(e.g. functional programming\\) styles.\n\nIt is a lightweight, interpreted, or just\\-in\\-time compiled programming language. Which involves two phases  \n* Parsing/Compilation, and\n* Execution\\.\n\n",
          },
        ],
      },
      {
        key: "6a995fff-008c-4e66-a127-590b13b99ffd",
        parentKey: "1f66701b-72a2-45be-abad-d14ba71a78e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Immutability",
          },
        ],
      },
      {
        key: "a2462a85-2447-4110-b244-6d399bcdcd36",
        parentKey: "1f66701b-72a2-45be-abad-d14ba71a78e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Higher-order\nfunction",
          },
        ],
      },
      {
        key: "a37aef6c-b62c-423c-8124-c18edc14142b",
        parentKey: "f8750599-32db-4fb3-829e-0673887df2c2",
        subKeys: ["24a0e9fa-2a33-4e0d-8736-ec434151a6d0"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Generator\nfunction",
          },
          {
            type: "DESC",
            data:
              "A **generator** is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.\n\n**example 1:** function declaration \\- **function\\* <function\\-name\\>\\(\\)**\n```\nfunction* generatorFunction() {\n  console.log('This will be executed first.');\n  yield 'Hello, ';\n  console.log('I will be printed after the pause');  \n  yield 'World!';\n}\nconst generatorObject = generatorFunction();\n\nconsole.log(generatorObject.next().value);\n// This will be executed first.\n// Hello, \nconsole.log(generatorObject.next().value);\n// I will be printed after the pause\n// World!\nconsole.log(generatorObject.next().value);\n// undefined\n\n```\n\n**example 2: **function expression \\- **function\\* \\(\\)**\n```\nconst indexGenerator = function* () {\n  let index = 0;\n  while(true) {\n    yield index++;\n  }\n};\nconst g = indexGenerator();\nconsole.log(g.next().value); //=> 0\nconsole.log(g.next().value); //=> 1\n\n```\n\n**example 3: **Shorthand method definition \\- **\\*<function\\-name\\>\\(\\)**\n```\nconst obj = {\n  *indexGenerator() {\n    var index = 0;\n    while(true) {\n      yield index++;\n    }\n  }\n}\nconst g = obj.indexGenerator();\nconsole.log(g.next().value); //=> 0\nconsole.log(g.next().value); //=> 1\n\n```\n",
          },
        ],
      },
      {
        key: "62774116-bea5-49c3-a72c-6371f1cde7cb",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "find",
          },
        ],
      },
      {
        key: "9c9627b1-6bba-4135-955e-608e6a937ed1",
        parentKey: "7662833c-7ece-4668-a37b-4e11820503b4",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "d3f7bd55-fe91-45b2-b13e-ea98bb7710d9",
        parentKey: "10d9744a-f521-4bdf-8933-9c3fb1cfb2c8",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
        parentKey: "9b52509a-42df-4ba8-9200-29ec192e314a",
        subKeys: [
          "6608af00-8cd4-4fe1-bd0b-e18e12f4a684",
          "bb6f8cdb-b6ee-4040-9195-170825342ded",
          "12256f82-0a50-4408-8a76-525865cbad4b",
          "88317110-d644-4ca9-84bf-01ae778571da",
          "af72cd3d-9be6-4420-9c07-1a80e2c62e2d",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Set &\nmethods",
          },
        ],
      },
      {
        key: "48db7a4d-51df-43d6-bbdc-5ee3889f5eba",
        parentKey: "89cf71a0-0ca8-45ff-b136-62ffbf6ff778",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Implicit Binding",
          },
          {
            type: "DESC",
            data:
              "Another rule to consider is, if the call\\-site have a context object, also referred to as an owning or containing object, in other wrords if the function is attached to an object \\(its context\\) at the call site. Then the implicit binding rule says that it's _that_ object which should be used for the function call's **this** binding\\.\n\n* example 1\n\n```\nfunction foo() {\n    console.log(this.bar);\n}\n\nvar obj1 = { bar: 'bar 1', foo: foo };\nvar obj2 = { bar: 'bar 2', foo: foo };\n\nobj1.foo(); //=> bar 1\nobj2.foo(); //=> bar 2\n\n```\n\n* example 2\n\n```\nvar obj1 = {\n    bar: 'bar 1',\n    foo: function () {\n        console.log(this.bar);\n    }\n}\n\nvar obj2 = { bar: 'bar 2', foo: obj1.foo };\nvar obj3 = { bar: 'bar 3', foo: obj2.foo };\nvar obj4 = { bar: 'bar 3', obj2: obj2 };\n\nobj1.foo(); //=> bar 1\nobj2.foo(); //=> bar 2\nobj3.foo(); //=> bar 3\nobj4.obj2.foo(); //=> bar 2 `top/last level of an object property reference chain matters to the call-site`\n\n```\n\n_Note: \\_One way to figure out which object _**this**_ is bound to is to look at which object is to the \\*\\*\\_left_** of the dot operator \\(**.\\*\\*\\)",
          },
        ],
      },
      {
        key: "fc11e9b2-fb2a-4f5d-934e-65c172bb61fa",
        parentKey: "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Function",
          },
          {
            type: "DESC",
            data:
              'A function is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, optionally arguments are passed to the function as input, and the function can return a value. \n\nA function in JavaScript is also an **object**.\n\n```\nconsole.log(typeof(x => x * 2)); //=> "function"\nconsole.log(typeof(function(){})); //=> "function"\n\n```\n',
          },
        ],
      },
      {
        key: "b31ac6cb-b3c3-4dd2-83a1-6b5b7466d048",
        parentKey: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Null",
          },
          {
            type: "DESC",
            data:
              'In JavaScript, null is **not** a “reference to a non\\-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “**nothing**”, “**empty**” or “**value unknown**”.\n\nThe special **null** value does not belong to any of the types described above.\n```\nconsole.log(typeof(null)); //=> "object"\n\n// This is a bug and one that unfortunately can’t be fixed, \n// because it would break existing code.\n// https://2ality.com/2013/10/typeof-null.html\n\n```\n\nIt forms a separate type of its own which contains only the null value:\n```\nlet age = null;\nconsole.log(age); //=> null\n\n```\n',
          },
        ],
      },
      {
        key: "31322dda-20dd-46ac-846f-5a632516e9dd",
        parentKey: "d48e8af6-6e14-4a4c-967b-15cf3d58036c",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "24a0e9fa-2a33-4e0d-8736-ec434151a6d0",
        parentKey: "a37aef6c-b62c-423c-8124-c18edc14142b",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "ccf815c4-e6ad-4cbb-9427-cca701828c6c",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "1f66701b-72a2-45be-abad-d14ba71a78e0",
          "131c9433-90a2-40b8-9e02-b774761c2456",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Programming\nparadigms",
          },
          {
            type: "DESC",
            data:
              "A _programming paradigm_ is a _**style**_, or _**way**_, of programming.\n\n### Some common programming paradigms\n\n* **Imperative** in which the programmer instructs the machine how to change its state,\n   * _**Procedural**_ which groups instructions into procedures,\n   * _**Object\\-oriented**_ which groups instructions with the part of the state they operate on,\n* **Declarative** in which the programmer merely declares properties of the desired result, but not how to compute it\n   * _**Functional**_ in which the desired result is declared as the value of a series of function applications,\n   * _**Logical**_ in which the desired result is declared as the answer to a question about a system of facts and rules,\n   * _**Reactive**_ in which the desired result is declared with data streams and the propagation of change\n\n",
          },
        ],
      },
      {
        key: "05c8bbd0-fe13-4906-92cf-8507b33954da",
        parentKey: "252c6937-bd93-4233-90cb-333938667c72",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "var",
          },
          {
            type: "DESC",
            data:
              "Value stored in it can be **reassigned**. Variables, declared with var, are either function\\-scoped or global\\-scoped. \\(will see more of that in **Scopes & Closures**\\). Their visibility is scoped to current function, or global, if declared outside function.\n\nTo declare or create a varaible\n```\nvar message;\n\n```\n\nAssign a data into it by using the assignment operator **=**\n```\nmessage = 'Hello';\n\n```\n\nCombine the variable _declaration_ and _assignment_ into a single line\n```\nvar message = 'Hello!';\n\n```\n\nDeclare multiple variables in one line\n```\nvar user = 'John', age = 25, message = 'Hello';\n\n```\n\nReassigning a value\n```\nvar userName = \"Bruce\"\nuserName = \"Wayne\"\n\nconsole.log(userName) //=> \"Wayne\"\n\n```\n",
          },
        ],
      },
      {
        key: "33b684a7-f2aa-41a1-93fb-f5e1e621511d",
        parentKey: "f8750599-32db-4fb3-829e-0673887df2c2",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "_proto_ &\nprototype",
          },
          {
            type: "DESC",
            data:
              'In JavaScript, objects have a special hidden property **\\[\\[Prototype\\]\\]**, that is either null or references another object. That object is called “a prototype”.\n\nThe property \\[\\[Prototype\\]\\] is internal and hidden, but there are many ways to set it. One of them is to use the special name \\_\\_proto\\_\\_\n```\nlet animal = {\n  eats: true\n};\nlet rabbit = {\n  jumps: true\n};\n\nrabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal\n\n```\n\n* **\\_\\_proto\\_\\_** is an internal property of an object, pointing to its prototype. And it is used in the lookup chain to resolve methods \\(usage of \\_\\_proto\\_\\_ is deprecated**\\)**\n* **prototype** is a property of a Function object. It is the prototype of objects constructed by that function.\n\n\n**example 1:**\n```\nfunction Person(name) {\n    this.name = name;\n}\n\nPerson.prototype.age = 25;\n\nlet william = new Person(\'William\');\nwilliam.age = 35;\n\n// the __proto__ property on the instance refers to the prototype of the constructor\nconsole.log(william.__proto__ === Person.prototype); //=> true\n\nconsole.log(william.age); //=> 35\n\n// now we are directly accessing the prototype of the Person function\nconsole.log(william.__proto__.age); //=> 25\n\n// william.__proto points to "Person" prototype \n// william.__proto.__proto__ points to "Object" prototype\nwilliam.__proto__.__proto__.toString = function () {\n    console.log("built-in object modified");\n}\n\nconst obj = {};\nobj.toString(); //=> built-in object modified\n\n```\n\n**example 2:**\n```\nfunction Employee(id, name) {\n\n    // instance members goes into objects\n    this.id = id;\n    this.name = name;\n\n    // function object members goes into Employee\n    Employee.count = 0;\n\n    // prototype members goes into shared prototype\n    Employee.prototype.baseSalary = 5000;\n\n    // instance function goes into every instance (wasting resource)\n    this.print = function () {\n        console.log(`id=${this.id}, name=${this.name}`);\n    }\n\n    // prototype functions goes into shared prototype, added only once\n    Employee.prototype.printDetails = function () {\n        console.log(`id=${this.id}, name=${this.name}`);\n    }\n\n}\n\nlet emp1 = new Employee(1, "Alice")\nemp1.print(); //=> id=1, name=Alice\nemp1.printDetails(); //=> id=1, name=Alice\nemp1.baseSalary = 1000;\nconsole.log(emp1.baseSalary); //=> 1000\n\nlet emp2 = new Employee(2, "Bob")\nemp2.print(); //=> id=1, name=Alice\nemp2.printDetails(); //=> id=1, name=Alice\nconsole.log(emp2.baseSalary); //=> 5000\n\nconsole.log(emp1.constructor.count); //=> 0\nconsole.log(emp2.constructor.count); //=> 0\n\n```\n\n**prototype \\- object linkage:**\n```none\n                 ┌──┬────────────┬─────┐            ┌──┬────────────┬─────┐                 \n                 │F │     key    │value│            │  │     key    │value│                 \n                 │u ├────────────┼─────┤            │O ├────────────┼─────┤                 \n                 │n │  __proto__ │     │            │b │  __proto__ │     │                 \n                 │c ├────────────┼─────┤            │j ├────────────┼─────┤                 \n                 │t │   call()   │     │            │e │ toString() │     │                 \n                 │i ├────────────┼─────┤            │c ├────────────┼─────┤                 \n                 │o │  apply()   │     │            │t │ valueOf()  │     │                 \n                 │n ├────────────┼─────┤            │  ├────────────┼─────┤                 \n                 │  │   bind()   │     │            │  │   ...      │     │                 \n                 └──┴───────▲────┴─────┘            └──┴───────▲────┴─────┘                 \n┌──┬────────────┬─────┐     │     ┌──┬────────────┬─────┐      │                            \n│  │     key    │value│     │     │p │     key    │value│      │                            \n│E ├────────────┼─────┤     │     │r ├────────────┼─────┤      │                            \n│m │  __proto__ │   ●─┼─────┘     │o │  __proto__ │    ●┼──────┘                            \n│p ├────────────┼─────┤           │t ├────────────┼─────┤                                   \n│l │  prototype │   ●─┼───────────▶o │ constructor│     │                                   \n│o │            │     │◁──────────●t │            │     │                                   \n│y ├────────────┼─────┤           │y ├────────────┼─────┤                                   \n│e │   count    │     │           │p │ baseSalary │     │           ┌──────────────────────┐\n│e ├────────────┼─────┤           │e ├────────────┼─────┤           │function printDetails{│\n│  │            │     │           │  │printDetails│   ●─┼──────────▶│          }           │\n└──┴────────────┴─────┘           └──┴────────────┴─────┘           └──────────────────────┘\n                                             ▲                                              \n                                             │                                              \n                                             │                                              \n             ┌──┬────────────┬─────┐         │                                              \n             │  │     key    │value│         │                                              \n             │  ├────────────┼─────┤         │                                              \n             │e │  __proto__ │  ●──┼─────────┘                                              \n             │m ├────────────┼─────┤                                                        \n             │p │     id     │     │                                                        \n             │1 ├────────────┼─────┤                                                        \n             │  │    name    │     │          ┌───────────────┐                             \n             │  ├────────────┼─────┤          │function print{│                             \n             │  │    print   │  ●──┼─────────▶│       }       │                             \n             └──┴────────────┴─────┘          └───────────────┘\n\n```\n\nFor more refference,\n* [https://javascript.info/prototypes](https://javascript.info/prototypes)\n\n',
          },
        ],
      },
      {
        key: "07fcbf3d-5e2d-4049-b16a-075a36dea9ec",
        parentKey: "49780f87-17f7-4f90-a761-6ddf6ce8e1ca",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Error handling",
          },
          {
            type: "DESC",
            data:
              "A common callback pattern is called \"error\\-first style\" \\(sometimes called \"Node style,\" as it's also the convention used across nearly all Node.js APIs\\), where the first argument of a single callback is reserved for an error object \\(if any\\). If success, this argument will be empty/falsy \\(and any subsequent arguments will be the success data\\), but if an error result is being signaled, the first argument is set/truthy \\(and usually nothing else is passed\\)\n\n```\n// Example asynchronous function\nfunction asynchronousRequest(args, callback) {\n  // Throw an error if no arguments are passed\n  if (!args) {\n    return callback(new Error('Whoa! Something went wrong.'))\n  } else {\n    return setTimeout(\n      // Just adding in a random number so it seems like the contrived asynchronous function\n      // returned different data\n      () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),\n      500,\n    )\n  }\n}\n\n// Nested asynchronous requests\nfunction callbackHell() {\n  asynchronousRequest('First', function first(error, response) {\n    if (error) {\n      console.log(error)\n      return\n    }\n    console.log(response.body)\n    asynchronousRequest('Second', function second(error, response) {\n      if (error) {\n        console.log(error)\n        return\n      }\n      console.log(response.body)\n      asynchronousRequest(null, function third(error, response) {\n        if (error) {\n          console.log(error)\n          return\n        }\n        console.log(response.body)\n      })\n    })\n  })\n}\n\n// Execute\ncallbackHell()\n\n```\n",
          },
        ],
      },
      {
        key: "5830091e-64ee-4015-aeff-f8779fa73582",
        parentKey: "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Attributes",
          },
        ],
      },
      {
        key: "28bcdae2-e48d-47e3-bc28-5f6afecfef7d",
        parentKey: "3dc1c815-02b4-4097-ae29-578920b3a065",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "delete",
          },
        ],
      },
      {
        key: "bb6f8cdb-b6ee-4040-9195-170825342ded",
        parentKey: "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "clear",
          },
        ],
      },
      {
        key: "a44085f3-06c0-4910-9787-af5b20c0709b",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: [],
        collapse: false,
        style: '{"contentStyle":{"background":"#9b9b9b"}}',
        blocks: [
          {
            type: "CONTENT",
            data: "Module scope",
          },
          {
            type: "DESC",
            data:
              '**Module Scope **\\- A module is just a file. One script is one module. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:\n\n* **export** keyword labels variables and functions that should be accessible from outside the current module.\n* **import** allows the import of functionality from other modules.\n\n\nBefore modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.\n\nTo make import/export work, browsers need **<script type="module"\\> **and for NodeJS \\- set **"type": "module"** in the **package\\.json** or use the **.mjs** extension\\.\n\n**Example 1:**\nFor instance, if we have a file** sayHi\\.mjs** exporting a function:\n```\n// 📁 sayHi.mjs\nexport function sayHi(user) {\n  console.log(`Hello, ${user}!`);\n}\n\n```\n\n…Then another file may import and use it:\n```\n// 📁 main.mjs\nimport {sayHi} from \'./sayHi.mjs\';\n\nconsole.log(sayHi); //=> function...\nsayHi(\'John\'); //=> Hello, John!\n\n```\n\n**Example 2:**\n**circle\\.mjs**\n```\n// "circle" module scope\nconst pi = 3.14159;\n\nconsole.log(pi); //=> 3.14159\n\n// Usage of pi\n\n```\n\n**main\\.mjs**\n```\nimport \'./circle\';\n\nconsole.log(pi); //=> ReferenceError: pi is not defined\n\n```\n\nThe variable pi is **not accessible** outside of circle module \\(unless explicitly exported using export\\).\n\n**Refference**:\n* [https://hacks.mozilla.org/2018/03/es\\-modules\\-a\\-cartoon\\-deep\\-dive/](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)\n* [https://javascript.info/modules\\-intro](https://javascript.info/modules-intro)\n\n',
          },
        ],
      },
      {
        key: "a3055667-8217-484e-aae8-728cab93135c",
        parentKey: "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "for .. of",
          },
          {
            type: "DESC",
            data:
              "The **for\\-of** loop is similar to the for\\-in loop because it loops over iterable objects. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. Compared to the for\\-in loop, it is newer and automatically uses an iterator.\n\n**Syntax:**\n```\nfor (let i of object) {\n    console.log(i);\n}\n\n```\nIf the object is an array, the for\\-of loop will **print out the values** of the array’s indexes in order.\n\n**example 1:**\n```\nlet arr = [3, 5, 7];\n\nfor (let i of arr) {\n  console.log(i);\n}\n\n// output:\n// 3\n// 5\n// 7\n\n```\n\n**example 2:**\n```\nconst items = {\n  'first': new Date(),\n  'second': 2,\n  'third': 'test'\n}\n\nfor (let i of items) {\n  console.log(i);\n}\n\n// Output: TypeError: items is not iterable\n\n```\n\n**example 3: **And it gets all the **values** of all postivie index\n```\nconst array = [1, 2, 3, { id: 254, name: \"Chris\" }]\n\narray[5] = 5\narray[-6] = 6;\narray[\"name\"] = \"Lars\"\n\nfor (let value of array)\n    console.log(`Value: ${value}`);\n    \n// Output:\n// Value: 1\n// Value: 2\n// Value: 3\n// Value: [object Object]\n// Value: undefined\n// Value: 5\n\n```\n",
          },
        ],
      },
      {
        key: "3993010c-2552-4c4e-ad7e-195cb2bbc7e5",
        parentKey: "5df46409-6d87-4099-85c8-664e7e703c8e",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Constructor\nfunction",
          },
          {
            type: "DESC",
            data:
              '**Constructor function** can also be used to create objects in JS. It is useful for creating multiple objects. And it is an old ES style convention not recommended anymore.\n\n```\nfunction Person(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n}\n\nPerson.prototype.print = function () {\n    console.log(`${this.firstName} ${this.lastName}`)\n}\n\nlet user1 = new Person("Jack", "Ryan")\nuser1.print(); //=> Jack Ryan\n\nlet user2 = new Person("Alice", "Martin")\nuser2.print(); //=> Alice Martin\n\n```\n',
          },
        ],
      },
      {
        key: "a9f8d9be-7d66-4b3e-941d-429c02913ec5",
        parentKey: "f8750599-32db-4fb3-829e-0673887df2c2",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Arrow\nfunction",
          },
          {
            type: "DESC",
            data:
              'An **arrow function** is defined using a pair of parenthesis that contains the list of parameters \\(param1, param2, ..., paramN\\), followed by a fat arrow =\\> and a pair of curly braces \\{...\\} that delimits the body statements.\n\n**example 1:**\n```\nconst square = (value) => {\n  return value * value\n}\nsquare(10); // output: "100"\n\n```\n\n**example 2:**\n* When the arrow function has only one parameter, the pair of parentheses can be omitted. When it contains a single statement, the curly braces and return can be omitted too.\n\n```\nconst square = value => value * value;\nsquare(10); // output: "100"\n\n```\n\n**example 3:**\n* when it takes no parameters\n\n```\nconst currentDate = () => console.log(new Date().toString().slice(0,15));\ncurrentDate(); // output: "Wed Jul 21 2021"\n\nconst currentTime = _ => console.log(new Date().toTimeString().slice(0, 8));\ncurrentTime(); // output: "19:08:58"\n\n```\n\n**example 4:**\n```\nlet add = (a, b) => a + b;\n\nconst result = add(2, 2);\nconsole.log(result); // output: "4"\n\n```\n',
          },
        ],
      },
      {
        key: "5a194e70-b4a3-49f9-8e9a-64f0b9456ede",
        parentKey: "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Methods",
          },
        ],
      },
      {
        key: "092ca5f2-7268-4e31-b7bd-d9aa2c3fd8d0",
        parentKey: "183f002c-a1ac-4ef6-bd23-2495e98fefaa",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Encapsulation",
          },
        ],
      },
      {
        key: "265fb26e-4629-437b-8e64-aa7ce30ae47a",
        parentKey: "252c6937-bd93-4233-90cb-333938667c72",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "let",
          },
          {
            type: "DESC",
            data:
              "Value stored in it can be reassigned. Let is **blocked** scope \\(will see more of that in **Scopes & Closures**\\).\n\nTo declare or create a varaible\n```\nlet message;\n\n```\n\nAssign a data into it by using the assignment operator =:\n```\nmessage = 'Hello';\n\n```\n\nCombine the variable _declaration_ and _assignment_ into a single line\n```\nlet message = 'Hello!';\n\n```\n\nDeclare multiple variables in one line\n```\nlet user = 'John', age = 25, message = 'Hello';\n\n```\n\nReassigning a value\n```\nlet userName = \"Bruce\"\nuserName = \"Wayne\"\n\n```\n",
          },
        ],
      },
      {
        key: "c1f96a01-5d07-4fd0-99fb-210490cb6f5a",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "concat",
          },
        ],
      },
      {
        key: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        parentKey: "44213600-22aa-4972-aa99-eec27b840064",
        subKeys: [
          "c92fd58b-57a4-4c72-897a-d1c394f9a8aa",
          "1590d94a-ef69-4f89-9e2d-a3de018ca2d4",
          "5c6ad5d4-eb49-479c-be03-0b8d8e805cee",
          "4567082c-b57b-45f4-8c04-168f9a2f123f",
          "b31ac6cb-b3c3-4dd2-83a1-6b5b7466d048",
          "b5c8a0d0-01e6-4922-a8f0-132d5442bb1d",
          "e784d8b5-f79b-469c-8fa4-e7305d4405b3",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Primitive",
          },
          {
            type: "DESC",
            data:
              'All primitive values are **immutable**, means “**unchangeable**”. Read\\-only. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.\n\n**Example 1:**\n```\nExample 1:\nlet str = \'hello\';\nconsole.log(str[0]); // "h"\nstr[0] = \'j\';\nconsole.log(str); // "hello"\n\n```\n\n**Example 2:**\nhttps://github.com/getify/You\\-Dont\\-Know\\-JS/blob/2nd\\-ed/get\\-started/apA.md\n```\nlet myName = "Kyle";\nlet yourName = myName;\nmyName = "Frank";\nconsole.log(myName); // "Frank"\nconsole.log(yourName); // "Kyle"\n\n```\n**yourName** wasn\'t affected by the re\\-assignment of **myName** to "Frank"? That\'s because each variable holds its own copy of the value.\n\n**Example 3:**\n```\n// Using a string method doesn\'t mutate the string\nvar bar = "baz";\nconsole.log(bar);               // baz\nbar.toUpperCase();\nconsole.log(bar);               // baz\n\n// Assignment gives the primitive a new (not a mutated) value\nbar = bar.toUpperCase();       // BAZ\n\n```\n\nFor more info \\- [https://developer.mozilla.org/en\\-US/docs/Glossary/Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)',
          },
        ],
      },
      {
        key: "1590d94a-ef69-4f89-9e2d-a3de018ca2d4",
        parentKey: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "BigInt",
          },
          {
            type: "DESC",
            data:
              'In JavaScript, the “**number**” type cannot represent integer values larger than \\(253\\-1\\) \\(that’s 9007199254740991\\), or less than \\-\\(253\\-1\\) for negatives. It’s a technical limitation caused by their internal representation.\n\n```\nconsole.log(typeof(22234234n)); //=> "bigint"\n\n```\n\nA BigInt value is created by appending n to the end of an integer\n```\nconst bigInt = 1234567890123456789012345678901234567890n; // the "n" at the end means it\'s a BigInt\n\n```\n\nBigInt numbers are rarely needed',
          },
        ],
      },
      {
        key: "3cad2294-2687-43b8-bd7d-1ca3ebd67acd",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Logical\noperators",
          },
          {
            type: "DESC",
            data:
              '**Logical operators** are typically used with Boolean \\(logical\\) values; when they are, they return a Boolean value. There are four logical operators in JS\n* \\|\\| \\(OR\\)\n* && \\(AND\\)\n* \\! \\(NOT\\)\n* ?? \\(Nullish Coalescing\\)\n\n\n### \\|\\| \\(OR\\)\n\n* Returns true if **either** operand is true; if both are false, returns false.\n\n```\nconsole.log(true || true);   //=> true\nconsole.log(false || true);  //=> true\nconsole.log(true || false);  //=> true\nconsole.log(false || false); //=> false\n\n\nif (1 || 0) { // works just like if( true || false )\n    console.log(\'truthy!\'); //=> truthy!\n}\n\nlet hour = 9;\nif (hour < 10 || hour > 18) {\n    console.log(\'The office is closed.\'); //=> The office is closed.\n}\n\n```\n* OR \\|\\| operator is the called “**short\\-circuit**” evaluation \\- It means that \\|\\| processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.\n\n```\ntrue || console.log("not printed");\nfalse || console.log("printed"); //=> printed\n\n```\n\n\n### && \\(AND\\)\n\n* Returns true if **both** operands are true; otherwise, returns false.\n\n```\nconsole.log(true && true);   //=> true\nconsole.log(false && true);  //=> false\nconsole.log(true && false);  //=> false\nconsole.log(false && false); //=> false\n\nlet hour = 12;\nlet minute = 30;\nif (hour == 12 && minute == 30) {\n    console.log(\'The time is 12:30\'); //=> The time is 12:30\n}\n\nif (1 && 0) { // evaluated as true && false\n    console.log("won\'t work, because the result is falsy");\n}\n\n```\n\n\n### Short\\-circuit evaluation\n\nAs logical expressions are evaluated left to right, they are tested for possible "short\\-circuit" evaluation using the following rules:\n\n* false && anything is short\\-circuit evaluated to false.\n* true \\|\\| anything is short\\-circuit evaluated to true.\n\n\n### \\! \\(NOT\\)\n\n* Returns the inverse value.\n\n```\nconsole.log(!true); //=> false\nconsole.log(!0); //=> true\n\nconsole.log(!!"non-empty string"); //=> true\nconsole.log(!!null); //=> false\n\nconsole.log(Boolean("non-empty string")); //=> true\nconsole.log(Boolean(null)); //=> false\n\n```\n',
          },
        ],
      },
      {
        key: "9eaa4c3f-edb8-487d-b332-ad14665991f9",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Assignment\noperators",
          },
          {
            type: "DESC",
            data:
              "An **assignment operator** assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal \\(=\\), which assigns the value of its right operand to its left operand. That is, x = y assigns the value of y to x.\n\n| **Name** | **Shorthand operator** | **Meaning** |\n|:--- |:--- |:--- |\n| Assignment | x = y | x = y |\n| Addition assignment | x \\+= y | x = x \\+ y |\n| Subtraction assignment | x \\-= y | x = x \\- y |\n| Multiplication assignment | x \\*= y | x = x \\* y |\n| Division assignment | x /= y | x = x / y |\n| Remainder assignment | x %= y | x = x % y |\n| Exponentiation assignment | x \\*\\*= y | x = x \\*\\* y |\n| Left shift assignment | x <<= y | x = x << y |\n| Right shift assignment | x \\>\\>= y | x = x \\>\\> y |\n| Unsigned right shift assignment | x \\>\\>\\>= y | x = x \\>\\>\\> y |\n| Bitwise AND assignment | x &= y | x = x & y |\n| Bitwise XOR assignment | x ^= y | x = x ^ y |\n| Bitwise OR assignment | x \\| = y | x = x \\| y |\n| Logical AND assignment | x &&= y | x && \\(x = y\\) |\n| Logical OR assignment | x \\| \\| = y | x \\| \\| \\(x = y\\) |\n| Logical nullish assignment | x ??= y | x ?? \\(x = y\\) |\n**example**\n```\nconst x = 10;\nlet y = x;\nconsole.log(y); //=> 10\n\nlet a = null;\nlet b = 100;\nconsole.log(a) //=> null\na ??= b; // operator only assigns if a is nullish\nconsole.log(a) //=> 100\n\n```\n",
          },
        ],
      },
      {
        key: "65199906-ca55-4ae8-bd9f-a4a08cbc2432",
        parentKey: "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "while",
          },
          {
            type: "DESC",
            data:
              'The **while** loop loops through a block of code as long as the specified condition evaluates to true. As soon as the condition fails, the loop is stopped.\n\n**Syntax:**\n\n```\nwhile(condition) {\n    // as long as the condition is true\n    // code in this block will be executed\n}\n\n```\n\n**example 1:**\n\n```\nlet count = 1;\nwhile(count <= 5) {    \n    console.log("The number is " + count);\n    count++;\n}\n\n// Output:\n// The number is 1\n// The number is 2\n// The number is 3\n// The number is 4\n// The number is 5\n\n```\n\n**example 2: **skipping current execution of loop using **continue** statement\n\n```\nlet count = 1;\nwhile(count <= 10) {\n    if(count%2===0){\n        count++;\n        continue;\n    }    \n    console.log("The number is " + count);\n    count++;\n}\n\n// Output:\n// "The number is 1"\n// "The number is 3"\n// "The number is 5"\n// "The number is 7"\n// "The number is 9"\n\n```\n\n**example 3**: terminating current execution flow of the loop using **break** statement\n\n```\nlet count = 1;\nwhile(true) {\n    if(count===10){\n        break;\n    }    \n    console.log("The number is " + count);\n    count++;\n}\n\n// Output:\n// "The number is 1"\n// "The number is 2"\n// "The number is 3"\n// "The number is 4"\n// "The number is 5"\n// "The number is 6"\n// "The number is 7"\n// "The number is 8"\n// "The number is 9"\n\n```\n',
          },
        ],
      },
      {
        key: "f548ba3e-55f6-484d-8289-858f8fd28289",
        parentKey: "4567082c-b57b-45f4-8c04-168f9a2f123f",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "a405dd09-5977-4ac7-9823-fbc6cc2a630f",
        parentKey: "e1994f06-f679-4c5f-9197-90f6f2a551e7",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "async /\nawait",
          },
          {
            type: "DESC",
            data:
              'The keywords aysnc and await makes working with promises easier.\n\n### async keyword\n\n* The keyword async before a function makes the function return a promise.\n\n```\nfunction myFunc() {\n  return Promise.resolve("Hello, world");\n}\n\n// rewriting the above method using async keyword\n\nasync function myFunc() {\n  return "Hello, world";\n}\n\nmyFunc().then((val) => console.log(val)); //=> "Hello, world"\n\n```\n\n* Using async keyword in arrow function\n\n```\nlet myFunc = async () => "Hello, world";\n\nmyFunc().then((val) => console.log(val)); //=> Hello, world\n\n```\n\n### await keyword\n\n* The** **keyword **await **can be put in front of any async promise\\-based function to pause your code on that line until the promise fulfills, then return the resulting value.\n\n```\nconst one = () => Promise.resolve("One");\n\nasync function myFunc() {\n  console.log("In function");\n  const res = await one();\n  console.log(res);\n}\n\nconsole.log("Before function");\nmyFunc();\nconsole.log("After function");\n\n//=> Before function\n//=> In function\n//=> After function\n//=> One\n\n```\n\n```\nfunction resolveAfter2Seconds() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve("resolved");\n    }, 2000);\n  });\n}\n\nasync function asyncCall() {\n  console.log("Start");\n  const result = await resolveAfter2Seconds();\n  console.log(result);\n  console.log("End");\n}\n\nasyncCall();\n\n//=> Start\n//=> resolved\n//=> End\n\n```\n* Usage of await keyword can only be used inside an async function. \n\n```\nconst one = () => Promise.resolve("One");\n\nconst res = await one();\nconsole.log(res);\n\n//=> SyntaxError: await is only valid in async functions and the top level bodies of modules\n\n```\n\n### Error handling\n\nFor more info,\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Statements/async\\_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)\n\n',
          },
        ],
      },
      {
        key: "35cf3ece-a21e-4a8e-a8f8-d2b24a2b742d",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Global scope",
          },
          {
            type: "DESC",
            data:
              'The scope of a variable declared with **var** is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global. \n\nYou can also assign a value to a variable For example, **x = 42**. This form creates an **undeclared global variable**. \n\n```\nvar x = 0; // Declares x within file scope, then assigns it a value of 0.\n\nconsole.log(typeof z); // "undefined", since z doesn\'t exist yet\n\nfunction a() {\n    var y = 2; // Declares y within scope of function a, then assigns it a value of 2.\n\n    console.log(x, y); // 0 2\n\n    function b() {\n        x = 3; // Assigns 3 to existing file scoped x.\n        y = 4; // Assigns 4 to existing outer y.\n        z = 5; // Creates a new global variable z, and assigns it a value of 5.\n        // (Throws a ReferenceError in strict mode.)\n    }\n\n    b(); // Creates z as a global variable.\n    console.log(x, y, z); // 3 4 5\n}\n\na(); // Also calls b.\nconsole.log(x, z);     //=> 3 5\nconsole.log(typeof y); //=> "undefined", as y is local to function a\n\n```\n\n**Note: window** and **document**, for example, are global variables supplied by the **browser**. In a **Node** environment, you can access **global** object as a global variable.\n\n**Refference:**\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Statements/var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)\n* https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Guide/Grammar\\_and\\_types#variable\\_scope\n\n',
          },
        ],
      },
      {
        key: "aea8f33e-b4a3-4139-a406-d5fa77431698",
        parentKey: "49780f87-17f7-4f90-a761-6ddf6ce8e1ca",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "callback hell",
          },
          {
            type: "DESC",
            data:
              "Callback hell is also reffered as pyramid of doom. And callback hell is almost nothing to do with the nesting/indentation, if you look at example 1 and example 2, both suffers callback hell problem. **Inversion of Control \\- ** it is the notion of having code under your control in one part of the program, then handing control over to a callback in another part of the program\n\n* **example 1:**\n\n```\nsetTimeout(function () {\n    console.log('1');\n    setTimeout(function () {\n        console.log('2');\n        setTimeout(function () {\n            console.log('3');\n        }, 1000)\n    }, 1000)\n}, 1000)\n\n//=> 1\n//=> 2\n//=> 3\n\n```\n\n* **example 2:**\n\n```\nfunction one(callback) {\n    console.log('1');\n    setTimeout(callback, 1000);\n}\n\nfunction two(callback) {\n    console.log('2');\n    setTimeout(callback, 1000);\n}\n\nfunction three() {\n    console.log('3');\n}\n\none(function () {\n    two(three);\n});\n\n//=> 1\n//=> 2\n//=> 3\n\n```\n",
          },
        ],
      },
      {
        key: "5499f8cd-26d8-4796-acc9-b138109bcea0",
        parentKey: "e784d8b5-f79b-469c-8fa4-e7305d4405b3",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "5c6ad5d4-eb49-479c-be03-0b8d8e805cee",
        parentKey: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "String",
          },
          {
            type: "DESC",
            data:
              'A string in JavaScript must be surrounded by quotes.\n\n```\nconsole.log(typeof("hello")); //=> "string"\nconsole.log(typeof(\'hello\')); //=> "string"\nconsole.log(typeof(`hello`)); //=> "string"\n\n```\n\n```\nlet str = "Hello";\nlet str2 = \'Single quotes are ok too\';\nlet phrase = `can embed another ${str}`;\n\nconsole.log("Str:", str, "+", "Str2:", str2, "+", "Phrase:", phrase);\n//=> Str: Hello + Str2: Single quotes are ok too + Phrase: can embed another Hello\n\n```\n\nIn JavaScript, there are 3 types of quotes.\n```\nDouble quotes: "Hello".\nSingle quotes: \'Hello\'.\nBackticks: `Hello`.\n\n```\n',
          },
        ],
      },
      {
        key: "4e7eeab5-6321-43c0-9350-31a523a94d8d",
        parentKey: "89cf71a0-0ca8-45ff-b136-62ffbf6ff778",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "order of\nprecedence",
          },
          {
            type: "DESC",
            data:
              "1. Was the function called with 'new' ?\n1. Was the fucntion called with 'call' or 'apply' specifying an explicit this ?\n1. Was the function called via a containing/owing object \\(context\\) ?\n1. Default, global object \\(expect strict mode\\)\n\n",
          },
        ],
      },
      {
        key: "e94db39f-5a03-4a4c-95ab-dec899802e63",
        parentKey: "96d2f138-986b-4286-b6da-755624dba9c4",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Consuming",
          },
          {
            type: "DESC",
            data:
              "A promise is a JavaScript object that will return a value at some point in the future. A pending promise can either be fulfilled with a value or rejected with a reason \\(error\\).\n\nFetch API, a provides a standard way to make server requests with promises.\n\n* promise fulfilled flow\n\n```\nfetch('https://api.github.com/users/octocat')\n    .then((response) => {\n        return response.json()\n    })\n    .then((data) => {\n        console.log(data)\n    })\n    .catch((error) => {\n        console.error(error)\n    })\n\n```\n\n* promise error flow\n\n```\nfetch('https://api.github.com/users/!@#$%')\n    .then((response) => {\n        return response.json()\n    })\n    .then((data) => {\n        console.log(data)\n    })\n    .catch((error) => {\n        console.error(error)\n    })\n\n```\n",
          },
        ],
      },
      {
        key: "c92fd58b-57a4-4c72-897a-d1c394f9a8aa",
        parentKey: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Number",
          },
          {
            type: "DESC",
            data:
              'The number type represents both **integer** and **floating point** numbers\\.\n\n**Example 1: **Checking the type\n```\nconsole.log(typeof(2)); // "number"\nconsole.log(typeof(-200)); // "number"\nconsole.log(typeof(100.554)); // "number"\nconsole.log(typeof(-99.99)); // "number"\n\n```\n\n```\nlet age = 35\nconst gravity = 9.81  // const for non-changing values\nlet mass = 72         // mass in Kilogram\nconst PI = 3.14       // pi a geometrical constant\nconst boilingPoint = 100 // temperature in oC, boiling point of water which is a constant\nconst bodyTemp = 37      // oC average human body temperature, which is a constant\n\nconsole.log(age, gravity, mass, PI, boilingPoint, bodyTemp) //=> 35 9.81 72 3.14 100 37\n\n```\n',
          },
        ],
      },
      {
        key: "ea952fa5-a291-436e-85a1-8cda065a4432",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "String\noperators",
          },
          {
            type: "DESC",
            data:
              "The **concatenation operator** \\(\\+\\) concatenates two string values together, returning another string that is the union of the two operand strings.\n\n**example:**\n```\nconsole.log('my ' + 'string'); //=> console logs the string \"my string\".\n\nlet myString = 'alpha';\nmyString += 'bet';\nconsole.log(myString); //=> alphabet\n\n```\n",
          },
        ],
      },
      {
        key: "12256f82-0a50-4408-8a76-525865cbad4b",
        parentKey: "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "delete",
          },
        ],
      },
      {
        key: "69e69b35-9400-4fb3-aa5e-e9315b4a6eba",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Closure",
          },
          {
            type: "DESC",
            data:
              "A **closure** is the combination of a function bundled together \\(enclosed\\) with references to its surrounding state \\(the lexical environment\\). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. In JavaScript, closures are created every time a function is created, at function creation time.\n\n_**Closure is when a function 'remembers' its lexical scope even when the function is executed outside that lexical scope.**_\n\nThe closure **captures** variables from lexical environment.\n```\nfunction outerFunc() {\n  let outerVar = 'I am outside!';\n\n  function innerFunc() {\n    console.log(outerVar);\n  }\n\n  return innerFunc; // Even though this function is being returned it still remembers lexical environment\n}\n\nconst myInnerFunc = outerFunc();\nmyInnerFunc(); //=> \"I am outside!\"\n\n```\nNow **innerFunc\\(\\)** is executed outside of its lexical scope. And what’s important. **innerFunc\\(\\)** still has access to **outerVar** from its **lexical scope**, _even being executed outside of its lexical scope_.\n\nIn other words, **innerFunc\\(\\) **closes over \\(a.k.a. captures, remembers\\) the variable outerVar from its lexical scope.\n\n**Refference:**\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)\n* https://javascript.info/closure#lexical\\-environment\n\n",
          },
        ],
      },
      {
        key: "e6406abc-7710-4f4d-9b0d-3b40d9b2d0a7",
        parentKey: "1f66701b-72a2-45be-abad-d14ba71a78e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Recursion",
          },
        ],
      },
      {
        key: "131c9433-90a2-40b8-9e02-b774761c2456",
        parentKey: "ccf815c4-e6ad-4cbb-9427-cca701828c6c",
        subKeys: [
          "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
          "183f002c-a1ac-4ef6-bd23-2495e98fefaa",
        ],
        collapse: false,
        style:
          '{"contentStyle":{"background":"#f1919f","borderStyle":"none"},"linkStyle":{"lineType":"curve"}}',
        blocks: [
          {
            type: "CONTENT",
            data: "Object Oriented\nProgramming",
          },
          {
            type: "DESC",
            data:
              "**Object\\-oriented programming** \\(OOP\\) is a programming paradigm based on the concept of \"**objects**\", which can contain _data_ and **code**: \n* **data,** in the form of fields \\(often known as attributes or properties\\), and \n* **code**, in the form of procedures \\(often known as methods\\).\n\n\nJS is _Prototype\\-based programming_ is a style of object\\-oriented programming in which classes are not explicitly defined, but rather derived by adding _properties_ and _methods_ to an instance of another class or, less frequently, adding them to an empty object. In simple words, this type of style allows the creation of an object without first defining its class.\n* Every single 'object' is built by a constructor call.\n* A constructor makes an object linked to its own prototype.\n\n\nFor more details, refer to **\\_\\_proto\\_\\_ and prototype** of Functions",
          },
        ],
      },
      {
        key: "e1994f06-f679-4c5f-9197-90f6f2a551e7",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "49780f87-17f7-4f90-a761-6ddf6ce8e1ca",
          "96d2f138-986b-4286-b6da-755624dba9c4",
          "a405dd09-5977-4ac7-9823-fbc6cc2a630f",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "callback &\npromises &\nasync/await",
          },
          {
            type: "DESC",
            data:
              "JS is a **single\\-threaded programming language** with a **synchronous** **execution** model that processes one operation after another, it can only process one statement at a time. However, an action like requesting data from an API can take an indeterminate amount of time, depending on the size of data being requested, the speed of the network connection, and other factors. If API calls were performed in a synchronous manner, the browser would not be able to handle any user input, like scrolling or clicking a button, until that operation completes. This is known as _blocking_.\n\nIn order to prevent blocking behavior, the browser environment has many Web APIs \\(Node APIs\\) that JavaScript can access that are asynchronous, meaning they can run in parallel with other operations instead of sequentially. This is useful because it allows the user to continue using the browser normally while the asynchronous operations are being processed.\n\nOne such function is **setTimeout** and it belongs to the Web API \\- [https://developer.mozilla.org/en\\-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API) and Node API \\- [https://nodejs.org/api/all.html](https://nodejs.org/api/all.html)\n\n**Refference**:\n* Tania Rascia \\- [https://www.digitalocean.com/community/tutorials/understanding\\-the\\-event\\-loop\\-callbacks\\-promises\\-and\\-async\\-await\\-in\\-javascript](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)\n\n\n### Concurrency vs Parallelism:\n\n* Concurrency is the task of running and managing the multiple computations at the same time.\n* Parallelism is the task of running multiple computations simultaneously.\n\n\n**JavaScript has a concurrency model based on an event loop.**\n\nFor more details, \n* [http://tutorials.jenkov.com/java\\-concurrency/concurrency\\-vs\\-parallelism.html](http://tutorials.jenkov.com/java-concurrency/concurrency-vs-parallelism.html)\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)\n\n",
          },
        ],
      },
      {
        key: "245b9e77-ccdc-49b6-8a0a-838244d1de2e",
        parentKey: "c0743415-e5c5-48da-a6ec-a2d0571da863",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "try/catch/finally",
          },
          {
            type: "DESC",
            data:
              "* The **try** statement consists of a **try\\-block**, which contains one or more statements. \\_\\{\\} \\_must always be used, even for single statements. \n\n\n* A **catch\\-block** contains statements that specify what to do if an exception is thrown in the try\\-block. If any statement within the try\\-block \\(or in a function called from within the try\\-block\\) throws an exception, control is immediately shifted to the catch\\-block. If no exception is thrown in the try\\-block, the catch\\-block is skipped.\n\n\n* The **finally\\-block** will always execute after the try\\-block and catch\\-block\\(s\\) have finished executing. It always executes, regardless of whether an exception was thrown or caught.\n\n\nAt least one catch\\-block, or a finally\\-block, must be present. This gives us three forms for the try statement:\n* try\\...catch\n* try\\...finally\n* try\\...catch...finally\n\n\n\n### try\\...catch\n\n* When a catch\\-block is used, the catch\\-block is executed when any exception is thrown from within the try\\-block.\n\n```\ntry {\n    throw new Error('myException'); // generates an exception\n} catch (e) {\n    console.error(e);\n}\n\n```\n\n### try\\...finally\n\n* the finally\\-block executes regardless of whether an exception is thrown\n\n```\ntry {\n    console.log(\"Opening a file and doing some operations\");\n} finally {\n    console.log(\"Closing all the files and used resources\");\n}\n\n```\n\n\n### try\\...catch...finally\n\n```\ntry {\n    console.log('try');\n    BAD_CODE();\n} catch (err) {\n    console.error('catch');\n} finally {\n    console.log('finally');\n}\n\n```\n\nFor more info,\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Statements/try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)\n\n",
          },
        ],
      },
      {
        key: "bae54fe2-5e3a-40ec-8f36-4d7df7fd5a33",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: ["017fcdd7-8210-4141-b412-8c71c2f6e6a6"],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Event\nloop",
          },
          {
            type: "DESC",
            data:
              "JS is a **single\\-threaded programming language** with a **synchronous** **execution** model that processes one operation after another, it can only process one statement at a time.\n\nThe event loop is what allows to perform non\\-blocking I/O operations — despite the fact that JavaScript is single\\-threaded.\n\n* **Call Stack** \\- A call stack is a stack data structure that stores information about all the operations in line to be executed. \n   * When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.\n   * Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.\n   * When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.\n* **Heap \\- **it is a memory where the objects are located\n* **Queue \\- **Async code is added to the queue and waiting to be executed\n* **Event loop \\- **it constantly checks whether or not the **call stack** is empty \\(all previously invoked functions have returned their values and have been popped off the stack\\). If it is empty, new functions are added from the  **queue**. In simple words, event loop job is to look at the stack and look at the queue. If the stack is empty, it takes the first thing on the queue and pushed it on to the stack.\n\n\n\nFor more info refer,\n* [https://www.youtube.com/watch?v=8aGhZQkoFbQ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)\n* [https://nodejs.org/en/docs/guides/event\\-loop\\-timers\\-and\\-nexttick/](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)\n* [https://dev.to/lydiahallie/javascript\\-visualized\\-event\\-loop\\-3dif](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)\n* [https://jakearchibald.com/2015/tasks\\-microtasks\\-queues\\-and\\-schedules/](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)\n\n",
          },
        ],
      },
      {
        key: "97c73d77-1496-431f-93e6-5aebcfbf8020",
        parentKey: "1f66701b-72a2-45be-abad-d14ba71a78e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Referential\nTransparency",
          },
        ],
      },
      {
        key: "d051afcf-8e00-4760-8d65-783421039068",
        parentKey: "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Classes",
          },
          {
            type: "DESC",
            data:
              'Classes are a template for creating objects. They encapsulate state \\(variables or attributes\\), and implementations of behavior \\(functions or methods\\).\n\n* **Class declarations**\n\n```\nclass Dog {\n  constructor(name, breed) {\n    this.name = name;\n    this.breed = breed;\n  }\n\n  // public methods\n  bark() {\n    console.log("vov-vov");\n  }\n\n  myself() {\n    console.log(`My name is ${this.name} and I am ${this.breed}`);\n  }\n}\n\nlet snow = new Dog("Snow", "Samoyed");\nsnow.bark(); //=> vov-vov\nsnow.myself(); //=> My name is Snow and I am Samoyed\n\n```\n\n* **Class expression** \\- Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.\n\n```\nlet User = class {\n  sayHi() {\n    console.log("Hello");\n  }\n};\n\n// named class expression\n// If a class expression has a name, it’s visible inside the class only.\nlet User1 = class MyClass{\n  sayHi() {\n    console.log("Hello");\n  }\n};\n\nnew User().sayHi(); //=> Hello\nnew User1().sayHi(); //=> Hello\n\n```\n\n* **Getters/Setters \\- **it is** **a mutator method used to control changes to a variable. , a getter method returns its value while a setter method sets or updates its value\n\n```\nclass User {\n  constructor(name) {\n    // invokes the setter\n    this.name = name;\n  }\n\n  get name() {\n    return this.userName;\n  }\n\n  set name(value) {\n    if (value.length < 4) {\n      console.log("Name is too short.");\n      return;\n    }\n    this.userName = value;\n  }\n}\n\nlet user = new User("John");\nconsole.log(user.name); //=> John\n\n```\n\n* **Static properties and methods \\- t**he static keyword defines a static method or property for a class. Static members \\(properties and methods\\) are called without instantiating their class and cannot be called through a class instance.\n\n```\nclass StaticClass {\n  static prop1 = "Property 1";\n  static sum(a, b) {\n    return a + b;\n  }\n}\n\nconsole.log(StaticClass.prop1); //=> Property 1\nconsole.log(StaticClass.sum(5, 10)); //=> 15\n\nlet obj = new StaticClass();\n\nconsole.log(obj.prop1); //=> undefined\nconsole.log(obj.sum(5, 5)); //=> TypeError: obj.sum is not a function\n\n```\n\n* **Static blocks \\- **static blocks** **allows initialization of static properties\n\n```\nclass StaticBlock {\n  static prop1 = "Property 1";\n  static prop2;\n  static {\n    this.prop2 = "Property 2";\n  }\n}\n\nconsole.log(StaticBlock.prop1); //=> Property 1\nconsole.log(StaticBlock.prop2); //=> Property 2\n\n```\n\n* **Private properties and methods \\- \\# **is a special sign that the field is private. We can’t access it from outside or from inheriting classes\n\n```\nclass CoffeeMachine {\n  #waterLimit = 200;\n\n  #fixWaterAmount(value) {\n    if (value < 0) return 0;\n    if (value > this.#waterLimit) return this.#waterLimit;\n  }\n\n  setWaterAmount(value) {\n    this.#waterLimit = this.#fixWaterAmount(value);\n  }\n}\n\nlet coffeeMachine = new CoffeeMachine();\n\n// can\'t access privates from outside of the class\ncoffeeMachine.#fixWaterAmount(123); // Error\ncoffeeMachine.#waterLimit = 1000; // Error\n\n```\n\nFor more info,\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)\n\n',
          },
        ],
      },
      {
        key: "af72cd3d-9be6-4420-9c07-1a80e2c62e2d",
        parentKey: "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "forEach",
          },
        ],
      },
      {
        key: "50256453-3cf5-4adf-85c0-562970b46468",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: ["c007d461-f421-48fd-9566-ac88d298bbb8"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Block scope",
          },
          {
            type: "DESC",
            data:
              '**Block scope** \\- A code block in JavaScript defines a scope for variables declared using **let** and **const **within a curly brace **\\{\\}. **it can be accessed only within that curly brace.\n\n**Example 1:**\n```\nif (true) {\n  // "if" block scope\n  const message = \'Hello\';\n  let name = "Chris"\n  console.log(message); // \'Hello\'\n  console.log(name); // \'Chris\'\n}\nconsole.log(message); //=> throws ReferenceError\nconsole.log(name); //=> throws ReferenceError\n\n```\n\n**Example 2:**\n```\nlet fullMoon = true;\n\n// Initialize a global variable\nlet species = "human";\n\nif (fullMoon) {\n  // Initialize a block-scoped variable\n  let species = "werewolf";\n  console.log(`${species}`); //=> "werewolf"\n}\n\nconsole.log(`${species}`); //=> "human"\n\n```\n\n**Example 3: var is not block scoped**\n```\nif (true) {\n  // "if" block scope\n  var count = 0;\n  console.log(count); //=> 0\n}\nconsole.log(count); //=> 0\n\n```\n\nA code block does not create a scope for var variables, but a function body does.\n\n**Refference:**\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Statements/block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)\n\n',
          },
        ],
      },
      {
        key: "3dc1c815-02b4-4097-ae29-578920b3a065",
        parentKey: "9b52509a-42df-4ba8-9200-29ec192e314a",
        subKeys: [
          "c261d5f7-915b-4abd-b3d1-47ef335bc8ff",
          "28bcdae2-e48d-47e3-bc28-5f6afecfef7d",
          "ed43d880-a946-4d1f-8a16-fc59a0662188",
          "a6c4854c-be38-4f7f-9866-a0025b236e65",
          "af8c79c0-2a79-40e8-a7ff-5edf08399e5b",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Map &\nmethods",
          },
        ],
      },
      {
        key: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "50256453-3cf5-4adf-85c0-562970b46468",
          "7662833c-7ece-4668-a37b-4e11820503b4",
          "a44085f3-06c0-4910-9787-af5b20c0709b",
          "4c35fca7-ac9c-4475-99ab-d77f97120360",
          "35cf3ece-a21e-4a8e-a8f8-d2b24a2b742d",
          "84650864-61f6-4e20-b87d-ed779ffa7d20",
          "69e69b35-9400-4fb3-aa5e-e9315b4a6eba",
          "d1972f4f-fd4a-43b1-8575-480a88d66898",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Scopes & \nClosure",
          },
          {
            type: "DESC",
            data:
              '**Scope** is **current context of execution**. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.\n\n### Difference Between var, let, and const\n\n| **Keyword** | **Scope** | **Hoisting** | **Can Be Reassigned** | **Can Be Redeclared** |\n|:---:|:---:|:---:|:---:|:---:|\n| var | Function scope | Yes | Yes | Yes |\n| let | Block scope | No | Yes | No |\n| const | Block scope | No | No | No |\n\n**Reference** \n* [https://javascript.info/var](https://javascript.info/var)\n* [https://javascript.info/closure](https://javascript.info/closure)\n* [https://developer.mozilla.org/en\\-US/docs/Glossary/Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)\n\n',
          },
        ],
      },
      {
        key: "45b02b6a-06f9-4bad-80bb-14c97acb3b80",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "unshift",
          },
        ],
      },
      {
        key: "10d9744a-f521-4bdf-8933-9c3fb1cfb2c8",
        parentKey: "3854fdd8-7de4-429c-b73d-2519cbf63781",
        subKeys: ["d3f7bd55-fe91-45b2-b13e-ea98bb7710d9"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "else Statement",
          },
          {
            type: "DESC",
            data:
              '**if** statement can be extended with an **else** statement, which adds another block to run when the **if** condition doesn’t pass.\n\n**Syntax:**\n```\nif (condition) {\n      //when condition is true this block will be executed\n      // no futher conditions will be checked\n} else {\n      //when a condition is false/failed this block will be executed\n}\n\n```\n\n**example:**\n```\nif ("cat" === "dog") {\n      console.log("if block executed");\n} else {\n      console.log("else block executed");\n}\n// Output: "else block executed"\n\n```\n',
          },
        ],
      },
      {
        key: "3854fdd8-7de4-429c-b73d-2519cbf63781",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "ffcc44e2-dc44-4241-8c15-ee2ab8c71588",
          "10d9744a-f521-4bdf-8933-9c3fb1cfb2c8",
          "9677e53a-05a4-4bd6-9010-f10826426bb6",
          "62136ee4-f92e-49fb-b4de-03911ffe1da1",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Conditional\nStatements",
          },
          {
            type: "DESC",
            data:
              'Conditional statements controls behavior and determines whether or not a piece of code can run.\n\n## Truthy\n\nIn JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy \\(i.e., except for false, 0, \\-0, 0n, "", null, undefined, and NaN\\).\n\n**Examples of truthy values** in JavaScript \\(which will be coerced to true in boolean contexts, and thus execute the if block\\)\n```\nif (true)\n    if ({})\n        if ([])\n            if (42)\n                if ("0")\n                    if ("false")\n                        if (new Date())\n                            if (-42)\n                                if (12n)\n                                    if (3.14)\n                                        if (-3.14)\n                                            if (Infinity)\n                                                if (-Infinity)\n                                                    console.log("Yay!!! Success")                                                    \n// Output - "Yay!!! Success"\n\n```\n\n\n## Falsy\n\nA falsy \\(sometimes written falsey\\) value is a value that is considered false when encountered in a Boolean context.\n\n**Complete list of JavaScript falsy values**\n| false | The keyword false. |\n|:--- |:--- |\n| 0 | The Number zero \\(so, also 0.0, etc., and 0x0\\). |\n| \\-0 | The Number negative zero \\(so, also \\-0.0, etc., and \\-0x0\\). |\n| 0n | The BigInt zero \\(so, also 0x0n\\). Note that there is no BigInt negative zero — the negation of 0n is 0n. |\n| "", | \'\', \\`\\` Empty string value. |\n| null | null — the absence of any value. |\n| undefined | undefined — the primitive value. |\n| NaN | NaN — not a number. |\n| document\\.all | Objects are falsy if and only if they have the \\[\\[IsHTMLDDA\\]\\] internal slot.That slot only exists in document.all and cannot be set using JavaScript. |\n',
          },
        ],
      },
      {
        key: "4c35fca7-ac9c-4475-99ab-d77f97120360",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: ["75e32173-5b17-4d07-b761-2003054bf186"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "lexical scope /\nScope chain",
          },
          {
            type: "DESC",
            data:
              "Lexical scope means every inner level can access its outer levels. And the scope is determined when the code is compiled.\n\n* **Scope chain** \\- When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.\n\n\nIf it’s still could not find the variable, it will either implicitly declare the variable in the global scope \\(if not in strict mode\\) or return an error.\n\n**Example 1:**\n```\nfunction run() {\n  // \"run\" function scope\n  const message = 'Run, Forrest, Run!';\n\n  if (true) {\n    // \"if\" code block scope\n    const friend = 'Bubba';\n    console.log(message); //=> 'Run, Forrest, Run!'\n  }\n\n  console.log(friend); //=> throws ReferenceError\n}\n\nrun();\n\n```\n\nThe scope contained within another scope is named _inner scope_. In the example, if code block scope is an inner scope of run\\(\\) function scope. The scope that wraps another scope is named _outer scope_. In the example, run\\(\\) function scope is an outer scope to if code block scope.\n\n**example 2:**\n```\n// global scope\nvar e = 10;\nfunction sum(a){\n  return function sum2(b){\n    return function sum3(c){\n      // outer functions scope\n      return function sum4(d){\n        // local scope\n        return a + b + c + d + e;\n      }\n    }\n  }\n}\n\nvar sum2 = sum(1);\nvar sum3 = sum2(2);\nvar sum4 = sum3(3);\nvar result = sum4(4);\nconsole.log(result) //=> 20\n\n```\n\n**example 3: \\(without strict mode\\)**\n* cheating lexical scope using **eval** , usage of eval is not recommended as it tends to slow down the execution\n\n```\nvar bar = 'bar';\n\nfunction foo(str) {\n    eval(str);\n    console.log(bar); //=> 42\n}\n\nfoo(\"var bar=42;\");\n\n```\n",
          },
        ],
      },
      {
        key: "616b2d85-3831-4c1d-8582-a671725dcd94",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Comparison\noperators",
          },
          {
            type: "DESC",
            data:
              "A **comparison operator** compares its operands and returns a logical value based on whether the comparison is true.\n\n| **Operator** | **Description** |\n|:--- |:--- |\n| Equal \\(==\\) | Returns true if the operands are equal |\n| Not equal \\(\\!=\\) | Returns true if the operands are not equal |\n| Strict equal \\(===\\) | Returns true if the operands are equal and of the same type. |\n| Strict not equal \\(\\!==\\) | Returns true if the operands are of the same type but not equal, or are of different type. |\n| Greater than \\(\\>\\) | Returns true if the left operand is greater than the right operand. |\n| Greater than or equal \\(\\>=\\) | Returns true if the left operand is greater than or equal to the right operand. |\n| Less than \\(<\\) | Returns true if the left operand is less than the right operand |\n| Less than or equal \\(<=\\) | Returns true if the left operand is less than or equal to the right operand. |\n**examples:**\n```\n// Equal (==)\nconsole.log(3 == '3'); //=> true\n\n// Not equal (!=)\nconsole.log(3 != 4); //=> true\n\n// Strict equal (===)\nconsole.log(3 === 3); //=> true\n\n// Strict not equal (!==)\nconsole.log(3 !== '3'); //=> true\n\n// Greater than (>)\nconsole.log(\"12\" > 2); //=> true\n\n// Greater than or equal (>=)\nconsole.log(3 >= 3); //=> true\n\n// Less than (<)\nconsole.log(\"2\" < 12); //=> true\n\n// Less than or equal (<=)\nconsole.log(4 <= 5); //=> true\n\n```\n",
          },
        ],
      },
      {
        key: "84650864-61f6-4e20-b87d-ed779ffa7d20",
        parentKey: "08aaf5bf-5222-4d4c-bd8d-2267d2f81433",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Hoisting",
          },
          {
            type: "DESC",
            data:
              'Hoisting is a JavaScript mechanism where variables and function declarations are **moved to the top of their scope** before code execution.\n\nWhen you execute a piece of JavaScript code, the JavaScript engine creates the **global execution context**. The global execution context has two phases: **creation** and **execution**. During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as **_hoisting_** in JavaScript.\n\n## Variable hoisting\n\n* using **var**\n\n```\nconsole.log(counter); // undefined\nvar counter = 1;\n\n```\n\n* using **let**\n\n```\nconsole.log(counter); // "ReferenceError: Cannot access \'counter\' before initialization\nlet counter = 1;\n\n```\n\n\n## Function hoisting\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\n\nconsole.log(add) // ƒ add(a, b){\n                 //  return a + b;\n                 //  }\n\nconsole.log(result); // 30\n\nfunction add(a, b){\nreturn a + b;\n}\n\n```\n\n\n## Function expressions\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\nconsole.log(result); // "TypeError: add is not a function\n\nvar add = function(x, y) {\nreturn x + y;\n}\n\n```\n\n```\nlet x = 20,\n    y = 10;\n\nlet result = add(x,y);\nconsole.log(result); // "TypeError: add is not a function\n\nvar add = (x, y) => x + y;\n\n```\n\nDuring the creation phase of the **global execution context**, the JavaScript Engine creates the **add** variable in the memory and initializes its value to **undefined**. When executing the following code, the add is undefined, hence, it isn’t a function.',
          },
        ],
      },
      {
        key: "89cf71a0-0ca8-45ff-b136-62ffbf6ff778",
        parentKey: "f8750599-32db-4fb3-829e-0673887df2c2",
        subKeys: [
          "ddfd37cf-11f2-4176-9d67-f494b6ea0263",
          "48db7a4d-51df-43d6-bbdc-5ee3889f5eba",
          "36a2fcb8-8f7a-4b25-adbc-3be25f6f534a",
          "c18b4495-0355-48f2-ab94-741434d7409b",
          "4e7eeab5-6321-43c0-9350-31a523a94d8d",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "`this`\nkeyword",
          },
          {
            type: "DESC",
            data:
              'A function of **this** keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between _strict mode_ and _non\\-strict mode_. **this **_\\_\\_is a reference to the object for which the function was called._\n\nTo understand **this** binding, we have to understand the call\\-site: the location in code where a function is called \\(not where it\'s declared\\). We must inspect the call\\-site to answer the question: what\'s this **this** a reference to?\n\n```\nfunction baz() {\n    // call-stack is: `baz`\n    // so, our call-site is in the global scope\n\n    console.log( "baz" );\n    bar(); // <=== call-site for `bar`\n}\n\nfunction bar() {\n    // call-stack is: `baz` -> `bar`\n    // so, our call-site is in `baz`\n\n    console.log( "bar" );\n    foo(); // <=== call-site for `foo`\n}\n\nfunction foo() {\n    // call-stack is: `baz` -> `bar` -> `foo`\n    // so, our call-site is in `bar`\n\n    console.log( "foo" );\n}\n\nbaz(); // <=== call-site for `baz`\n\n```\n\nThe _call\\-site_ determines which of 4 rules applies. And the four types of bindings are,\n* Default Binding\n* Implicit Binding\n* Explicit Binding\n* new Binding\n\n',
          },
        ],
      },
      {
        key: "6608af00-8cd4-4fe1-bd0b-e18e12f4a684",
        parentKey: "5c0d4a18-5da2-4f3f-9752-4912ae3df225",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "add",
          },
        ],
      },
      {
        key: "c0f4ceaf-ab29-436f-a206-b94b2ff0bc54",
        parentKey: "9a4cffea-7c9c-428d-8b2f-14e22805be6e",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "ebc9a270-2a40-4a5c-bf55-79f90cd5f8ce",
        parentKey: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "shift",
          },
        ],
      },
      {
        key: "16bb2549-ee9b-4d13-bf1f-ee0ba86872b5",
        parentKey: "1f66701b-72a2-45be-abad-d14ba71a78e0",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Pure functions",
          },
        ],
      },
      {
        key: "73667249-cfd7-438c-a8db-cb40b58d16fb",
        parentKey: "36a2fcb8-8f7a-4b25-adbc-3be25f6f534a",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "85ee6b37-5053-4f78-b25d-53d1bf11d87b",
        parentKey: "252c6937-bd93-4233-90cb-333938667c72",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "const",
          },
          {
            type: "DESC",
            data:
              'The keyword **const** is an abbreviation for **constant**. Similar to **let**, it’s **block\\-scoped**, however, you can’t reassigned it and value must be provided when declaring it.\n\n**Example 1:**\n```\nconst pi = 3.14\nconsole.log("Pi :", pi); //=> 3.14\n\n```\n\n**Example 2:**\n```\nconst gravity; // SyntaxError: Missing initializer in const declaration\n\n```\n\n**Example 3:**\n```\nconst name = "Chris"\nname = "Jordan" // TypeError: Assignment to constant variable.\n\n```\n',
          },
        ],
      },
      {
        key: "49780f87-17f7-4f90-a761-6ddf6ce8e1ca",
        parentKey: "e1994f06-f679-4c5f-9197-90f6f2a551e7",
        subKeys: [
          "07fcbf3d-5e2d-4049-b16a-075a36dea9ec",
          "aea8f33e-b4a3-4139-a406-d5fa77431698",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "callback",
          },
          {
            type: "DESC",
            data:
              "A **callback** function is a function passed into another function as an argument, which is then invoked later somepoint in the code. Callbacks are one of the way to handle asynchrony in JS.\n\n* **synchronous example**\n\n```\nconsole.log(\"Execution started\");\n\n// a function\nfunction greeting(name) {\n    console.log('Hello, ' + name);\n}\n\n// a function that takes another function as an argument\nfunction print(callback) {\n    const name = 'Alice';\n    // When you call a function that is passed as an argument, it is referred to as a callback\n    callback(name);\n}\n\n// passing a function as an argument\nprint(greeting);\n\nconsole.log(\"Execution completed\");\n\n//=> Execution started\n//=> Hello, Alice\n//=> Execution completed\n\n```\n\n* **asynchronous example**\n\n```\nconsole.log(\"Execution started\");\n\n// a function\nfunction greeting(name) {\n    console.log('Hello, ' + name);\n}\n\n// a function that takes another function as an argument\nfunction print(callback) {\n    const name = 'Alice';\n    // When you call a function that is passed as an argument, it is referred to as a callback\n    callback(name);\n}\n\n// passing a function as an argument\n// to the setTimeout async function which belongs to Web APIs\nsetTimeout(() => {\n    print(greeting);\n}, 5000);\n\nconsole.log(\"Execution completed\");\n\n//=> Execution started\n//=> Execution completed\n//=> Hello, Alice\n\n```\n",
          },
        ],
      },
      {
        key: "62136ee4-f92e-49fb-b4de-03911ffe1da1",
        parentKey: "3854fdd8-7de4-429c-b73d-2519cbf63781",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "switch",
          },
          {
            type: "DESC",
            data:
              "The **switch** statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.\n\n**Example 1:** expression matches a case\nThe **break** statement terminates the current flow of execution\n```\nconst expr = 'Papayas';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    break;\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// output: \"Mangoes and papayas are $2.79 a pound.\"\n\n```\n\n**Example 2:** expression did not match any cases\n```\nconst expr = 'Onion';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    break;\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// output: \"Sorry, we are out of Onion.\"\n\n```\n\n**Example 3:** expression matches a case but break statement is not specified\nIf you forget a _break_ then the script will run from the case where the criterion is met and will run the cases after that _regardless if a criterion was met_.\n```\nconst expr = 'Oranges';\nswitch (expr) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n  default:\n    console.log(`Sorry, we are out of ${expr}.`);\n}\n\n// Output:\n// Oranges are $0.59 a pound.\n// Mangoes and papayas are $2.79 a pound.\n// Sorry, we are out of Oranges.\n\n```\n",
          },
        ],
      },
      {
        key: "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01",
        parentKey: "44213600-22aa-4972-aa99-eec27b840064",
        subKeys: [
          "dbc9a664-bff0-4263-811c-cb91470ce277",
          "fc11e9b2-fb2a-4f5d-934e-65c172bb61fa",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Non-primitive",
          },
          {
            type: "DESC",
            data:
              'Non\\-primitive are mutuable means \'**changeable**\'.  Only object values \\(arrays, objects, functions, etc.\\) are treated as references\n\n**Example 1:**\n```\nlet arr = [212, 8, 506];\nconsole.log(arr[0]); // 212\narr[0] = 420;\nconsole.log(arr); // [420, 8, 506]\n\n```\n\n**Example 2 \\-**\n[https://github.com/getify/You\\-Dont\\-Know\\-JS/blob/2nd\\-ed/get\\-started/apA.md](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apA.md)\n```\nlet myAddress = {\n    street: "123 JS Blvd",\n    city: "Austin",\n    state: "TX"\n};\n\nlet yourAddress = myAddress;\n\nmyAddress.street = "456 TS Ave";\n\nconsole.log(yourAddress.street); // 456 TS Ave\nconsole.log(myAddress.street) // 456 TS Ave\n\n```\n\nValue assigned to **myAddress** is an object, it\'s held/assigned by reference, and thus the assignment to the **yourAddress** variable is a copy of the reference, not the object value itself. That\'s why the updated value assigned to the myAddress.street is reflected when we access yourAddress.street. myAddress and yourAddress have copies of the **reference to the single shared object**, so an update to one is an update to both.',
          },
        ],
      },
      {
        key: "5df46409-6d87-4099-85c8-664e7e703c8e",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "89f35d77-be58-421f-96f1-c53ebf79d892",
          "79a87fe8-34ea-45e0-90b4-ee2399074191",
          "3993010c-2552-4c4e-ad7e-195cb2bbc7e5",
          "277f12bf-6cef-4676-92bb-ee233886e4cb",
          "e153daae-cd39-4033-bd24-8fcf1a6f9f84",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Objects",
          },
          {
            type: "DESC",
            data:
              '**Object** is a collection of properties, and a property is an association between a name \\(or key\\) and a value. It is used to store keyed collections of various data and more complex entities.\n\nAn object can be created with figure brackets **\\{…\\}** with an optional list of properties. A property is a “key: value” pair, where **key** is a string \\(also called a “property name”\\), and **value** can be anything.\n\n**example**\n```\nlet user = {     // an object\n  name: "John",  // by key "name" store value "John"\n  age: 30        // by key "age" store value 30\n};\n\n```\n',
          },
        ],
      },
      {
        key: "9a4cffea-7c9c-428d-8b2f-14e22805be6e",
        parentKey: "96d2f138-986b-4286-b6da-755624dba9c4",
        subKeys: ["c0f4ceaf-ab29-436f-a206-b94b2ff0bc54"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Promise\nAPI",
          },
        ],
      },
      {
        key: "e153daae-cd39-4033-bd24-8fcf1a6f9f84",
        parentKey: "5df46409-6d87-4099-85c8-664e7e703c8e",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Object.create()",
          },
          {
            type: "DESC",
            data:
              '**Object\\.create\\(\\)** method creates a new object, using an existing object as the prototype of the newly created object.\n\n```\nconst person = {\n    isHuman: false,\n    printIntroduction: function () {\n        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);\n    }\n};\n\nconst me = Object.create(person);\n\nme.name = \'Matthew\'; // "name" is a property set on "me", but not on "person"\nme.isHuman = true; // inherited properties can be overwritten\n\nme.printIntroduction(); //=> My name is Matthew. Am I human? true\n\n```\n',
          },
        ],
      },
      {
        key: "44213600-22aa-4972-aa99-eec27b840064",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
          "2c6ddd66-98a5-4410-b7f2-dbd42aaa7e01",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Data types",
          },
          {
            type: "DESC",
            data:
              "1. [https://javascript.info/types](https://javascript.info/types)\n1. [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Data\\_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)\n1. [https://github.com/getify/You\\-Dont\\-Know\\-JS/blob/1st\\-ed/types%20%26%20grammar/ch1.md](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20&%20grammar/ch1.md)\n\n",
          },
        ],
      },
      {
        key: "ed43d880-a946-4d1f-8a16-fc59a0662188",
        parentKey: "3dc1c815-02b4-4097-ae29-578920b3a065",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "entries",
          },
        ],
      },
      {
        key: "99e87759-dcab-49a7-a8ef-504c4e2bf8cc",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: ["1b0b95ad-674e-4dcb-9903-b34c8252624b"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Unary\noperators",
          },
          {
            type: "DESC",
            data:
              'A **unary** operation is an operation with only one operand.\n\n* **delete**\n\nThe delete operator deletes an object\'s property. The syntax is:\n```\ndelete object.property;\ndelete object[propertyKey];\ndelete objectName[index];\n\n```\n**example**\n```\ndelete Math.PI; // returns false (cannot delete non-configurable properties)\n\nconst myObj = {h: 4};\ndelete myobj.h; // returns true (can delete user-defined properties)\n\n```\n\n* **typeof**\n\nThe typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned.\n\n```\nlet myFun = new Function(\'5 + 2\');\nlet shape = \'round\';\nlet size = 1;\nlet foo = [\'Apple\', \'Mango\', \'Orange\'];\nlet today = new Date();\n\ntypeof myFun;       // returns "function"\ntypeof shape;       // returns "string"\ntypeof size;        // returns "number"\ntypeof foo;         // returns "object"\ntypeof today;       // returns "object"\ntypeof doesntExist; // returns "undefined"\n\n```\n',
          },
        ],
      },
      {
        key: "ffcc44e2-dc44-4241-8c15-ee2ab8c71588",
        parentKey: "3854fdd8-7de4-429c-b73d-2519cbf63781",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "If Statement",
          },
          {
            type: "DESC",
            data:
              '**If** statement only runs if the condition enclosed in parentheses \\(\\) is truthy\n\n**Syntax:**\n```\nif (condition) {\n    //when condition is true this block will be executed\n}\n\n```\n\n**example**:\n```\nif (10 > 5) {\n    console.log("if blocked executed");\n}\n\n// Output - "if blocked executed"\n\n```\n',
          },
        ],
      },
      {
        key: "dc0c93cb-0c05-40a0-9bd6-e6c1870c5613",
        parentKey: "9b52509a-42df-4ba8-9200-29ec192e314a",
        subKeys: [
          "c1f96a01-5d07-4fd0-99fb-210490cb6f5a",
          "fa03906c-9682-4352-98eb-3a4525a5780c",
          "62774116-bea5-49c3-a72c-6371f1cde7cb",
          "1c417f10-9197-42eb-a724-a2c99a488847",
          "f9aad4c2-5205-49ec-a74c-ed04c3bb6813",
          "8d03fe66-9d8f-4ae3-96c1-d18220788b3a",
          "ebc9a270-2a40-4a5c-bf55-79f90cd5f8ce",
          "45b02b6a-06f9-4bad-80bb-14c97acb3b80",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Array &\nmethods",
          },
        ],
      },
      {
        key: "183f002c-a1ac-4ef6-bd23-2495e98fefaa",
        parentKey: "131c9433-90a2-40b8-9e02-b774761c2456",
        subKeys: [
          "f8959855-b412-49cf-b308-d4b014a6fc59",
          "31aa7d3d-f836-4d0f-8704-6606fb0a1577",
          "092ca5f2-7268-4e31-b7bd-d9aa2c3fd8d0",
          "ef12f21d-9fc6-4b69-9034-dfe4162cf6e7",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Four pillars",
          },
        ],
      },
      {
        key: "75e32173-5b17-4d07-b761-2003054bf186",
        parentKey: "4c35fca7-ac9c-4475-99ab-d77f97120360",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "8800712b-3d36-41bf-a8d2-a4bdb3b520e5",
        parentKey: "96d2f138-986b-4286-b6da-755624dba9c4",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Error handling",
          },
          {
            type: "DESC",
            data:
              'When a promise rejects, the control jumps to the closest rejection handler **catch\\(\\)**.\n\n* example 1\n\n```\nfetch(\'https://no-such-server.blabla\')\n  .then(response => response.json())\n  .catch(err => console.log(err)) //=> TypeError: Failed to fetch\n\n```\n\n* implicit error handling \\- code of a promise executor and promise handlers has an "invisible try..catch"\n\n```\nconst result = new Promise(function (resolve, reject) {\n  throw new Error("Whoops!");\n})\n  .then((sucess) => console.log(sucess))\n  .catch((val) => console.log(val.message)); //=> Whoops!\n\n```\n\nRe\\-written the above code using \'reject\'\n```\nconst result = new Promise(function (resolve, reject) {\n  reject(new Error("Whoops!"));\n})\n  .then((sucess) => console.log(sucess))\n  .catch((val) => console.log(val.message)); //=> Whoops!\n\n```\n\n* chaining the methods\n\n```\nlet p1 = new Promise(function (resolve, reject) {\n  resolve("Success");\n});\n\np1.then(function (value) {\n  console.log(value);\n  throw new Error("oh, no!");\n})\n  .catch(function (e) {\n    console.error(e.message);\n  })\n  .then(function () {\n    console.log("after a catch the chain is restored");\n  });\n\n//=> Success\n//=> oh, no!\n//=> after a catch the chain is restored\n\n```\n\n\n### Gotchas when throwing errors\n\n* Errors thrown inside asynchronous functions will act like uncaught errors\n\n```\nlet p2 = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    throw new Error("Uncaught Exception!");\n  }, 1000);\n});\n\np2.catch(function (e) {\n  console.error("Caught the error"); // This is never called\n});\n\n```\n\n* Errors thrown after resolve is called will be silenced\n\n```\n// Errors thrown after resolve is called will be silenced\nlet p3 = new Promise(function (resolve, reject) {\n  resolve();\n  throw new Error("Silenced Exception!");\n});\n\np3.catch(function (e) {\n  console.error(e); // This is never called\n});\n\n```\n',
          },
        ],
      },
      {
        key: "252c6937-bd93-4233-90cb-333938667c72",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "05c8bbd0-fe13-4906-92cf-8507b33954da",
          "265fb26e-4629-437b-8e64-aa7ce30ae47a",
          "85ee6b37-5053-4f78-b25d-53d1bf11d87b",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Variables",
          },
          {
            type: "DESC",
            data:
              "A variable is a **container** for a value or **named storage** for data. And it is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.",
          },
        ],
      },
      {
        key: "862cc5cf-2295-40f3-8bfb-bf1832c716e0",
        parentKey: "131c9433-90a2-40b8-9e02-b774761c2456",
        subKeys: [
          "d051afcf-8e00-4760-8d65-783421039068",
          "f319a1ab-dd84-45fa-b56f-023f85f0e1a9",
          "5a194e70-b4a3-49f9-8e9a-64f0b9456ede",
          "5830091e-64ee-4015-aeff-f8779fa73582",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Building\nblocks",
          },
          {
            type: "DESC",
            data: "",
          },
        ],
      },
      {
        key: "a6c4854c-be38-4f7f-9866-a0025b236e65",
        parentKey: "3dc1c815-02b4-4097-ae29-578920b3a065",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "forEach",
          },
        ],
      },
      {
        key: "89f35d77-be58-421f-96f1-c53ebf79d892",
        parentKey: "5df46409-6d87-4099-85c8-664e7e703c8e",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Object\nliterals",
          },
          {
            type: "DESC",
            data:
              '**Object Literal** is generally used to create a single object.\n\n* An object literal is a comma\\-separated list of name\\-value pairs inside of curly braces **\\{\\}**.\n\n```\nconst greeting = {\n    greet: (message, name) => {\n        console.log(message + " " + name + "!!");\n    }\n};\n\ngreeting.greet("Hi", "Jack"); //=> Hi Jack!!\n\n```\n\n* Accessing values from object using square brackets\n\n```\nlet user = {}; // object literal\n\n// set\nuser["likes birds"] = true;\n\n// get\nconsole.log(user["likes birds"]); //=> true\n\n```\n\n* Accessing values from object using dot operator\n\n```\nconst user = {\n    "name": "Jack",\n    age: 25\n}\nconsole.log(user.name); //=> Jack\nconsole.log(user.age); //=> 25\n\n```\n\n* **Shorthand** method definition can be used in a method declaration on object literals and ES2015 classes. You can define them using a function name, followed by a list of parameters in a pair of parenthesis \\(para1, ..., paramN\\) and a pair of curly braces \\{ ... \\} that delimits the body statements.\n\n```\nconst collection = {\n  items: [],\n  add(...items) {\n    this.items.push(...items);\n  },\n  get(index) {\n    return this.items[index];\n  }\n};\ncollection.add(\'C\', \'Js\', \'PHP\', \'Java\');\nconsole.log(collection.get(1)) //=> "Js"\n\n```\n\n**add\\(\\)** and **get\\(\\)** methods in **collection** object are defined using short method definition. These methods are called as usual: **collection\\.add\\(...\\)** and **collection\\.get\\(...\\)**.',
          },
        ],
      },
      {
        key: "0341d846-c3f3-4915-a4b3-0c11b3643a9d",
        parentKey: "f8750599-32db-4fb3-829e-0673887df2c2",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Function\ndeclaration",
          },
          {
            type: "DESC",
            data:
              'A **function** declaration \\(also called a function statement\\) consists of the function keyword, followed by:\n* The **name** of the function.\n* A list of **parameters** to the function, enclosed in parentheses and separated by commas.\n* The JavaScript **statements** that define the function, enclosed in braces, **\\{**...**\\}**.\n\n\n**Syntax:**\n```\nfunction validFunctionName(parameter1, parameter2) {\n  return statement;\n}\n\n```\n\n**example 1: which takes no parameters and returns nothing \\(void\\)**\n```\nfunction currentTime() {\n  console.log(new Date().toTimeString().slice(0, 8));\n}\n\ncurrentTime() // output: "18:35:36"\n\n```\n\n**example 2: which takes parameters and returns a value**\nThe **return** statement ends function execution and specifies a value to be returned to the function caller.\n```\nfunction sum(a, b) {\n  return a + b;\n}\nconst result = sum(5, 6);\n\nconsole.log(result); // output: "11"\n\n```\n\n**example 3**: **default parameters** \n```\nfunction showMessage(from, text = "no text given") {\n  console.log( from + ": " + text );\n}\n\nshowMessage("Ann"); // output: "Ann: no text given"\nshowMessage("Ann", "Hello, world!"); // output: "Ann: Hello, world!"\n\n```\n\n**example 4: constructor function **\\(will see more this in detail when it comes to **objects**\\)\n```\nfunction Emp(id, name) {\n    this.id = id;\n    this.name = name;\n}\n\nlet emp1 = new Emp(1, "John");\n\nconsole.log(emp1.id); // output: "1"\nconsole.log(emp1.name); // output: "John"\n\n```\n',
          },
        ],
      },
      {
        key: "b5c8a0d0-01e6-4922-a8f0-132d5442bb1d",
        parentKey: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        subKeys: [],
        collapse: false,
        style: '{"contentStyle":{"background":"#50e3c2"}}',
        blocks: [
          {
            type: "CONTENT",
            data: "Undefined",
          },
          {
            type: "DESC",
            data:
              'The special value undefined also stands apart. It makes a type of its own, just like null.\n\n```\nconsole.log(typeof(undefined)); //=> "undefined"\n\n```\n\nThe meaning of undefined is “**value is not assigned**”. If a **variable is declared, but not assigned**, then its value is undefined:\n```\nlet age;\nconsole.log(age); //=> shows "undefined"\n\n```\n\nTechnically, it is possible to explicitly assign undefined to a variable:\n```\nlet age = 100;\n\n// change the value to undefined\nage = undefined;\n\nconsole.log(age); //=> shows "undefined"\n\n```\n',
          },
        ],
      },
      {
        key: "a941ee5a-a4a5-4964-a537-1513bfe7b814",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Arithmetic\noperators",
          },
          {
            type: "DESC",
            data:
              "An **arithmetic operator** takes numerical values \\(either literals or variables\\) as their operands and returns a single numerical value.\n\nThe standard arithmetic operators are addition \\(\\+\\), subtraction \\(\\-\\), multiplication \\(\\*\\), and division \\(/\\).\n| **Operator** | **Description** |\n|:--- |:--- |\n| Remainder \\(%\\) | Binary operator. Returns the integer remainder of dividing the two operands. |\n| Increment \\(\\+\\+\\) | Unary operator. Adds one to its operand. If used as a prefix operator \\(\\+\\+x\\), returns the value of its operand after adding one; if used as a postfix operator \\(x\\+\\+\\), returns the value of its operand before adding one. |\n| Decrement \\(\\-\\-\\) | Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator. |\n| Unary negation \\(\\-\\) | Unary operator. Returns the negation of its operand. |\n| Unary plus \\(\\+\\) | Unary operator. Attempts to convert the operand to a number, if it is not already. |\n| Exponentiation operator \\(\\*\\*\\) | Calculates the base to the exponent power, that is, base^exponent |\n**examples**\n```\n// Addition (+)\nconsole.log(2 + 2); //=> 4\n// Subtraction (-)\nconsole.log(5 - 2); //=> 3\n// Multiplication (*)\nconsole.log(3 * 3); //=> 9\n// Division (/)\nconsole.log(10 / 3); //=> 3.3333333333333335\n// Remainder (%)\nconsole.log(14 / 3); //=> 4.666666666666667\n// Increment (++)\nlet x = 5\nconsole.log(x++); //=> 5\nconsole.log(++x); //=> 7\n// Decrement (--)\nlet y = 10\nconsole.log(y--); //=> 10\nconsole.log(--y); //=> 8\n// Unary negation (-)\nlet z = 3.14\nconsole.log(-z); //=> -3.14\n// Unary plus (+)\nlet i = '3';\nconsole.log(+i); //=> 3\nconsole.log(+true); //=> 1\n// Exponentiation operator (**)\nconsole.log(2 ** 3); //=> 8\n\n```\n",
          },
        ],
      },
      {
        key: "95ac6039-3664-4d8d-8b2c-c9eb8c22e77c",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Conditional (ternary)\noperator",
          },
          {
            type: "DESC",
            data:
              "The **conditional operator** is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:\n```\ncondition ? val1 : val2\n\n```\nIf condition is true, the operator has the value of val1. Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.\n\n**example:**\n```\nlet age = 18;\nlet status = (age >= 18) ? 'adult' : 'minor';\nconsole.log(status); //=> adult\n\nage = 10;\nstatus = (age >= 18) ? 'adult' : 'minor';\nconsole.log(status); //=> minor\n\n```\n",
          },
        ],
      },
      {
        key: "dfb39c55-dfce-4d5a-88a7-5fd066288121",
        parentKey: "a1649782-ec29-4030-bb2d-d6044103cf10",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "956d1f1d-c3c0-4538-b40c-e1d868bb2653",
        parentKey: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Relational\noperators",
          },
          {
            type: "DESC",
            data:
              "A **relational operator** compares its operands and returns a Boolean value based on whether the comparison is true.\n\n* **in**\n\nThe in operator returns true if the specified property is in the specified object. The syntax is:\n```\n// Arrays\nlet trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];\n0 in trees;        //=> true\n3 in trees;        //=> true\n6 in trees;        //=> false\n'bay' in trees;    //=> false (you must specify the index number, not the value at that index)\n'length' in trees; //=> true (length is an Array property)\n\n// built-in objects\n'PI' in Math;          //=> true\nlet myString = new String('coral');\n'length' in myString;  //=> true\n\n// Custom objects\nlet myCar = { make: 'Honda', model: 'Accord', year: 1998 };\n'make' in myCar;  //=> true\n'model' in myCar; //=> true\n\n```\n\n* **instanceof**\n\nThe instanceof operator returns true if the specified object is of the specified object type.\n```\nlet theDay = new Date(1995, 12, 17);\nif (theDay instanceof Date) {\n    console.log(\"yes it is\") //=> yes it is\n}\n\n```\n",
          },
        ],
      },
      {
        key: "e784d8b5-f79b-469c-8fa4-e7305d4405b3",
        parentKey: "06067a6c-cfd1-4faf-8aa6-5eb827f3d020",
        subKeys: ["5499f8cd-26d8-4796-acc9-b138109bcea0"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Symbol",
          },
          {
            type: "DESC",
            data:
              "The JavaScript **ES6** introduced a new primitive data type called Symbol. A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.\n\n```\nconsole.log(typeof(Symbol())); //=> \"symbol\"\n\n```\n\n```\n// two symbols with the same description\n\nconst value1 = Symbol('hello');\nconst value2 = Symbol('hello');\n\nconsole.log(value1 === value2); //=> false\n\n```\n",
          },
        ],
      },
      {
        key: "1340cde2-dcef-48de-a00e-1ce996ecf377",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "9eaa4c3f-edb8-487d-b332-ad14665991f9",
          "616b2d85-3831-4c1d-8582-a671725dcd94",
          "a941ee5a-a4a5-4964-a537-1513bfe7b814",
          "3cad2294-2687-43b8-bd7d-1ca3ebd67acd",
          "ea952fa5-a291-436e-85a1-8cda065a4432",
          "95ac6039-3664-4d8d-8b2c-c9eb8c22e77c",
          "99e87759-dcab-49a7-a8ef-504c4e2bf8cc",
          "956d1f1d-c3c0-4538-b40c-e1d868bb2653",
        ],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Operators",
          },
          {
            type: "DESC",
            data:
              "**Operators **\\(eg: \\+, \\-, \\*, /\\) are symbols that are used to perform operations on operands.\n\n**example:**\n```\nlet sum = 10 + 20;\n\n```\n\nFor more info\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Guide/Expressions\\_and\\_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)\n\n",
          },
        ],
      },
      {
        key: "840a8fff-1b5b-48bd-9aae-6214c599c5ab",
        parentKey: "f8750599-32db-4fb3-829e-0673887df2c2",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Immediately invoked \nfunction expression\n- IIFE",
          },
          {
            type: "DESC",
            data:
              'An **IIFE** \\(Immediately Invoked Function Expression\\) is a JavaScript function that runs as soon as it is defined or as soon as it starts to executes.\n\n**Syntax:**\n```\n(function () {\n  statements\n})();\n\n```\n* The first is the anonymous function with lexical scope enclosed within the Grouping Operator \\(\\). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.\n* The second part creates the immediately invoked function expression \\(\\) through which the JavaScript engine will directly interpret the function.\n\n\n**example 1:**\n```\n(function () {\n    console.log("Immediately invoked") //=> Immediately invoked\n})();\n\n```\n\n**example 2: **Avoid polluting the global namespace\n* If we have some initiation code that we don\'t need to use again, we could use the IIFE pattern.\n\n```\n(function () {\n  // some initiation code\n  let firstVariable;\n  let secondVariable;\n})();\n\n// firstVariable and secondVariable will be discarded after the function is executed.\n\n```\n\n```\nvar foo = \'foo\';\n\n(function () {\n    var foo = \'foo2\';\n    console.log(foo); //=> foo2\n})();\n\nconsole.log(foo); //=> foo\n\n```\n\n**example 3: **stack trace\n```\n// Ex 1:\n(function () {\n    throw new Error("Exception has occurred");\n})();\n\n// Error: Exception has occurred\n//     at /Users/git/other/js/test.js:2:11\n//     at Object.<anonymous> (/Users/git/other/js/test.js:3:3)\n//     at Module._compile (node:internal/modules/cjs/loader:1101:14)\n//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n//     at Module.load (node:internal/modules/cjs/loader:981:32)\n//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n//     at node:internal/main/run_main_module:17:47\n\n// Ex 2:\n(function deposit() {\n    throw new Error("Exception has occurred");\n})();\n\n// Error: Exception has occurred\n//     at deposit (/Users/git/other/js/test.js:6:11)\n//     at Object.<anonymous> (/Users/git/other/js/test.js:7:3)\n//     at Module._compile (node:internal/modules/cjs/loader:1101:14)\n//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)\n//     at Module.load (node:internal/modules/cjs/loader:981:32)\n//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n//     at node:internal/main/run_main_module:17:47\n\n```\nOne of the benefits of creating a named function expression is that in case we encountered an error, the stack trace will contain the name of the function, making it easier to find the origin of the error.\n\nFor more info,\n* [http://benalman.com/news/2010/11/immediately\\-invoked\\-function\\-expression/](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)\n\n',
          },
        ],
      },
      {
        key: "017fcdd7-8210-4141-b412-8c71c2f6e6a6",
        parentKey: "bae54fe2-5e3a-40ec-8f36-4d7df7fd5a33",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: " Tasks (macro tasks) /\nMicro tasks",
          },
          {
            type: "DESC",
            data:
              '**\\(macro\\)Task queue:**\n All async operations with higher priorit\n\n**Microtasks:**\nAll async operations with lower prior\n| **\\(Macro\\)task** | setTimeout \\| setInterval \\| setImmediate |\n|:--- |:--- |\n| **Microtask** | process\\.nextTick \\| Promise callback \\| queueMicrotask |\n\n* Order of execution\n\n```\nconsole.log("Start");\nsetTimeout(() => console.log("Set timeout completed"), 0);\nPromise.resolve("Promise completed").then((val) => console.log(val));\nconsole.log("End");\n\n//=> Start\n//=> End\n//=> Promise completed\n//=> Set timeout completed\n\n```\n',
          },
        ],
      },
      {
        key: "a3a421e7-3427-489e-892c-2342014a2235",
        parentKey: "96d2f138-986b-4286-b6da-755624dba9c4",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "Creating",
          },
          {
            type: "DESC",
            data:
              '### Creating a Promise\n\nInitialize a promise with the **new Promise** syntax, and you must initialize it with a function. The function that gets passed to a promise has resolve and reject parameters. The resolve and reject functions handle the success and failure of an operation, respectively.\n\nThe function that passed into the **Promise** constructor runs **synchronously**, but anything that depends on its resolution will be called **asynchronously**. Even if the promise resolves immediately, any handlers will execute asynchronously \\(similar to when you setTimeout\\(fn, 0\\)\\) \\- the main thread runs to the end first.\n\n* **Fulfilled flow**\n\n```\nconsole.log("Starting");\n\nconst test = new Promise((resolve, reject) => {\n    console.log("Inside Promise");\n    const exp = 2 < 4;\n    if (exp) {\n        resolve("Completed");\n        console.log("resolve");\n    } else {\n        reject("Failed");\n        console.log("reject");\n    }\n})\n\ntest.then(result => console.log({ result }))\n    .then(_ => console.log("second then"))\n    .catch(err => console.log({ err }));\n\nconsole.log("End");\n\n//=> Starting\n//=> Inside Promise\n//=> resolve\n//=> End\n//=> { result: \'Completed\' }\n//=> second then\n\n```\n\n* **Rejected flow**\n\n```\nconsole.log("Starting");\n\nconst test = new Promise((resolve, reject) => {\n    console.log("Inside Promise");\n    const exp = 6 < 4;\n    if (exp) {\n        resolve("Completed");\n        console.log("resolve");\n    } else {\n        reject("Failed");\n        console.log("reject");\n    }\n})\n\ntest.then(result => console.log({ result }))\n    .then(_ => console.log("second then"))\n    .catch(err => console.log({ err }));\n\nconsole.log("End");\n\n//=> Starting\n//=> Inside Promise\n//=> reject\n//=> End\n//=> { err: \'Failed\' }\n\n```\n\nFor more info,\n* [https://stackoverflow.com/a/49911346/5514320](https://stackoverflow.com/a/49911346/5514320)\n\n',
          },
        ],
      },
      {
        key: "1b0b95ad-674e-4dcb-9903-b34c8252624b",
        parentKey: "99e87759-dcab-49a7-a8ef-504c4e2bf8cc",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "c007d461-f421-48fd-9566-ac88d298bbb8",
        parentKey: "50256453-3cf5-4adf-85c0-562970b46468",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "",
          },
        ],
      },
      {
        key: "29f23365-fcf6-4f8f-8060-811df84e4770",
        parentKey: "d40f6cf0-dcae-4162-8b2f-d89edd7e3212",
        subKeys: ["c1e621c4-ae65-40d0-ad48-650368d181d0"],
        collapse: true,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "for .. in",
          },
          {
            type: "DESC",
            data:
              'The **for\\-in** loop always loops over an object’s elements one by one. It can be **array indexes** or **key incase of objects**. Iterates over all **enumerable property** keys of an object.\n\n**Syntax:**\n```\nfor (let i in object) {\n    console.log(object[i]);\n}\n\n```\nIf the object is an array, the for\\-in loop will **print out the array indexes in order**. If the object contains key\\-value pairs, the for\\-in loop will **print out each key that exists**. A for...in loop iterates over the properties of an object in an **arbitrary** order\n\n**example 1:**\n```\nlet arr = [3, 5, 7];\narr.foo = "hello";\n\nfor (let i in arr) {\n  console.log(i); // by default it prints the indexes and key\n}\n\n// output:\n// 0\n// 1\n// 2\n// foo\n\n```\n\n**example 2:**\n```\nconst object = { a: 1, b: 2, c: 3 };\n\nfor (const property in object) {\n  console.log(property); // by default it prints the indexes and key\n}\n\n// output:\n// a\n// b\n// c\n\n```\n\n**example 3:**\n```\nconst object = { a: 1, b: 2, c: 3 };\n\nfor (const property in object) {\n  console.log(`${property}: ${object[property]}`);\n}\n\n// output:\n// "a: 1"\n// "b: 2"\n// "c: 3"\n\n```\n\n**exmaple 4: **And it iterates over by **all index**.\n```\nconst array = [1, 2, 3, { id: 254, name: "Chris" }]\n\narray[5] = 5\narray[-6] = 6;\narray["name"] = "Lars"\n\nfor (let index in array)\n    console.log(`Index: ${index} & Value: ${array[index]}`);\n    \n// Output:\n// Index: 0 & Value: 1\n// Index: 1 & Value: 2\n// Index: 2 & Value: 3\n// Index: 3 & Value: [object Object]\n// Index: 5 & Value: 5\n// Index: -6 & Value: 6\n// Index: name & Value: Lars\n\n```\n',
          },
        ],
      },
      {
        key: "c18b4495-0355-48f2-ab94-741434d7409b",
        parentKey: "89cf71a0-0ca8-45ff-b136-62ffbf6ff778",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "`new` Binding",
          },
          {
            type: "DESC",
            data:
              "When a function is invoked with **new** in front of it, otherwise known as a constructor call, the following things are done automatically:\n* a brand new object is created \\(aka, constructed\\)\n* the newly constructed object is \\[\\[Prototype\\]\\]\\-linked to the function that constructed it\n* the newly constructed object is set as the this binding for that function call\n* unless the function returns its own alternate object, the new\\-invoked function call will automatically return the newly constructed object.\n\n\n```\nfunction foo(a) {\n    this.a = a;\n}\n\nvar bar = new foo(2);\nconsole.log(bar) //=> foo { a: 2 }\nconsole.log(bar.a); // 2\n\n```\n",
          },
        ],
      },
      {
        key: "79a87fe8-34ea-45e0-90b4-ee2399074191",
        parentKey: "5df46409-6d87-4099-85c8-664e7e703c8e",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "new Object()",
          },
          {
            type: "DESC",
            data:
              '**Object** can be crated using object constructor. And it is generally used to create a single object.\n\n**example 1:**\n```\nlet user = new Object(); // empty \'user` object has been created\n\nuser.id = 1001;\nuser["name"] = "Nick";\nuser["age"] = 28;\n\nconsole.log("User object: ", user); //=> User object:  { id: 1001, name: \'Nick\', age: 28 }\n\n```\n\n**example 2:**\n```\n// equivalent to obj1 = new Boolean(true)\nlet obj1 = new Object(true)\n\n// equivalent to obj2 = new Boolean(false)\nlet obj2 = new Object(Boolean())\n\nconsole.log(obj1); //=> [Boolean: true]\nconsole.log(obj2); //=> [Boolean: false]\n\n```\n',
          },
        ],
      },
      {
        key: "c261d5f7-915b-4abd-b3d1-47ef335bc8ff",
        parentKey: "3dc1c815-02b4-4097-ae29-578920b3a065",
        subKeys: [],
        collapse: false,
        style: null,
        blocks: [
          {
            type: "CONTENT",
            data: "clear",
          },
        ],
      },
      {
        key: "f8750599-32db-4fb3-829e-0673887df2c2",
        parentKey: "7b11654a-e9d3-45ba-a1aa-afca29ff5f18",
        subKeys: [
          "0341d846-c3f3-4915-a4b3-0c11b3643a9d",
          "a1649782-ec29-4030-bb2d-d6044103cf10",
          "a9f8d9be-7d66-4b3e-941d-429c02913ec5",
          "a37aef6c-b62c-423c-8124-c18edc14142b",
          "840a8fff-1b5b-48bd-9aae-6214c599c5ab",
          "33b684a7-f2aa-41a1-93fb-f5e1e621511d",
          "89cf71a0-0ca8-45ff-b136-62ffbf6ff778",
        ],
        collapse: false,
        style: '{"contentStyle":{"background":"#9eff88"}}',
        blocks: [
          {
            type: "CONTENT",
            data: "Functions",
          },
          {
            type: "DESC",
            data:
              "**Function** is a \"subprogram\" that can be called by code external \\(or internal in the case of recursion\\) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function will return a value.\n\n### Parameters vs Arguments\n\n**_Parameters_** are these variables which you specify between parentheses when defining a function.\n```\nfunction sayHi(name) { ... } \n\n```\n_**Arguments**_ then are the concrete values you pass to a function when calling that function.\n```\nsayHi('June');\n\n```\n\n**Referrence**:\n* [https://developer.mozilla.org/en\\-US/docs/Web/JavaScript/Reference/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)\n\n",
          },
        ],
      },
    ],
    config: {
      readOnly: false,
      allowUndo: true,
      layoutDir: 2,
      theme: {
        name: "default",
        randomColor: true,
        background: "rgb(57,60,65)",
        highlightColor: "#50C9CE",
        marginH: 60,
        marginV: 20,
        contentStyle: {
          lineHeight: "1.5",
          fontSize: "16px",
        },
        linkStyle: {
          lineRadius: 5,
          lineType: "curve",
          lineWidth: "3px",
        },
        rootTopic: {
          contentStyle: {
            fontSize: "36px",
          },
          subLinkStyle: {
            lineType: "curve",
            lineWidth: "3px",
          },
        },
        primaryTopic: {
          contentStyle: {
            fontSize: "24px",
          },
          subLinkStyle: {
            lineType: "curve",
            lineWidth: "3px",
          },
        },
        normalTopic: {
          subLinkStyle: {
            lineType: "curve",
            lineWidth: "3px",
          },
        },
      },
    },
    formatVersion: "0.0",
  });
}
