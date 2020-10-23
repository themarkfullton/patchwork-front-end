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
        currentName: "Argyle",
    }

    changeHeader = () => {
        let randomNum;
        
        do {
            randomNum = Math.floor((Math.random() * 5) + 1);
        } while (randomNum === this.state.prevNum);


        switch (randomNum) {
            case 1:
                this.setState({
                    prevNum: randomNum,
                    currentHeader: Argyle,
                    currentName: "Argyle"
                });
                break;
            case 2:
                this.setState({
                    prevNum: randomNum,
                    currentHeader: Checkered,
                    currentName: "Checkered"
                });
                break;
            case 3:
                this.setState({
                    prevNum: randomNum,
                    currentHeader: Denim,
                    currentName: "Denim"
                });
                break;
            case 4:
                this.setState({
                    prevNum: randomNum,
                    currentHeader: Plaid,
                    currentName: "Plaid",
                });
                break;
            case 5:
                this.setState({
                    prevNum: randomNum,
                    currentHeader: Polkadot,
                    currentName: "PolkaDot",
                });
                break;
            default:
                this.setState({
                    prevNum: randomNum,
                    currentHeader: Argyle,
                    currentName: "Argyle",
                });
        }
    }
    
    render() {        
        return (
            <div className="headerWrapper">
                <div className="headerContent">
                    <div className="headerImage">
                        <p className="imageSpeech">We are <b>{this.state.currentName}</b>! Click us!</p>
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