1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
Ans: 
<strong>getElementById =</strong> We access an element with it's id.
<strong>getElementsByClassName =</strong> We access the elements with their className.
<strong>querySelector =</strong> We access the first element that matches the selector we pass.
<strong>querySelectorAll =</strong> We access all the elements that matches the selector we pass.

2. How do you create and insert a new element into the DOM?<br>
Ans: 
<strong>Creation -></strong> By using "document.create('element-tag')"
<strong>Insertion -></strong> By using "parent.appendChild(element)"

3. What is Event Bubbling and how does it work?<br>
Ans: When an element is clicked, the event happens on that element. Then it bubbles up to its parent, then to the parent's parent until it reaches the document. 

4. What is Event Delegation in JavaScript? Why is it useful?<br>
Ans: Instead of adding event listener to many child, we add it to the parent only and utilize the bubbling to handle events.
<strong>advantages -></strong> fewer eventListener, less memory usage, works for elements added later, manage event from one place.

5. What is the difference between preventDefault() and stopPropagation() methods?<br>
Ans:
<strong>preventDefault() -></strong> it stops the browser's default action for an event.
<strong>stopPropagation() -></strong> it stops the event from bubling up the DOM.