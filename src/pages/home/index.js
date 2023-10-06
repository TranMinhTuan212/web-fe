import { userKey } from '~/key';
import styles from './home.module.scss'
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';



const cx = classNames.bind(styles)

function Home() {

    // const navigate = useNavigate()

    // const user = JSON.parse(localStorage.getItem(userKey))
    // if(!user){
    //     navigate('/login')
    // }
    
    return ( 
        <div className={cx('wapper')}>
            <h1 className={cx('text-danger', 'text-center', 'pt-5')}>WEB - 1</h1>
        </div>
     );
}

export default Home;