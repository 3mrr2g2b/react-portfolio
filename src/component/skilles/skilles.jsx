import { useState, useEffect } from "react";
import PageLoader from '../load_skelton/skelton'
const Skilles = () => {
    const [isLoading ,setLoading] = useState(true)
    useEffect(()=>{
        setTimeout (()=>{
            setLoading(false)
        },3000)
    },[])
    const groupe = ['UI/UX','Javascript','Php','React js','Redux']
    return (
        <>
        {isLoading ? (<PageLoader/>):(
            <div className='main-skilles'>
                <div className='container'>
                {
                groupe.map((e) => (
                    
                    <div className='group'>
                    <p className='skille-name'>{e}</p>
                    <span></span>
                    </div>
                    ))
                }
                </div>
            </div>
            )
        }
        </>
    )
}

export default Skilles;