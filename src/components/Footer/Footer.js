import React from 'react';
import s from './footer.module.scss';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className='container'>
                <footer>
                    <div className={s.mainInfo}>
                        <div className={s.logo}>
                            <h1>Recipes</h1>
                        </div>

                        <div className={s.logoBorder}/>

                        <div className={s.info}>
                            <p>Street 238,52 tempor Donec ultricies mattis nulla, suscipit risus tristique ut.</p>
                        </div>

                        <div className={s.phoneEmailWebsite}>
                            <p>Phone: <span>1.800.555.6789</span></p>
                            <p>E-mail: <span>support@sitename.com</span></p>
                            <p>Website: <span>sktthemes.net</span></p>
                        </div>
                    </div>

                    <div className={s.copyright}>
                        <h3>Copyright 2020 Recipes. All Rights Reserved by SKT Themes</h3>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;