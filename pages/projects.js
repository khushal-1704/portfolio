import styles from '../styles/Projects.module.css'
import Card from '../components/Card'

const Projects = () => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.cards}>
                <Card topImg='netflix.jpg' cardName='NETFLIX' cardContent='CREATED NETFLIX CLONE WITH REACT JS AND REDUX. STYLED WITH CSS 3 . SECURED WITH USER AUTHENTICATION WITH THE HELP OF FIREBASE TOOLS.' cardLink='https://netflix-clone-db8a3.web.app' />
            </div>

            <div className={styles.cards}>
                <Card topImg='linkedin.png' cardName='LINKEDIN' cardContent='CREATED FULLY RESPONSIVE LINKEDIN CLONE FROM SCRATCH WITH REACT JS AND STYLED WITH STYLED-COMPONENTS AND MATERIAL UI ICONS.' cardLink='https://linkedin-bui.web.app/' />
            </div>

            <div className={styles.cards}>
                <Card topImg='cred.png' cardName='CRED' cardContent='BUILD ONLINE CREDIT CARD BILL PAYING UI CLONE WITH REUSABLE COMPONENTS AND STYLED WITH CSS 3' cardLink='https://cred-clone-949e6.web.app/' />
            </div>

            <div className={styles.cards}>
                <Card topImg='tesla.png' cardName='TESLA' cardContent='CREATED TESLA UI WITH REACT JS AND STYLED-COMPONENTS.' cardLink='https://tesla-clone-d3fd0.web.app/' />
            </div>

            <div className={styles.cards}>
                <Card topImg='facebook.png' cardName='FACEBOOK' cardContent='BUILD FACEBOOK USER INTERFACE CLONE WITH REACT JS AND STYLED WITH CSS3 .' cardLink='https://facebook---clon.web.app/' />
            </div>

            <div className={styles.cards}>
                <Card topImg='disney.png' cardName='DISNEY' cardContent='BUILD OTT WEB APP DISNEY UI CLONE WITH REACT JS AND STYLED WITH STYLING TOOLS LIKE STYLED-COMPONENTS' cardLink='https://disney-clone-81801.web.app/' />
            </div>

            <div className={styles.cards}>
                <Card topImg='amazon.jpg' cardName='AMAZON' cardContent='
            CREATED AMAZON CLONE WITH REACT JS . STYLE COMPONENTS AND WITH CART FEATURE AND AUTHENTICATION USING LOCAL STORAGE' cardLink='https://amzon-build.web.app/' />
            </div>

            <div className={styles.cards}>
                <Card topImg='slack.png' cardName='SLACK' cardContent='
            BUILD UI CLONE OF MESSAGING APP SLACK FOR BUSINESS PEOPLE WITH REACT JS AND STYLED WITH STYLED-COMPONENTS .' cardLink='https://slack-clone-550ae.web.app/' />
            </div>

            <div className={styles.cards}>
                <Card topImg='insta.jfif' cardName='INSTAGRAM' cardContent="CREATED SOCIAL MEDIA APP, INSTAGRAM'S UI CLONE WITH REACT JS AND STYLED WITH CSS3 AND COMPONENT LIBRARY MATERIAL UI" cardLink='https://instagra-c.web.app/' />
            </div>
        </div>
    );
}

export default Projects;