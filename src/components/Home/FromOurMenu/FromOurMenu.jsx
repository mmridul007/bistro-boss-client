import SectionTitle from "../../SectionTitle/SectionTitle";

const img = '/src/assets/home/featured.jpg'

const FromOurMenu = () => {
    return (
            <div className="bg-[linear-gradient(to_right_bottom,black,rgba(16,71,52,0.8)),url('/src/assets/home/featured.jpg')] bg-cover">
            <div className="md:py-24">
            <SectionTitle
            subHeading={'Check it out'} heading={'Form Our Menu'} textColor={'text-white'}></SectionTitle>

            <div className="md:flex text-white items-center justify-center text-center md:text-start gap-6 md:px-32">
                <div>
                <img src={img}></img>
                </div>
                <div>
                    <p>March 20, 2024</p>
                    <h3 className="text-lg">Where Can I Get Some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam exercitationem cupiditate optio quod dolor, ut expedita dolorum soluta!</p>
                </div>
            </div>
            </div>
            
        </div>
        
    );
};

export default FromOurMenu;