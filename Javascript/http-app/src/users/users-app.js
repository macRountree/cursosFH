import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/render.buttons/render-buttons";
import usersStore from "./store/users-store";
import { saveUser } from "./use-casses/save-user";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UserApp = async (element) => {
  await usersStore.loadNextPage();

  // console.log(usersStore.getUsers());

  //Una vez cargados los usuarios
  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element, async (userLike) => {
    const user = await saveUser(userLike);

    usersStore.onUserChanged(user);
    renderTable();
  });
};
