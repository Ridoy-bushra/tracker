## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
1.getElementById("id"):
Selects one element by its id
Always returns one element
Example: document.getElementById("box")

2.getElementsByClassName("class"):
Selects all elements with that class
Returns a collection (array-like)
Example: document.getElementsByClassName("item")

3.querySelector("selector"):
Selects the first matching element
Uses CSS selector
Example: document.querySelector(".item")

4.querySelectorAll("selector"):
Selects all matching elements
Returns a NodeList
Example: document.querySelectorAll(".item")

### 2. How do you create and insert a new element into the DOM?

Answer:
create element:let div = document.createElement("div");
add content:div.innerText = "Hello js";
insert into DOM:document.body.appendChild(div);

### 3. What is Event Bubbling? And how does it work?

Answer:
Event bubbling define when we click an element, the event starts from that element and goes upward to its parents.
it works from-child → parent → body → html → document.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation define add one event listener to parent, not to many children.
Example:
document.getElementById("parent").addEventListener("click", function(e){
if(e.target.tagName === "BUTTON"){
console.log("Button clicked");
}
});
useful because-
1.Less code
2.Better performance
3.Works for new elements added later

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
1.preventDefault()
Stops the default behavior
Example: stop form submit or link open.

2.stopPropagation()
Stops the event from going up (bubbling).
