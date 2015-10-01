1. node.js 用client-side language 写server-side 的applications
2. npm, node.js package manager.
3. a node.js application is called a package, and each node.js package has a
package.json file, containing the metadata associated with that package. 
4. virtual DOM
react object has a method called createElement(); that takes in type, props and children.

React.createElement(type, props, children);

1\
type can be a string(html tag);  or a ReactClass.
and it describes how an html tag or a ReactClass is going to be rendered. 

2\
props parameter is js object passed from parent to child element; 

var reactElement = React.createElement('h1', {className: 'header'});

the date-reactid='.0' attribute is added to track each node.

3\
children. the child element will be the content wrapped inside the new-created React element;
it can be ReactNode, or a stringText, or even an array of ReactNode, which is also called
ReactFrament.

@@@ each ReactElement in reactFragment array must have a key property that helps React to identify
that ReactElement; 

5. use React.createFactory(type) to create a function that create other same type nodes. 
