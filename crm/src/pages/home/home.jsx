import Ancora from "../../components/ancora/ancora.jsx";
import Footer from "../../components/footer/footer.jsx";
import Nav from "../../components/nav/nav.jsx";
import Tela01 from "../../components/tela01/tela01.jsx";
import Tela02 from "../../components/tela02/tela02.jsx";
import Tela03 from "../../components/tela03/tela03.jsx";
import Tela04 from "../../components/tela04/tela04.jsx";


function Dashboard() {
    return <>
        <Nav/>
        <Tela01 page="home" />
        <Tela02/>
        <Tela03/>
        <Tela04/>
        <Footer/>
        <Ancora/>
    </>
}

export default Dashboard;