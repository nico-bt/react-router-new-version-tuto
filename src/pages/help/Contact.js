import { Form, redirect, useActionData } from "react-router-dom"

export default function Contact() {

  // Este data es el return de la action. En este caso contactAction
  const data = useActionData() 

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {/* Form component de react-router usa como "action" la funcion que especifiquemos en la Route en App */}
      {/* En este caso en la contactAction() que definimos abajo en este component*/}
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}

// Esta func se referencia en action={} en la Route
// Viene con el request que tiene un par de métodos encima para sacar la info que pasa la form con los "name" de los inputs
export const contactAction = async ({ request }) => {
  // console.log(request)
  
  const data = await request.formData()
  
  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission)

  // send your post request

  if (submission.message.length < 10) {
    return {error: 'Message must be over 10 chars long.'}
  }

  // redirect the user
  return redirect('/')
}