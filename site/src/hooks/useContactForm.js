import { useState } from "react"
import { encode } from "../helpers"

const useContactForm = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({ email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log(form, errors)

  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setIsSubmitting(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...form }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
      .finally(() => setIsSubmitting(false))
  }

  return { handleSubmit, handleForm, form, errors, isSubmitting }
}

export default useContactForm
