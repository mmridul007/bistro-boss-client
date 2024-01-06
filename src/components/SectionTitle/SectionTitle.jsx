

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-3/12 text-center mb-8 mt-8 mx-auto">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h2 className="text-4xl border-y-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;