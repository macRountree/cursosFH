import modalHTML from "./render-modal.html?raw";
import "./render-modal.css";

let modal, form;

export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  //si existe un modal... entonces añade la clase hide-modal
  modal?.classList.add("hide-modal");
  //si es que exite formulario... aplica el reset
  form?.reset();
};
/**
 *
 * @param {HTMLDivElement} element
 * @param{(Userlike) => Promise<Void>} callback
 */
export const renderModal = (element, callback) => {
  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalHTML;
  modal.className = "modal-container hide-modal";
  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (event.target.className === "modal-container") {
      hideModal();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // console.log('form e');

    const formData = new FormData(form);
    const userLike = {};
    //como cada iteracion de form regresa strings incluuido el balance (Number)
    //desctructuramos  el iterador form

    for (const [key, value] of formData) {
      if (key === "balance") {
        //con esto le decimos que la key se convierte en Number
        userLike[key] = +value;
        //usamos continue para que siga la iteracion
        continue;
      }
      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
        continue;
      }
      userLike[key] = value;
    }
    await callback(userLike);
    hideModal();
  });

  element.append(modal);
  // console.log(userLike);
};
