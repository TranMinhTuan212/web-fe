import styles from './home.module.scss'
import classNames from 'classnames/bind';



const cx = classNames.bind(styles)

function Home() {
    
    return ( 
        <div className={cx('wapper')}>
            <h1 className={cx('text-danger', 'text-center', 'pt-5')}>WEB - 1</h1>
        </div>
     );
}

export default Home;