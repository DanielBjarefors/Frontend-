

// const form = document.querySelector('form');

// form.onsubmit = event => {
//     event.preventDefault();

//     start();

    async function Search() {
        let parent = document.querySelector('#pictures')
        while (parent.firstChild) { parent.removeChild(parent.firstChild); }



        let inputQ = document.getElementById('frm1');
        let q ='';

        for (let i = 0; i < inputQ.length; i++) {

            // if (i>0) {
            //     q+='+'
            // }
            q+= ' '+inputQ.elements[i].value;
            
        }


        let params = new URLSearchParams({
            key: '25578056-62bc3da3830a7bfd7a3d93ef8',
            q: q,
            image_type: 'photo'        
        });
        let response = await fetch('https://pixabay.com/api/?' + params.toString());
        let json = await response.json();
     
        if (json.hits.length=== 0) {
            document.querySelector('#noResults').innerHTML='No matching pictures! Try somthing else.  '
        }
        else{
            document.querySelector('#noResults').innerHTML=' '
            let forecastList = document.querySelector('#pictures');
            for (let i = 1; i <= 12; i++) {
                let imgURL = json.hits[i].largeImageURL;
                let img = document.createElement('img');
                img.src = imgURL;
                forecastList.append(img);
            }
        }
    }

// }


// start();

// async function start() {
//     let params = new URLSearchParams({
//         lat: '57.7089',
//         lon: '11.9746',
//         units: 'metric',
//         appid: '5119ecbc2e0dfaca90b3ab8e85aa5b13',
//     });
//     let response = await fetch('https://api.openweathermap.org/data/2.5/onecall?' + params.toString());
//     let json = await response.json();
//     let temperatureSpan = document.querySelector('#temperature');
//     temperatureSpan.textContent = json.current.temp + ' degrees Celsius';

//     let forecastList = document.querySelector('#forecast-list');
//     for (let i = 1; i <= 12; i++) {
//         let temperature = json.hourly[i].temp;
//         let li = document.createElement('li');
//         li.textContent = 'In ' + i + ' hours: ' + temperature;
//         forecastList.append(li);
//     }
// }
