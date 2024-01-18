import styles from './footer.module.css';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            className={`${styles.footer} text-white p-20 grid grid-cols-[2fr,1fr,1fr,1fr]`}
            style={{ marginTop: 200 }}>
            <div className=' flex flex-col gap-3 justify-between'>
                <h1 className='text-2xl'>Hi,</h1>
                <div className=' flex flex-col gap-4'>
                    <h1>Phone: (+880) 0123456789</h1>
                    <h1>Email: hello@company_name.com</h1>
                </div>
                <div className='flex text-5xl gap-4'>
                    <FaFacebookSquare />
                    <FaLinkedin />
                </div>
            </div>
            <div className=' flex flex-col gap-y-11'>
                <h1 className='text-2xl'> All Products</h1>
                <ul className=' flex flex-col gap-4'>
                    <li>
                        <a href='#!' className='text-dark'>
                            Electronics
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Fashion
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Beauty
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Automotive
                        </a>
                    </li>
                </ul>
            </div>
            <div className=' flex flex-col gap-y-11'>
                <h1 className='text-2xl'>Support</h1>
                <ul className=' flex flex-col gap-4'>
                    <li>
                        <a href='#!' className='text-dark'>
                            Complaints
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Help center
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Community
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            FAQ
                        </a>
                    </li>
                </ul>
            </div>
            <div className=' flex flex-col gap-y-11'>
                <h1 className='text-2xl'>About</h1>
                <ul className=' flex flex-col gap-4'>
                    <li>
                        <a href='#!' className='text-dark'>
                            Privacy policy
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Media
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Job offers
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-dark'>
                            Cooperation
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
