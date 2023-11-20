import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import {useCallback, useEffect, useRef, useState} from "react";

const ANIMATION_DELAY = 300;

export const Modal = (props) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closeHandler();
    }
  }, [closeHandler]);

  const onClickContent = (e) => {
    e.stopPropagation();
  };
  // затваряме с Esc
  // изчистваме таймаутa
  // npm install eslint-plugin-react-hooks --save-dev
  // use createPortal
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={onClickContent}>
          {children}
        </div>
      </div>
    </div>
  );
};
