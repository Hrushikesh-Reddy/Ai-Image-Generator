const grid = document.getElementById('igrid')

const data = ['https://t4.ftcdn.net/jpg/05/35/73/95/360_F_535739557_hRsWf7PEt3Gv47TrMVTRJ7MT6dOwWsHo.jpg']

function generate(){
    for(let i = 0; i < 11; i++){
        let div = document.createElement('div'), img = document.createElement('img'), p = document.createElement('p'), txt = document.createTextNode("This is an example prompt.....");
        div.className = "card";
        img.src = data[0];
        img.width = 350;
        img.height = 250;
        p.appendChild(txt);
        div.appendChild(img);
        div.appendChild(p);
        grid.appendChild(div);
    }
}

generate();