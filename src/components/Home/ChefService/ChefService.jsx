// const img = '/src/assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div  className="bg-[url('/src/assets/home/chef-service.jpg')] bg-cover md:h-[572px] px-4 py-8 md:px-24 md:py-36 my-12">
            <div className="bg-white text-center md:px-16 py-24">
                <h2 className="text-4xl uppercase">Bistro Boss</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat sint distinctio quia obcaecati nulla optio iste adipisci, facilis quos perferendis, minus temporibus eius? Doloremque et corrupti pariatur nostrum possimus esse!</p>
                {/* <img src={img}></img> */}
            </div>
        </div>
    );
};

export default ChefService;