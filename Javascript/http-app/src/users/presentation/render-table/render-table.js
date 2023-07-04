import usersStore from "../../store/users-store";
import "./render-table.css";

let table;

const createTable = () => {
  const table = document.createElement("table");

  const tableHeader = document.createElement("thead");
  tableHeader.innerHTML = `
      <tr>
        <th> #ID </th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
      </tr>
  `;

  const tableBody = document.createElement("tbody");

  //aqui cremos el tbody

  //insertamos el theader,tbody en la tabla
  table.append(tableHeader, tableBody);
  return table;
};
/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {
  //nos traemos a los usuarios  creados y spreados del userstore
  const users = usersStore.getUsers();
  //preguntamos que si no hay table crear una table con la funcion createtable
  if (!table) {
    table = createTable();
    //creamos append porque no queremos destruir nada de lo que habiamos creado
    //si usamos inner html solo mostrara
    element.append(table);

    //================LISTENERS
  }

  let tableHTML = "";

  //iteramos cada user de users
  users.forEach((user) => {
    tableHTML += `
      <tr>
        <td>${user.id} </td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.isActive}</td>
        <td> <a href= "#/" data-id= "${user.id}" >Select</a>
             <a href= "#/" data-id= "${user.id}" >Delete</a>
        
        </td>
      </tr>
    
    
    
    `;
  });

  table.querySelector("tbody").innerHTML = tableHTML;
};
