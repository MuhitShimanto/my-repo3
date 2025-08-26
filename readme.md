1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
getElementById = We access an element with it's id.
getElementsByClassName = We access the elements with their className.
querySelector = We access the first element that matches the selector we pass.
querySelectorAll = We access all the elements that matches the selector we pass.

2. How do you create and insert a new element into the DOM?
Ans: 
Creation-> By using "document.create('element-tag')"
Insertion-> By using "parent.appendChild(element)"

3. What is Event Bubbling and how does it work?
Ans: When an element is clicked, the event happens on that element. Then it bubbles up to its parent, then to the parent's parent until it reaches the document. 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Instead of adding event listener to many child, we add it to the parent only and utilize the bubbling to handle events.
advantages -> fewer eventListener, less memory usage, works for elements added later, manage event from one place.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() -> it stops the browser's default action for an event.
stopPropagation() -> it stops the event from bubling up the DOM.