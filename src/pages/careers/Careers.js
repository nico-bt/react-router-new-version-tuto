import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    // Esta data viene del loader definido abajo y seteado en la Route "/Careers" en App.js
    const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
// -----------------------------------------------------------------
// API de mentira con jsonserver desde /data/db.json
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  return res.json()
}