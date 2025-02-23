import {Link} from 'react-router-dom';
import Lower from "../Footer/Lower"
import DribbleIcon from "../../assets/dribble.png"
import TwitterIcon from "../../assets/twitter.png"
import FacebookIcon from "../../assets/facebook.png"
import InstagramIcon from "../../assets/instagram.png"
import PinterestIcon from "../../assets/pinterest.png"

const Footer = () => {
    return (
        <div className="site__footer">
            <div className="footer-main-content">
                <div className="dirbble_footer">
                    <div>
                        <svg
                            className="site__logo footer-logo"
                            xmlns="http://www.w3.org/2000/svg"
                            width="104px"
                            height="50px"
                            viewBox="0 0 76 19"
                            fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M75.8822 14.657C72.7063 20.0415 67.6766 18.4791 66.166 17.2558C65.5231 17.692 64.3958 18.6481 62.8926 18.5377C59.6913 18.3027 58.5449 13.7279 58.5449 13.7279C58.5679 13.7462 57.5913 14.0649 57.0635 14.0592C57.0567 15.4008 55.897 18.6056 52.7672 18.5646C49.2551 18.5188 48.5411 13.2864 48.5411 13.2864C48.5411 13.2864 48.1916 13.7717 46.8627 14.2551C46.9296 13.2244 46.8807 18.4077 42.6713 18.4839C39.3435 18.5442 38.4452 13.2057 38.4452 13.2057C38.4452 13.2057 37.8679 13.8054 36.7491 14.0134C36.8202 12.9659 36.7046 18.5015 32.4947 18.4839C29.6497 18.4721 28.6775 15.1954 28.7531 14.7406C28.8496 14.161 27.7916 18.5654 25.0281 18.4968C23.8877 18.4633 23.0375 17.6376 22.504 16.5368C21.7898 17.354 20.7529 18.4968 19.5897 18.4968C17.5017 18.4968 16.5812 16.7504 16.7371 11.7624C16.7504 11.1708 16.7077 10.9381 16.1196 10.8496C15.7666 10.7907 15.4051 10.6792 15.0226 10.6204C14.9 11.0295 13.8602 18.3637 10.2847 18.5029C9.08519 18.5496 8.4293 17.5105 7.89066 16.7393C7.06497 17.8316 5.97501 18.5377 4.42227 18.5377C1.79205 18.5377 0 16.4114 0 13.7885C0 11.1655 1.79205 9.03942 4.42227 9.03942C4.88732 9.03942 5.01787 9.10608 5.44272 9.23004C4.569 1.27504 6.63238 0.0317866 8.43739 0.0317866C10.1703 0.0317866 13.1308 4.05384 8.96512 14.2559C9.88998 17.2989 11.8838 17.1268 12.8419 10.8626C13.0369 9.58927 12.5155 7.87099 13.3265 7.63117C14.809 7.19289 14.9663 8.50787 15.6614 8.72697C16.3964 8.95853 16.8254 8.93592 17.531 9.08327C18.7367 9.31873 19.2072 9.96643 19.0603 11.409C18.8839 13.2343 18.5753 15.891 19.5162 16.2148C20.1947 16.45 21.4335 15.0429 21.6509 14.273C21.8682 13.5031 21.9136 13.2396 21.9329 12.6749C21.9623 11.468 21.9992 10.5833 22.205 9.67055C22.2931 9.31736 22.3935 9.08347 22.7931 9.06748C23.1219 9.0591 23.7232 8.96009 23.9879 9.16611C24.3407 9.43119 24.2966 9.70017 24.2561 10.4081C23.8458 20.5015 27.0038 15.4628 27.9454 11.4283C27.6101 6.86623 27.8403 0.115326 30.6991 0.00210112C32.1859 -0.0567822 32.8432 1.13431 32.9155 2.02335C33.12 4.53433 31.9745 8.69372 30.468 11.4909C29.607 17.1984 34.2325 18.3269 34.9722 13.7712C33.762 13.1958 32.4541 10.8668 33.5184 9.73181C34.1156 9.09483 36.6015 10.0099 36.6422 12.0057C37.8616 11.6796 38.0244 10.9911 38.0413 11.1052C37.7061 6.54312 38.017 0.115385 40.876 0.00215941C42.3626 -0.0567239 43.0198 1.13437 43.0921 2.02341C43.2966 4.53438 42.1511 8.69378 40.6448 11.491C39.7837 17.1984 44.4093 18.327 45.1488 13.7713C44.2528 13.5984 42.3614 11.1212 43.4527 9.73187C44.0359 8.98944 46.5127 10.5334 46.79 12.0718C47.9614 11.7403 48.1205 11.0737 48.1373 11.1859C47.802 6.62397 48.1129 0.196235 50.9719 0.0830097C52.4585 0.0241264 53.1157 1.21522 53.188 2.10426C53.3925 4.61523 52.247 8.77471 50.7405 11.5719C49.8796 17.2794 54.5051 18.4077 55.2448 13.852C54.0135 13.647 52.2636 11.0314 53.672 9.69333C54.2347 9.15869 56.3848 10.5465 56.8881 12.1298C57.5874 12.1029 58.0227 11.8617 58.116 11.8374C56.9996 6.4818 57.8307 0.0558781 60.9062 0.00223793C62.5685 -0.0267262 64.1936 0.900905 63.4803 5.99604C62.7994 10.8574 60.3519 12.8975 60.3576 12.9287C60.5 13.5111 61.7559 18.3851 64.9185 15.8134C64.7548 15.4427 64.5909 15.064 64.4993 14.6052C63.9751 11.9327 65.0047 8.91409 67.8032 8.42622C69.4066 8.14671 70.917 8.92734 71.1558 10.6872C71.5487 13.5669 68.9484 15.6524 67.9596 16.1048C67.5167 15.8532 71.9742 18.712 74.6196 12.9829C74.773 12.6558 74.9579 12.6835 75.1975 12.8521C75.3667 12.9712 76.3305 13.8842 75.8822 14.657ZM6.33552 13.0809C6.20092 12.6785 5.92469 11.7918 5.82701 11.4076C5.28905 10.9398 4.90507 10.8638 4.21455 10.8638C2.68 10.8638 1.77679 12.2826 1.77679 13.8125C1.77679 15.3423 2.76077 16.7613 4.29533 16.7613C5.6252 16.7613 6.63735 15.8571 6.94615 14.5771C6.73001 14.0781 6.5156 13.6195 6.33552 13.0809ZM8.39979 2.13753C7.32153 2.13753 6.95576 4.70973 7.02674 6.90406C7.08953 8.84411 7.63164 10.5521 7.91286 11.3174C7.98426 11.4133 7.971 11.3509 8.03474 11.4526C9.90694 7.35053 9.13041 2.13753 8.39979 2.13753ZM30.8531 2.21833C29.4595 2.0585 29.4685 7.86389 29.6415 9.16611C30.3653 8.00823 31.6226 2.53009 30.8531 2.21833ZM41.0297 2.21833C39.6361 2.0585 39.6451 7.86389 39.8182 9.16611C40.5419 8.00823 41.7993 2.53009 41.0297 2.21833ZM51.1257 2.2991C49.732 2.13927 49.741 7.94469 49.9141 9.247C50.6378 8.08902 51.8952 2.61084 51.1257 2.2991ZM61.06 1.87849C58.8887 2.31451 59.3943 9.55399 59.7241 10.8237C62.2817 7.31085 62.3344 1.74654 61.06 1.87849ZM69.1975 10.9254C69.0871 10.4638 68.5351 10.2171 68.1541 10.2779C67.0639 10.4268 66.0065 11.7846 66.4158 13.8518C66.5069 14.3122 66.7349 14.736 66.7312 14.7219C69.1711 13.085 69.3785 11.7951 69.1975 10.9254ZM23.2205 7.46958C22.9089 7.46964 22.6043 7.37729 22.3452 7.20422C22.0861 7.03114 21.8841 6.78512 21.7648 6.49725C21.6455 6.20939 21.6143 5.89261 21.6751 5.587C21.7358 5.28138 21.8859 5.00065 22.1062 4.7803C22.3265 4.55995 22.6072 4.40989 22.9128 4.34909C23.2184 4.28829 23.5352 4.31948 23.8231 4.43873C24.111 4.55797 24.357 4.75991 24.5301 5.019C24.7032 5.27809 24.7956 5.5827 24.7956 5.89429C24.7956 6.10115 24.7549 6.30599 24.6757 6.4971C24.5966 6.68822 24.4806 6.86187 24.3343 7.00815C24.188 7.15443 24.0144 7.27047 23.8233 7.34964C23.6322 7.42882 23.4274 7.46957 23.2205 7.46958Z"
                                fill="#ea4c89"></path>
                        </svg>
                    </div>
                    <div className="tagline">
                        <p>Dribbble is the world’s leading community for creatives to share, grow, and
                            get hired.</p>
                    </div>
                    <div className="social__links">
                        <img className="social__links--icon" src={DribbleIcon} alt="DribbleIcon"/>
                        <img className="social__links--icon" src={TwitterIcon} alt="Twitter Icon"/>
                        <img className="social__links--icon" src={FacebookIcon} alt="FacebookIcon"/>
                        <img className="social__links--icon" src={InstagramIcon} alt="InstagramIcon"/>
                        <img className="social__links--icon" src={PinterestIcon} alt="PinterestIcon"/>
                    </div>
                </div>
                <div className="links-container">
                    <div className="links-column">
                        <div className="link__footer-heading">For designers</div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Go Pro!</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Explore design work</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Design blog</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Overtime podcast</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Dribble meetups</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Playoffs</Link>
                        </div>
                    </div>
                </div>
                <div className="links-container">
                    <div className="links-column">
                        <div className="link__footer-heading">Hire designers</div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Post a job opening</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Post a freelance project</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Seacrh for designers</Link>
                        </div>
                        <div className="link__footer-heading">Brands</div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Advertise with us</Link>
                        </div>
                    </div>
                </div>
                <div className="links-container">
                    <div className="links-column">
                        <div className="link__footer-heading">Company</div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">About</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Careers</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Support</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Media kit</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Testimonials</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">API</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Terms of service</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Privacy policy</Link>
                        </div>
                    </div>
                </div>
                <div className="links-container">
                    <div className="links-column">
                        <div className="link__footer-heading">Directories</div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Design jobs</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Designers for hire</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Freelance designers for hire</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Tags</Link>
                        </div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Places</Link>
                        </div>
                        <div className="link__footer-heading">Design assets</div>
                        <div className="footer__link--container">
                            <Link className="footer__links" to="/">Shop Creative Market</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Lower/>
        </div>
    )
}

export default Footer;