let body = document.getElementById("body");

function createNavbar() {
    let nav = document. createElement("nav");
    nav.style.border = "1px solid black";
    nav.style.height = "50px";
    nav.style.width = "90%";
    
    body.appendChild(nav);
}

function makeHeaderOne(text="", id="") { // text="" betyder default text
    let h1 = document.createElement("h1");
    h1.innerText = text;
    h1.setAttribute("id", id );
    return h1;
}

function makeHeaderTwo(text="", id="") { // text="" betyder default text
    let h2 = document.createElement("h2");
    h2.innerText = text;
    h2.setAttribute("id", id );
    return h2;
}

function makeTable(rowCount, colCount) {
    // table, tr (row), th (table header), table data
    let table = document.createElement("table"); 

    // Rows
    for (let row = 0; row < rowCount; row++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        
        // Cols
        for (let col = 0; col < colCount; col++) {

            if (row === 0) {
                let th = document.createElement("th");
                th.setAttribute("id", row + ":" + col); // nummret på row och col sätts som id, t. ex. row 0 och col 0 har id="00", row 0 och col 1 har id="01" osv
                th.innerText = row + ":" + col;
                tr.appendChild(th);
                
            } else {
                let td = document.createElement("td");
                td.setAttribute("id", row + ":" + col); // nummret på row och col sätts som id, t. ex. row 0 och col 0 har id="00", row 0 och col 1 har id="01" osv
                td.innerText = row + ":" + col;
                tr.appendChild(td);
            }
        }
    }

    return table;
}

function makeArticle(id, cls) {
    let article = document.createElement("article");
    article.setAttribute("id", id);
    article.setAttribute("class", cls);
    return article;
}



createNavbar();

body.appendChild(makeHeaderOne("04_JS_var_flode_DOM", "h1"));
body.appendChild(makeHeaderTwo("Table with table rows, headers and columnes", "h2"));

let table = makeTable(5, 8);
body.appendChild(table);

let article1 = makeArticle("article_1", "articles");
article1.appendChild(makeHeaderOne("", ""));
body.appendChild(article1);

let article2 = makeArticle("article_2", "articles");
article2.appendChild(makeHeaderOne("", ""));
body.appendChild(article2);

