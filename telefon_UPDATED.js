telefonok =
[{
    id: 0,
    nev:'Xiaomi 14T',
    szoveg: 'Éjjeli fények, mesteri képek',
    ar: 179000,
    kep: '14t.jpg',
},
{
    id: 1,
    nev:'Xiaomi 15T',
    szoveg: 'Mesterművek még közelebb',
    ar: 199000,
    kep: '15t.jpg',
},

{
    id: 2,
    nev:'Xiaomi 15',
    szoveg: 'A fotózás csúcsa',
    ar: 339000,
    kep: '15.jpg',
},
{
    id: 3,
    nev:'Redmi Note 14 Pro Plus',
    szoveg: 'Ikonikus fotók AI-al',
    ar: 179900,
    kep: 'redmi14.webp',
}
]

kosar = [0,0,0,0]

function kosarba_rak(ID) {
    kosar[ID]++
    kosar_megjelenites()
}

function kosar_megjelenites() {
    seged = ""
    document.getElementById("kosar").innerHTML='<h3 style="font-weight: bold;">Kosár</h3>'
    ossz_ar = 0
    for (let i = 0; i < kosar.length; i++) {
        if (kosar[i] > 0) {
            index = i
            seged = seged + `${telefonok[index].nev}: ${telefonok[index].ar} Ft, ${kosar[index]} db<br>`
            ossz_ar = ossz_ar + telefonok[index].ar * kosar[index]
        }        
    }

    document.getElementById("kosar").innerHTML+= seged + 
        `<h4 style="font-weight: bold;">Fizetendő összeg: ${ossz_ar} Ft</h4> 
        <button onclick="fizetve()" class="fizetes">Fizetés</button>`
}

function megjelenites() {
    egesz = '<div class="row">'
    egykartya = ""
    for (let i = 0; i < telefonok.length; i++) 
    {
        egykartya = `
            <div class="col-lg-6 col-md-6 col-12">
                <div class="egytelefon">
                    <img src="kepek/${telefonok[i].kep}">
                    <h3>${telefonok[i].nev}</h3>
                    <h4>${telefonok[i].szoveg}</h4>
                    <p class="ar">${telefonok[i].ar} Ft</p>
                    <button onclick="kosarba_rak(${telefonok[i].id})" class="fizetes">Kosárba</button>
                </div>
            </div>
        `
        egesz = egesz + egykartya
    }
    egesz += '</div>';
    document.getElementById("container").innerHTML=egesz
}

function fizetve() {
    alert("Sikeresen leadta a rendelését.")
    kosar=[0,0,0,0]
    kosar_megjelenites()
}