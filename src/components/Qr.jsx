import React, {useState} from "react";
import QrCode from "react-qr-code";
import Button from "./Button";
const Qr = () => {
  const [channelId, setChannelId] = useState();
  const [socketURL, setSocketURL] = useState();
  const [socket, setSocket] = useState();
  const [isConnected, setIsConnected] = useState(false);

  const poppulateURL = () => {
    const randomInteger = Math.floor(1000000000 + Math.random() * 9000000000);
    setChannelId(randomInteger);
    const wsEndpoint = "wss://localhost:8181/";
    // const wsEndpoint = "wss://localhost:8181/";
    const wsURL = wsEndpoint + randomInteger + "/";
    setSocketURL(
      `wc:${JSON.stringify({
        domain: "http://localhost:5500/",
        socket: wsURL
      })}`
    );
    connectSocket(wsURL);
  };

  const connectSocket = async wsURL => {
    const chatSocket = new WebSocket(wsURL);
    console.log(chatSocket);

    chatSocket.onmessage = function (e) {
      console.log("message received");
      const data = JSON.parse(e.data);
      console.log(data);
      if (data.message.message === "accept") {
        console.log(data);
        // useWallet.handleMobileConnect(data.message.accountId);
      } else if (data.message.message === "reject") {
        alert("Wallet connection denied!");
        chatSocket.close();
      }
    };

    chatSocket.onclose = function (e) {
      //   setIsConnected(false);
      console.log(e);
      console.log("Chat socket closed unexpectedly");
      // Reconnect logic can be added here if necessary
    };

    chatSocket.onopen = function (e) {
      setSocket(chatSocket);
      setIsConnected(true);
    };
  };
  return (
    <div>
      <Button
        action={poppulateURL}
        name='Connect Socket'
      />
      {isConnected && <QrCode value={socketURL} />}
    </div>
  );
};

export default Qr;
