

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} className="w-[100px]" alt="" />
            <div className="">
            <h2 className="font-semibold text-md uppercase">{name}----------</h2>
            <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;