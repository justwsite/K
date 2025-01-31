document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('#second td');
    rows.forEach(row => {
        if (row.dataset.word) {
            funct.call(row);
        }
    });
    const r = document.querySelectorAll('#r td');
    r.forEach(w => {
        if (w.textContent.trim().includes("/") && w.textContent != "Время / Дата") {
		w.style.fontWeight = "bold";
		w.style.fontStyle = "italic";
        }
    });
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

document.addEventListener('DOMContentLoaded', function () {
    t('z0', '.l');
    t('z1', '.p1');
    t('z2', '.p2');
});

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
