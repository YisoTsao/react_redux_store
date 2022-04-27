import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";

export const ModalWrapper = () => {
  const modalStore = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  console.log(modalStore);
  const { title, body, isShow, actionButton, withButtons } = modalStore;

  return (
    <Modal
      title={title}
      isShow={isShow}
      actionButton={actionButton}
      withButtons={withButtons}
      dispatch={dispatch}
    >
      <div>{body}</div>
    </Modal>
  );
};
