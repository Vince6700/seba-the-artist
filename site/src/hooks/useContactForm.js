import { useState } from "react"
import { encode } from "../helpers"

const useContactForm = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
    "form-name": "contact",
  })
  const [errors, setErrors] = useState({ email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log(form, errors)

  const handleForm = e => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
      .finally(() => setIsSubmitting(false))
  }

  return { handleSubmit, handleForm, form, errors, isSubmitting }
}

export default useContactForm
