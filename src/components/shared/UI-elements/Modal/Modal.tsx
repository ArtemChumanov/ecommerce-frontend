import React, { FC, MutableRefObject, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalWrapper, HeaderModal, Content } from "./Modal.styled";
import { useLockBodyScroll } from "./hooks/useLockBodyScroll";
import { useOnClickOutside } from "./hooks/useOutSideAlert";
// @ts-ignore
import CloseIcon from "assets/icons/close-icon.svg";
import { Modal } from "antd";

const appRoot = document.getElementById("root");

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: (e: React.MouseEvent<any, MouseEvent>) => void;
  title?: string;
}

const ModalCustom: FC<IModalProps> = ({ children, isOpen, onClose, title }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useLockBodyScroll(isOpen);
  useOnClickOutside(modalRef, onClose);
  if (!appRoot) {
    return null;
  }

  return createPortal(
    <ModalWrapper isOpen={isOpen}>
      <Content ref={modalRef}>
        <HeaderModal>
          <h2>{title}</h2>
          <img src={CloseIcon} alt={"Close"} onClick={onClose} />
        </HeaderModal>
        {children}
      </Content>
    </ModalWrapper>,
    appRoot
  );
};

export default ModalCustom;
