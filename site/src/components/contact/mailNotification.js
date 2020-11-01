import React from "react"
import PropTypes from "prop-types"
import Alert from "@material-ui/lab/Alert"
import Snackbar from "@material-ui/core/Snackbar"
import style from "./mailNotification.module.scss"

const MailNotification = ({ isSnackbarOpen, handleSnackBar }) => (
  <Snackbar
    open={isSnackbarOpen}
    autoHideDuration={5000}
    onClose={handleSnackBar}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <Alert
      onClose={handleSnackBar}
      severity="success"
      classes={{ message: style.notification, icon: style.icon }}
    >
      message envoyé
    </Alert>
  </Snackbar>
)

MailNotification.propTypes = {
  isSnackbarOpen: PropTypes.bool.isRequired,
  handleSnackBar: PropTypes.func.isRequired,
}

export default MailNotification
