/**
 * Template engine function
 * recursive function returns DOM elements structure from template
 * 
 * template = {
 *     tag: "tagname",
 *     cls: ["class1", "class2", ...],
 *     attrs: {
 *         attr1: "attr_value_1",
 *         attr2: "attr_value_2",
 *         ...
 *     }
 *     content: [
 *         {
 *             tag: "tagname",
 *             cls: ...
 *             attrs: ...
 *             content: ...
 *         },
 *         "some text",
 *         1234567890,
 *         {
 *             tag: "tagname",
 *             disables: true,
 *             cls: ...
 *             attrs: ...
 *             content: ...
 *         },
 *         ....     
 *     ],
 * }
 * 
 */

function appendClassToElementNode(elementNode, clsArray) {
    if (!Array.isArray(clsArray)) {
        throw "Property cls must be an array";
    }

    clsArray.forEach((cls, index) => {
        if (typeof cls !== "string") {
            throw `The class must be a string type in the cls array, see element at index ${index}`;
        }

        try {
            elementNode.classList.add(cls);
        } catch (exp) {
            throw `${exp.message} at index ${index}`;
        }
    });
}

function appendAttributesToElementNode(elementNode, attrsDict) {
    if (typeof attrsDict !== "object") {
        throw "Property attrs must be an object";
    }

    const keys = Object.keys(attrsDict);

    keys.forEach((key) => {
        elementNode.setAttribute(key, attrsDict[key]);
    });
}

function appendContentToElementNode(elementNode, contentArray) {
    if (!Array.isArray(contentArray)) {
        throw "Property content must be an array";
    }

    const fragment = document.createDocumentFragment();

    contentArray.forEach((content, index) => {
        
        if (["string", "number", "boolean"].includes(typeof content)) {
            fragment.appendChild(document.createTextNode(content));
            return
        }
        
        if (typeof content === "object") {
        
            if (content.tag === undefined) {
                throw `Tag name not defined in content at index ${index}`;
            }
        
            if (typeof content.tag !== "string") {
                throw `The tag name must be a string type in content at index ${index}`;
            }


            try {
                fragment.appendChild(templateEngineRecursive(content));
            } catch (exp) {
                throw `(content index ${index}) ${exp}`;
            }

            return;
        }

        throw `Unsupported content type at index ${index}`
    });

    elementNode.appendChild(fragment);
}

function templateEngineRecursive(templateNode) {
    try {

        if (templateNode.disabled) {
            return document.createTextNode("");
        }

        const elementNode = document.createElement(templateNode.tag);

        if (templateNode.cls) {
            appendClassToElementNode(elementNode, templateNode.cls);
        }

        if (templateNode.attrs) {
            appendAttributesToElementNode(elementNode, templateNode.attrs);
        }

        if (templateNode.content) {
            appendContentToElementNode(elementNode, templateNode.content);
        }

        return elementNode;

    } catch (exp) {
        throw `${templateNode.tag} -> ${exp}`
    }
}

function templateEngine(templateNode) {
    try {
        if (templateNode === undefined) {
            throw "Undefined template root";
        }

        if (templateNode === null) {
            throw "Nullable template root";
        }

        if (typeof templateNode !== "object") {
            throw "The template root must be of type 'object'";
        }

        if (templateNode.tag === undefined) {
            throw "Tag name not defined in template root";
        }

        if (typeof templateNode.tag !== "string") {
            throw "The tag name must be a string type in the template root.";
        }
        return templateEngineRecursive(templateNode);
    } catch (exp) {
        throw `Template engine exception: ${exp}`;
    }
}

/**
 * TEST
 */

// test 1 - wrong template type

//  try {
//     templateEngine(undefined)
//  } catch (exp) {
//     console.log(exp);
//  }

//  try {
//     templateEngine(null)
//  } catch (exp) {
//     console.log(exp);
//  }

//  try {
//     templateEngine("undefined")
//  } catch (exp) {
//     console.log(exp);
//  }

//  try {
//     templateEngine({})
//  } catch (exp) {
//     console.log(exp);
//  }

//  try {
//     templateEngine({tag: null,})
//  } catch (exp) {
//     console.log(exp);
//  }

// test 2 - wrong classes

// try {
//     templateEngine({tag: "div", cls: "not_an_array", })
// } catch (exp) {
//     console.log(exp);
// }

// try {
//     not_a_string = 5;
//     templateEngine({tag: "div", cls: [not_a_string, ], })
// } catch (exp) {
//     console.log(exp);
// }

// try {
//     not_a_string = null;
//     templateEngine({tag: "div", cls: ["", "second_class", not_a_string, ], })
// } catch (exp) {
//     console.log(exp);
// }

// test 3 - wrong attrs

// try {
//     templateEngine({
//         tag: "div", 
//         cls: ["class_1", "class_2"], 
//         attrs: {
//             1: null,
//         },
//     })
// } catch (exp) {
//     console.log(exp);
// } 

// test 4 - wrong content

// try {
//     templateEngine({
//         tag: "div", 
//         cls: ["class_1", "class_2"], 
//         attrs: {
//             "attr_1": "value_1",
//             "attr_2": "value_2",
//         },
//         content: [null],
//     })
// } catch (exp) {
//     console.log(exp);
// } 

// try {
//     templateEngine({
//         tag: "div", 
//         cls: ["class_1", "class_2"], 
//         attrs: {
//             "attr_1": "value_1",
//             "attr_2": "value_2",
//         },
//         content: [
//             "some text",
//             123456,
//             1.23456,
//             {

//             },
//         ],
//     })
// } catch (exp) {
//     console.log(exp);
// } 

// try {
//     templateEngine({
//         tag: "div", 
//         cls: ["class_1", "class_2"], 
//         attrs: {
//             "attr_1": "value_1",
//             "attr_2": "value_2",
//         },
//         content: [
//             "some text",
//             123456,
//             1.23456,
//             {
//                 tag: null,
//             },
//         ],
//     })
// } catch (exp) {
//     console.log(exp);
// } 
