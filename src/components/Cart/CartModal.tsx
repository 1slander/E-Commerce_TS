import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import CartPage from "../../pages/CartPage";
type CartModalProps = {
  title: string;
  actions: JSX.Element;
};

const CartModal = forwardRef(function Modal(
  { title, actions }: CartModalProps,
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      <h2>{title}</h2>
      <CartPage />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
