import "./products.css"
// function ProductCard(props) {
//     return (
//         // <div className="card">
//         //     <img src={props.res.image} />
//         //     <p>{props.res.title}</p>
//         //     <p>{props.res.price}</p>
//         //     <p>{props.res.category}</p>
//         //     <hr />
//         // </div>
//         // <div className="card">
//         //     <img src={props.image} />
//         //     <p>{props.title}</p>
//         //     <p>{props.price}</p>
//         //     <p>{props.category}</p>
//         //     <hr />
//         // </div>
//     );
// };
function ProductCard({title,price,image,category}) {
    return (
        <div className="card">
            <img src={image} />
            <p>{title}</p>
            <p>{price}</p>
            <p>{category}</p>
            <hr />
        </div>
    );
};
export default ProductCard;