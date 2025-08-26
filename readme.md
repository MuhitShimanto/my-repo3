1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
Ans: <br>
<strong><u>getElementById =</u></strong> We access an element with it's id.<br>
<strong><u>getElementsByClassName =</u></strong> We access the elements with their className.<br>
<strong><u>querySelector =</u></strong> We access the first element that matches the selector we pass.<br>
<strong><u>querySelectorAll =</u></strong> We access all the elements that matches the selector we pass.

2. How do you create and insert a new element into the DOM?<br>
Ans: <br>
<strong><u>Creation</u> -></strong> By using "document.create('element-tag')"<br>
<strong><u>Insertion</u> -></strong> By using "parent.appendChild(element)"

3. What is Event Bubbling and how does it work?<br>
Ans:<br> When an element is clicked, the event happens on that element. Then it bubbles up to its parent, then to the parent's parent until it reaches the document. 

4. What is Event Delegation in JavaScript? Why is it useful?<br>
Ans:<br> Instead of adding event listener to many child, we add it to the parent only and utilize the bubbling to handle events.<br>
<strong><u>advantages</u> -></strong> fewer eventListener, less memory usage, works for elements added later, manage event from one place.

5. What is the difference between preventDefault() and stopPropagation() methods?<br>
Ans:<br>
<strong><u>preventDefault()</u> -></strong> it stops the browser's default action for an event.<br>
<strong><u>stopPropagation()</u> -></strong> it stops the event from bubling up the DOM.