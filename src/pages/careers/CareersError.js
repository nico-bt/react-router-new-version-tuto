import { Link, useRouteError } from "react-router-dom"

export default function CareersError() {
    // Levanta el error arrojado (en este caso viene del loader que no encontró respuesta a ese :id)
    const error = useRouteError()

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}