import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import DataTable from "../componentes/moleculas/DataTable";
import Login from "../componentes/atomos/Login";

function Dashboard() {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <DataTable></DataTable>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;