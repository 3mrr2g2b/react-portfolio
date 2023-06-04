import { useState, useEffect } from "react";
import avatar from '../../images/images.png'
import LoaderPage  from "../load_skelton/skelton";
const AboutMe = () => {
    const [isLoading,setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
    return (
        <>
    {isLoading ? (
            <LoaderPage/>
            ):(
                <div className="main">
                <div className="container">
                    <div className="slide">
                        <div className="contain">
                            <div className="overly"></div>
                            <div className="container-img">
                                <img src={avatar} />
                            </div>
                        </div>
                        <div className="detailes">
                            <h3 class="title">عمرو رجب على</h3>
                            <p className='description'>مصمم مواقع - رياكت ديفيلوبر </p>
                            <p className='desc2'>تخرجت من كلية التربية النوعية جامعة المنيا - اعمل كمصمم لمواقع الاننرنت  - كما اننى اقوم بتصمم المواقع حسب الميزانية</p>
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/3mrr2g2b?mibextid=ZbWKwL"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/3mrr2g2b"><i class="fab fa-github"></i></a>
                            <a href="mailto:amrragab28090@gmail.com"><i class="far fa-envelope"></i></a>
                            <a href="#"><i class="far fa-file-pdf"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}

export default AboutMe;