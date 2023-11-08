import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import Graficas from "../componentes/moleculas/Graficas";


function Dashboard() {
    return (
        <div>
            <Header></Header>
            <Graficas></Graficas>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;