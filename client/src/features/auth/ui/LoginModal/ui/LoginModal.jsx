import { classNames } from "../../../../../shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";
import { Modal } from "../../../../../shared/ui/Modal/Modal";
import { LoginForm } from "../../LoginForm";

export const LoginModal = ({ className, isOpen, onClose }) => {
  return (
      <div>

        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
          <LoginForm />
        </Modal>
      </div>

  );
};
