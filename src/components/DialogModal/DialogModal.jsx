import PropTypes from 'prop-types';

import styles from './DialogModal.module.css';

/**
 * DialogModal component renders a modal dialog with customizable title, message, and action buttons.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} [props.isOpen=false] - Determines if the modal is open.
 * @param {string} [props.title='Dialog'] - The title of the dialog.
 * @param {string} [props.message='Are you sure?'] - The message displayed in the dialog.
 * @param {Function} [props.onConfirm=() => {}] - Callback function to handle the confirm action.
 * @param {Function} [props.onCancel=() => {}] - Callback function to handle the cancel action.
 * @param {string} [props.confirmText='Confirm'] - The text for the confirm button.
 * @param {string} [props.cancelText='Cancel'] - The text for the cancel button.
 * @returns {JSX.Element|null} The rendered modal dialog or null if not open.
 */
const DialogModal = ({
  isOpen = false,
  title = 'Dialog',
  message = 'Are you sure?',
  onConfirm = () => {},
  onCancel = () => {},
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div
      className={styles.dialogModalOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div className={styles.dialogModal} tabIndex="-1">
        <h2 id="dialog-title" className={styles.dialogModalTitle}>
          {title}
        </h2>
        <p id="dialog-description" className={styles.dialogModalMessage}>
          {message}
        </p>
        <div className={styles.dialogModalButtons}>
          <button
            type="button"
            className={`${styles.dialogModalButton} ${styles.cancel}`}
            onClick={handleCancel}
            aria-label={cancelText}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className={`${styles.dialogModalButton} ${styles.confirm}`}
            onClick={handleConfirm}
            aria-label={confirmText}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

DialogModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
};

export default DialogModal;
