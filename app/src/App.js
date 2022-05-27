import React, {useEffect} from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
    const checkIfWalletIsConnected = async () => {
        try {
            const {solana} = window
            if (solana) {
                if (solana.isPhantom) {
                    console.log('Phantom wallet found!');
                    const response = await solana.connect({
                        onlyIfTrusted: true,
                    })
                    console.log('Connected with public key: ', response.publicKey.toString());
                }
            } else {
                alert('Go get phantom wallet');
            }
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const onload = async() => {
            await checkIfWalletIsConnected();
        }
        window.addEventListener('load', onload)
        return () => window.removeEventListener('load', onload)
    }, []);
    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                </div>
                <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo}/>
                    <a
                        className="footer-text"
                        href={TWITTER_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`built on @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default App;
