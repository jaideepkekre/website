import React from "react";
import InstagramEmbed from "react-instagram-embed";

function InstaView() {
  return (
    <div style={{}}>
      <InstagramEmbed
        url="https://www.instagram.com/p/B7xOrF9Jc_j/"
        maxWidth={400}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}

export default InstaView;
