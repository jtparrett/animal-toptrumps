import React from "react";
import PropTypes from "prop-types";
import BaseModal from "react-modal";

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.45)",
  },
  content: {
    padding: "25px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    border: "none",
  },
};

export const Modal = ({ children, isOpen, onRequestClose }) => (
  <BaseModal
    style={customStyles}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    {children}
  </BaseModal>
);

Modal.defaultProps = {
  onRequestClose: null,
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
};
