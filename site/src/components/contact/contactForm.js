import React from "react"
import PropTypes from "prop-types"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@material-ui/core"
import { StylesProvider } from "@material-ui/core/styles"
import style from "./contactForm.module.scss"
import SendIcon from "@material-ui/icons/Send"
import CancelIcon from "@material-ui/icons/Cancel"
import useContactForm from "../../hooks/useContactForm"

const ContactForm = ({ isOpen, onClose }) => {
  const { handleSubmit, handleForm } = useContactForm()

  return (
    <StylesProvider injectFirst>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle classes={{ root: style.title }} disableTypography>
          Contactez-moi
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contactForm" />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Votre adresse email"
              type="email"
              fullWidth
              variant="outlined"
              size={"medium"}
              InputProps={{ classes: { root: style.text } }}
              InputLabelProps={{ classes: { root: style.text } }}
              classes={{ root: style.marginBottom }}
              onChange={handleForm}
            />
            <TextField
              margin="dense"
              id="subject"
              label="Sujet"
              type="text"
              fullWidth
              variant="outlined"
              InputProps={{ classes: { root: style.text } }}
              InputLabelProps={{ classes: { root: style.text } }}
              classes={{ root: style.marginBottom }}
              onChange={handleForm}
            />
            <TextField
              margin="dense"
              id="subject"
              label="Message"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              InputProps={{ classes: { root: style.text } }}
              InputLabelProps={{ classes: { root: style.text } }}
              classes={{ root: style.marginBottom }}
              onChange={handleForm}
            />
            <div className={style.buttonsContainer}>
              <Button
                onClick={() => {}}
                variant="contained"
                color="primary"
                classes={{ root: style.button }}
                endIcon={<SendIcon />}
              >
                Envoyer
              </Button>
              <Button
                onClick={onClose}
                classes={{ root: style.cancelButton }}
                endIcon={<CancelIcon fontSize="small" />}
              >
                annuler
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </StylesProvider>
  )
}

ContactForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default ContactForm
