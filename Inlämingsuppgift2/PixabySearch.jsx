
   let pageNum =0;   
   async function Search(button) {
        if (button === 1) {
            pageNum -=1;
        }      
        else if (button === 2) {
            pageNum +=1
        }
        else {
            pageNum =1;
        }

        let parent = document.querySelector('#pictures')
        while (parent.firstChild) { parent.removeChild(parent.firstChild); }

        let inputQ = document.getElementById('frm1');
        let q ='';

        for (let i = 0; i < inputQ.length; i++) {
            q+= ' '+inputQ.elements[i].value;            
        }

        let params = new URLSearchParams({
            key:'25578056-62bc3da3830a7bfd7a3d93ef8',
            q: q,
            page: pageNum,
            per_page: '10'                
        });
        let response = await fetch('https://pixabay.com/api/?' + params);
        let json = await response.json();
     
        if (json.totalHits=== 0) {
            document.querySelector('#noResults').innerHTML='No matching pictures! Try somthing else.  '
        }
        else{
            document.querySelector('#noResults').innerHTML=' ';

            let picList = document.querySelector('#pictures');
            for (let i = 0; i < json.hits.length; i++) {
                let imgURL = json.hits[i].webformatURL;
                let img = document.createElement('img');
                img.src = imgURL;
                picList.append(img);
            }
        }
        let pages = Math.ceil( json.total/10);
        let searchBtn = document.querySelector('#search');
        let prevBtn = document.querySelector('#prev');
        let nextBtn = document.querySelector('#next');

        if (pageNum=== pages) {
            nextBtn.disabled=true;
        }
        else if (pageNum=== 1) {
            prevBtn.disabled=true;
        } 
        else if (pageNum<pages&&pageNum>1) {
            nextBtn.disabled=false;
            prevBtn.disabled=false;
        }

    }
    
       
