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
    nev:'Redmi note 14 pro plus',
    szoveg: 'Ikonikus fotók AI-al',
    ar: 179900,
    kep: 'redmi14.webp',
}
]

kosar = [0,0,0,0]

function kereses(ID)
{
    hol = -1
    for (let i = 0; i < telefonok.length; i++) 
    {
        if (ID == telefonok[i].id)
        {
            hol=i
        } 
    }
    return hol
}

function kosarba_rak(ID) {
    kosar[ID]++
    kosar_megjelenites()
}

function kosar_megjelenites() {
    seged = ""
    document.getElementById("kosar").innerHTML="<h3>Kosár</h3>"
    ossz_ar = 0
    for (let i = 0; i < kosar.length; i++) {
        if (kosar[i] > 0) {
            index = i
            seged = seged + `${telefonok[index].nev}: ${telefonok[index].ar} Ft_${kosar[index]} db<br>`
            ossz_ar = ossz_ar + telefonok[index].ar * kosar[index]
        }        
    }

    document.getElementById("kosar").innerHTML+= seged + 
        `<h4>Fizetendő összeg: ${ossz_ar} Ft</h4> 
        <button class="fizet_gomb" onclick="fizetve()">Fizetés</button>`
}

function megjelenites() {
    egesz = "<header class='m-2 p-2'> <h1>Telefon webáruház</h1> </header>"
    egykartya = ""
    for (let i = 0; i < telefonok.length; i++) 
    {
        egykartya = `
        <div class="egytelefon">
            <img src="kepek/${telefonok[i].kep}">
            <h3>${telefonok[i].nev}</h3>
            <h4>${telefonok[i].szoveg}</h4>
            <p class="ar">${telefonok[i].ar} Ft</p>
            <button onclick="kosarba_rak(${telefonok[i].id})"><i class="bi bi-cart-fill"></i>Kosár</button>
        </div>
        `
        egesz = egesz + egykartya
    }
    document.getElementById("container").innerHTML=egesz
}

function fizetve() {
    alert("Köszönjük a vásárlását!")
    kosar=[0,0,0,0]
    kosar_megjelenites()
}