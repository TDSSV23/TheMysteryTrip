import Ancora from "../../components/ancora/ancora.jsx";
import Footer from "../../components/footer/footer.jsx";
import Nav from "../../components/nav/nav.jsx";
import Tela01 from "../../components/tela01/tela01.jsx";
import Tela02 from "../../components/tela02/tela02.jsx";
import Tela03 from "../../components/tela03/tela03.jsx";
import Tela04 from "../../components/tela04/tela04.jsx";
import Tela05 from "../../components/tela05/tela05.jsx";
import PopUp from "../../components//popup/popup.jsx"

function Dashboard() {
    return <>
        <Nav />
        <Tela01 page="home" />
        <Tela02 />
        <Tela03 />
        <Tela04 />
        <Tela05 />
        <Footer />
        <Ancora />
        <PopUp/>



    </>


}


export default Dashboard;   