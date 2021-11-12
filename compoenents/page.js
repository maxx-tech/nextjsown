import React from 'react'
import Link from 'next/link'

const Page = ({title, Linkto}) => {
    return (
        <div>
            <h2>welcom to {title} Page</h2>
           {/* <Link href={Linkto.path}><a>Go to {Linkto.page}</a></Link> */}
        </div>
    )
}

export default Page