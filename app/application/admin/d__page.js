import Image from "next/image";
import { Dashboard } from "../../Components/Dashboard/Dashboard";
import { TabControl } from "../../Components/TabControl/TabControl";
import Logo from "../../public/icons/autosyncsgi_logo.svg"
import AbsolutBank from "../../public/icons/absolutbank.svg"
import { NodesTab } from "../../Components/NodesTab/NodesTab";
import { Malha } from "../../Components/Malha/Malha";


const Header = () => {
    return <div className="admin-header">
        <Image src={Logo} alt="AutoSync SGI" width={30} height={30} />
        <div className="admin-icon-div">
            <h3>Admin</h3>
            <h4>Conta Demo</h4>
        </div>
    </div>
}

const Footer = () => {
    return <div className="admin-footer">
        <Image src={AbsolutBank} alt="Absoluto bank" width={200} height={250} />
    </div>
}

function Admin(){
    return <div className="editor">

    <TabControl 
    tabData={[
        { label: "x", content: Header(), type: true},
        { label: "Dashboard", content: Dashboard()},
        { label: "Nodes", content: NodesTab()},
        { label: "Malha", content: Malha()},
        { label: "x", content: Footer(), type: true},
    ]}
    direction={"V"}
    indexActive={3}    
    />
         
    </div>
}