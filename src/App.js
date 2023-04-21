import QRCode from "qrcode";
import { useEffect, useState } from "react";

const App = ({ text }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setSrc(data);
    });
  }, []);

  return <div>
    <img src={src} />
  </div>;
};

export default App;

//this is to generate a qrcode from something 
//within the index.js in the app text!