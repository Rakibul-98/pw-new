/* eslint-disable react/prop-types */

import ReactFullpage from "@fullpage/react-fullpage";

export default function Skills() {

  const handleLeave2 = () => {
    alert("leaved");
  }
  
  const handleAfterLoad2 = () => {
    alert("Loaded");
  }

  return (
    <ReactFullpage
            onLeave={handleLeave2}
            afterLoad={handleAfterLoad2}
            render={() => (
                <div>
                  skills
                </div>
            )}
        />
  )
}
