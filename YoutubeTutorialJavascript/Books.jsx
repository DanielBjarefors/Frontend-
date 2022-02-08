const list = document.querySelector('#book-list ul');

// delete books looks for all clicks in parent
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});







