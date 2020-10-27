import { useState, createRef } from "react"
import { encode } from "../helpers"

const useContactForm = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({ email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contactForm = createRef()

  console.log(form, errors)

  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const htmlForm = contactForm.current
    setIsSubmitting(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": htmlForm.getAttribute("name"), ...form }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
      .finally(() => setIsSubmitting(false))
  }

  return { handleSubmit, handleForm, form, errors, isSubmitting, contactForm }
}

export default useContactForm
