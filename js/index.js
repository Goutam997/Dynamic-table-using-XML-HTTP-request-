'use strict';
let out_obj = document.getElementById("disp");
const url = 'https://61b9ab5e38f69a0017ce61d3.mockapi.io/people';
let data = [];
function api_data(url){
    let request =  new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload=()=>{
        let res = request.responseText;
        data=JSON.parse(res);
        console.log(data);
        create_table(data);
    }
    request.send();
}
function create_table(data){
    let table = document.getElementById("table_of_information");
    
    for(let ob in data){
        let first_name = data[ob]["first_name"];
        let country = data[ob].country;
        let last_name = data[ob].last_name;
        let email = data[ob].email_id
        let img = data[ob].image;
        
        let row_count = table.rows.length;
        let row = table.insertRow(row_count);
        row.insertCell(0).innerHTML=first_name;
        row.insertCell(1).innerHTML=last_name;
        row.insertCell(2).innerHTML=email;
        row.insertCell(3).innerHTML=country;
        row.insertCell(4).innerHTML=img;
    }
}

api_data(url);
