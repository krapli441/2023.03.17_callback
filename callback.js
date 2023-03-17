const root = document.getElementById('root');

function CreaDoc(Tag, Parents, Attri, Attrivalue) {
  const element = document.createElement(Tag);
  Parents.appendChild(element);
  if (Attri !== undefined) {
    element.setAttribute(Attri, Attrivalue);
  }
}

// CreaDoc('div', root, 'class', 'title');

function timer() {
  setTimeout(function(){
    CreaDoc('div', root, 'class', 'title');
    console.log("첫번째 함수");
    setTimeout(function(){
      console.log("두번째 함수");
      CreaDoc('div', root, 'class', 'title');
      setTimeout(function(){
        console.log("세번째 함수");
        CreaDoc('div', root, 'class', 'title');
        setTimeout(function(){
          console.log("네번째 함수")
          CreaDoc('div', root, 'class', 'title');
        },1000);
      },1000);
    },1000);  
  },1000);
}