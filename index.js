document.addEventListener("DOMContentLoaded", () => {
    let objPessoa = [
        {
            Nome: "Fulano",
            Idade: 5,
            VacinasPendentes: "Febre Amarela",
            Data: "15-11-2024",
            Telefone: "1234-5678"
        },
        {
            Nome: "Ciclano",
            Idade: 8,
            VacinasPendentes: "CoronaVac",
            Data: "16-11-2024",
            Telefone: "2345-6789"
        },
        {
            Nome: "Beltrano",
            Idade: 7,
            VacinasPendentes: "Febre Amarela",
            Data: "17-11-2024",
            Telefone: "3456-7890"
        },
        {
            Nome: "João",
            Idade: 5,
            VacinasPendentes: "CoronaVac",
            Data: "18-11-2024",
            Telefone: "4567-8901"
        },
    ];

    let lista = document.getElementById("tbody");
    lista.innerHTML += objPessoa.map((item, index) => {
        if(index == 2){
            return `
            <tr class="table-row">
                <td><input type="checkbox" disabled class="check"></td>
                <td class='col'>${item.Nome}</td>
                <td class='col'>${item.Idade}</td>
                <td class='col'>${item.Data}</td>
                <td class='col'>${item.VacinasPendentes}</td>
                <td class='col' style="text-decoration: line-through">${item.Telefone}</td>
            <td class='col'><img src="764599.png" width="30px"></td></tr>
        `
        }
        return `
            <tr class="table-row">
                <td><input type="checkbox" id="dis"class="check"></td>
                <td class='col'>${item.Nome}</td>
                <td class='col'>${item.Idade}</td>
                <td class='col'>${item.Data}</td>
                <td class='col'>${item.VacinasPendentes}</td>
                <td class='col'>${item.Telefone}</td>
                <td class='col'><img src="764599.png" width="30px"></td>
            </tr>
        `
    }).join('');

    let selecionarTodos = document.getElementById("pegar_todos");
    let checkbox = document.querySelectorAll(".check");

    selecionarTodos.addEventListener("click", () => {
        checkbox.forEach((item) => {
            if(item.id === "dis"){
                item.checked = true;
            }else{
                item.checked = false ;
            }
        });
        verificarCheckbox();s
    });

    let check2 = document.querySelectorAll(".check2");

    let btnNotificar = document.getElementById("notificar");
    btnNotificar.addEventListener("click", () => {
        checkbox.forEach((item, index) => {
            if (item.checked) {
                item.checked = false;
            }
        });  
        check2.forEach((item, index) => {
            if (item.checked) {
                item.checked = false;
            }
        });   
        verificarCheckbox();
    });

function verificarCheckbox() {
    let algumMarcado = Array.from(checkbox).some(item => item.checked) && Array.from(check2).some(item => item.checked);
    document.getElementById("notificar").disabled = !algumMarcado;
}

checkbox.forEach(item => item.addEventListener("change", verificarCheckbox));
check2.forEach(item => item.addEventListener("change", verificarCheckbox));
})
