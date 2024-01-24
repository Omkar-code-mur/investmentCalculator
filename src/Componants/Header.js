import logo from '../../src/assets/logo.png';
export default function Header(){
    return(
        <header id="header">
            <img src={logo} alt="" />
            <h1>Investment calculator</h1>
        </header>

    )
}