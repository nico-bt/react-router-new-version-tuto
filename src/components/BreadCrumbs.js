import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumbs() {
    const location = useLocation()

    let currentLink =""
    
    const crumbs = location.pathname.split("/")
        .filter(item => item !== "")
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div className='crumb' key={crumb}>
                    <Link to={currentLink}> {crumb} </Link>
                </div>
            )
        })
    
    return (
        <div className='breadcrumbs'>
            {crumbs}
        </div>
  )
}
