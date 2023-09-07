import randomColor from "randomcolor";
const RandomColour=()=>{
    return(
        <div>
            <button style={{width: "150px",height: "50px",marginTop: "280px"}} onClick={() => {
                let c = randomColor();
                document.body.style.backgroundColor=c;
            }}>Click me!</button>
        </div>
    )
};
export default RandomColour;