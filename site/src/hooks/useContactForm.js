import { useState } from "react"
import { encode } from "../helpers"

const useContactForm = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({ email: "", subject: "", message: "" })

  console.log(form, errors)

  const handleForm = e => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...form }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return { handleSubmit, handleForm }
}

export default useContactForm
