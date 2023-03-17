const root = document.getElementById('root');

function CreaDoc(Tag, Parents, Attri, Attrivalue) {
  const element = document.createElement(Tag);
  Parents.appendChild(element);
  if (Attri !== undefined) {
    element.setAttribute(Attri, Attrivalue);
  }
}

// CreaDoc('div', root, 'class', 'title');

const arrays = [];
console.log(arrays);

function timer() {
  setTimeout(function(){
    CreaDoc('div', root, 'class', 'title');
    arrays.push('first');
    console.log(arrays);
    console.log("첫번째 함수");
    setTimeout(function(){
      console.log("두번째 함수");
      CreaDoc('div', root, 'class', 'title');
      arrays.push('second');
      console.log(arrays);
      setTimeout(function(){
        console.log("세번째 함수");
        CreaDoc('div', root, 'class', 'title');
        arrays.push('third');
        console.log(arrays);
        setTimeout(function(){
          console.log("네번째 함수")
          CreaDoc('div', root, 'class', 'title');
          arrays.push('fourth');
          console.log(arrays);
        },1000);
      },1000);
    },1000);  
  },1000);
}