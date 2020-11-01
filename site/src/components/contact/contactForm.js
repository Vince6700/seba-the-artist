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

const ContactForm = ({
  isOpen,
  onClose,
  handleSubmit,
  handleForm,
  form,
  isSubmitting,
  errors,
  contactForm,
}) => {
  return (
    <StylesProvider injectFirst>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle classes={{ root: style.title }} disableTypography>
          Contactez-moi
        </DialogTitle>
        <DialogContent>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            ref={contactForm}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
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
              value={form.email}
              error={!!errors.email}
              name="email"
              helperText={errors.email}
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
              value={form.subject}
              error={!!errors.subject}
              helperText={errors.subject}
              name="subject"
            />
            <TextField
              margin="dense"
              id="message"
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
              value={form.message}
              error={!!errors.message}
              helperText={errors.message}
              name="message"
            />
            <div className={style.buttonsContainer}>
              <Button
                variant="contained"
                color="primary"
                classes={{ root: style.button }}
                endIcon={<SendIcon />}
                type="submit"
              >
                Envoyer
              </Button>
              <Button
                onClick={onClose}
                classes={{ root: style.cancelButton }}
                endIcon={<CancelIcon fontSize="small" />}
                disabled={isSubmitting}
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
  onClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  form: PropTypes.any,
  isSubmitting: PropTypes.bool.isRequired,
  errors: PropTypes.any,
  contactForm: PropTypes.any,
}

export default ContactForm
