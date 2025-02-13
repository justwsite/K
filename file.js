document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('#second td');
	rows.forEach(row => {
		if (row.dataset.word) {
            		funct.call(row);
        	}
	});
    const r = document.querySelectorAll('#r td');
    r.forEach(w => {
	    let txt = w.textContent.trim().normalize();
		if (txt.startsWith("/")) {
       			w.style.textAlign = "right";
    		} else if (txt.endsWith("/")) {
        		w.style.textAlign = "left";
    		}
        if (w.textContent.trim().includes("/") && w.textContent != "Время / Дата") {
            w.style.fontWeight = "bold";
            w.style.fontStyle = "italic";
        }
    });
    t('z0', '.l');
    t('z1', '.p1');
    t('z2', '.p2');
    zzz('v', 'w', 'z0', 'z1', 'z2')
});

function funct() {
    const word = this.dataset.word;
    const all = this.dataset.all;
    const table = document.getElementById('r');
    let count = 0;
    for (let row of table.rows) {
        for (let cell of row.cells) {
            if (cell.textContent.trim().includes(word)) {
                count++;
            }
        }
    }
	this.textContent = count + " / " + all;
	if(count == all) {
		this.style.background = "#61AA94";
	}
}

function t(a, b) {
    const x = document.getElementById(a);
    const y = document.querySelectorAll(b);
    let s2 = 0;
    let s1 = 0;
    let s = 0;
    y.forEach(z => {
        const txt = z.textContent;
        const n = parseInt(txt.split('/')[0]);
        const m = parseInt(txt.split('/')[1]);
        if(!isNaN(n)) {
            s1+=n;
        }
        if(!isNaN(m)) {
            s2+=m;
        }
    });
    s = s2-s1;
    x.textContent = s + " / " + s2;
}

function zzz(y, x, a, b, c) {
    const v = document.getElementById(y);
    const w = document.getElementById(x);
    const z0 = document.getElementById(a);
    const z1 = document.getElementById(b);
    const z2 = document.getElementById(c);
	let i = parseInt(z0.textContent.split('/')[0]);
	let f = parseInt(z1.textContent.split('/')[0]) + parseInt(z2.textContent.split('/')[0]);
	i = i+(f/2);
	let all = parseInt(z0.textContent.split('/')[1]) + parseInt(z2.textContent.split('/')[1]);
	w.textContent = "Осталось пар: " + Math.ceil(i) + " / " + all;
	i = all - i;
	v.textContent = "Прошло пар: " + Math.floor(i) + " / " + all;
}

function mf(a) {
	window.open(a, "_blank");
};
