function getFirstSelector (selector)  {
  return document.querySelector (selector)
}
function nestedTarget () {
  return document.querySelector ('#nested .target')
}
function increaseRankBy(n) {
  let list= document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i<list.length; i++) {
    list[i].innerHTML=parseInt(list[i].innerHTML)+n 
  }
}
function deepestChild() {
  let list = document.querySelectorAll('#grand-node div')
  let listArray= Array.from(list)
  return list
}