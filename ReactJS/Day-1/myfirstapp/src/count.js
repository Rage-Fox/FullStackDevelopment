function Count(){
    const getCount=(n)=>{
        alert(n);
    };
    let name="Harsha";
    return(
        <div style={{marginTop:"30px"}}>
            <button onClick={()=>getCount(name)}>Click This!</button>
        </div>
    )
}
export default Count;