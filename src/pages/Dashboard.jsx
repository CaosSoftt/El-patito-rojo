import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import DataTable from "../componentes/moleculas/DataTable";
import Login from "../componentes/atomos/Login";
import Graficas from "../componentes/moleculas/Graficas";


function Dashboard() {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <Graficas></Graficas>
            <DataTable></DataTable>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;