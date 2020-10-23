import React from "react";
import Argyle from "./banners/argyle.png";
import Checkered from "./banners/checkered.png";
import Denim from "./banners/denim.png";
import Plaid from "./banners/plaid.png";
import Polkadot from "./banners/polkadot.png";


class Header extends React.Component {
    state = {
        prevNum: 0,
        currentHeader: Argyle,
    }

    changeHeader = () => {
        let randomNum;
        
        do {
            randomNum = Math.floor((Math.random() * 5) + 1);
        } while (randomNum === this.state.prevNum);


        switch (randomNum) {
            case 1:
                this.setState({
                    currentHeader: Argyle,
                });
                break;
            case 2:
                this.setState({
                    currentHeader: Checkered,
                });
                break;
            case 3:
                this.setState({
                    currentHeader: Denim,
                });
                break;
            case 4:
                this.setState({
                    currentHeader: Plaid,
                });
                break;
            case 5:
                this.setState({
                    currentHeader: Polkadot,
                });
                break;
            default:
                this.setState({
                    currentHeader: Argyle
                });
                break;
        }
    }
    
    render() {        
        return (
            <div className="headerWrapper">
                <div className="headerContent">
                    <div className="headerImage">
                        <img src={this.state.currentHeader} className="headerImageImage" onClick={this.changeHeader} />
                    </div>
                    <div className="headerTitle">
                        <h1>Patchwork</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;