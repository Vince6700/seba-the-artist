import { useState, createRef } from "react"
import { encode } from "../helpers"

const initialState = {
  email: "",
  subject: "",
  message: "",
}

const initialErrors = {
  email: "",
  subject: "",
  message: "",
}

const useContactForm = () => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const contactForm = createRef()

  console.log(errors)

  const handleForm = e => {
    setErrors({ ...errors, [e.target.name]: false })
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSnackBar = () => {
    setIsSnackBarOpen(!isSnackBarOpen)
  }

  const handleSubmit = e => {
    e.preventDefault()

    let errors = initialErrors

    form.email.length === 0
      ? (errors.email = "C'est quoi votre mail déjà ?")
      : (errors.email = "")
    form.subject.length === 0
      ? (errors.subject = "hmmm à quel sujet ?")
      : (errors.subject = "")
    form.message.length === 0
      ? (errors.message = "vous voulez pas me laisser un petit mot ?")
      : (errors.message = "")

    if (errors.message || errors.email || errors.subject) {
      setErrors(errors)
      return
    }

    const htmlForm = contactForm.current
    setIsSubmitting(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": htmlForm.getAttribute("name"), ...form }),
    })
      .then(() => {
        handleSnackBar()
        setIsContactOpen(false)
        setForm(initialState)
      })
      .catch(error => alert(error))
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return {
    handleSubmit,
    handleForm,
    form,
    errors,
    isSubmitting,
    contactForm,
    isSnackBarOpen,
    handleSnackBar,
    isContactOpen,
    setIsContactOpen,
  }
}

export default useContactForm
