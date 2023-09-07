import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://citrusbug.com/storage/uploads/blog/advantages-of-hiring-a-full-stack-developer/skills-of-full-stack-developer.webp" },
    { url: "https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg" },
    { url: "https://www.spaceo.ca/wp-content/uploads/2021/05/what-is-full-stack-development.jpg" },
    { url: "https://www.classicinformatics.com/hubfs/full-stack%20developer.png" },
    { url: "https://www.masaischool.com/blog/content/images/2022/06/Full-stack-developer-vs-software-developer.png" },
];
const ImageSliding = () => {
    return (
        <div style={{ marginTop: "100px", marginLeft: "290px" }}>
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
}
export default ImageSliding;