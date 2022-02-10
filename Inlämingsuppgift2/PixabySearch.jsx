    let q ='';
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

            

        if (button===0) { 
            q='';
            let inputQ = document.getElementById('frm1');
            for (let i = 0; i < inputQ.length; i++) {
                q+= ' '+inputQ.elements[i].value;            
            }
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
            document.querySelector('#noResults').innerHTML='No matching pictures! Try somthing else.'
        }
        else{
            document.querySelector('#noResults').innerHTML=' ';

            let picList = document.querySelector('#pictures');
            for (let i = 0; i < json.hits.length; i++) {
                let imgURL = json.hits[i].webformatURL;
                let li = document.createElement('li')
                let img = document.createElement('img');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                img.src = imgURL;
                p1.textContent='Photo by: ' + json.hits[i].user;
                p2.textContent='Tags: ' + json.hits[i].tags;

                document.querySelector('#pictures').appendChild(li);
                document.querySelector('#pictures li:last-child').append(img);

                document.querySelector('#pictures li:last-child').append(p1);
                document.querySelector('#pictures li:last-child').append(p2);
            }
        }
        let pages = Math.ceil( json.totalHits/10);
        let prevBtn = document.querySelector('#prev');
        let nextBtn = document.querySelector('#next');

        document.querySelector('#pages').innerHTML='Page '+pageNum+'/'+pages
        
        if (pageNum=== pages) {
            nextBtn.disabled=true;
            prevBtn.disabled=false;
        }
        else if (pageNum=== 1) {
            prevBtn.disabled=true;
            nextBtn.disabled=false;
        }         
        else {
            nextBtn.disabled=false;
            prevBtn.disabled=false;
        }
        if (json.total<=10) {
            nextBtn.disabled=true;
            prevBtn.disabled=true;
        }

    }
    
       
