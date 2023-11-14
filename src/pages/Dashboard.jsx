import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import Graficas from "../componentes/moleculas/Graficas";
import Barra from "../componentes/moleculas/Barra";
import Line from "../componentes/moleculas/Line";


function Dashboard() {
    return (
        <div>
            <Header></Header>
            <Graficas></Graficas>
            <Barra></Barra>
            <Line></Line>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;