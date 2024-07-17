const grid = document.getElementById('igrid')
/* ['https://t4.ftcdn.net/jpg/05/35/73/95/360_F_535739557_hRsWf7PEt3Gv47TrMVTRJ7MT6dOwWsHo.jpg'] */

let arr,data;

async function generate(){
    arr = await fetch('https://team-c3rb.onrender.com/data');
    data = await arr.json();
    console.log(data)
    for(let i = data.length-1; i >= 0; i--){
        let obj = data[i];
        let text = obj.prompt;
        console.log(text.length)
        let div = document.createElement('div'), img = document.createElement('img'), p = document.createElement('p'), txt = document.createTextNode(text.length > 75 ? text.substring(0, 75)+'...' : text+'.');
        div.className='card'
/*         p.id=i;
        img.id=i;
        div.id=i; */
        img.src = obj.link;
        img.width = 350;
        img.height = 250;
        p.appendChild(txt);
        div.appendChild(img);
        div.appendChild(p);
        grid.appendChild(div);
/*         img.addEventListener('click', reply)
        p.addEventListener('click', reply)
        div.addEventListener('click', reply) */
    }
}

/* function reply(e){
    console.log(e.target.id);
} */

generate();