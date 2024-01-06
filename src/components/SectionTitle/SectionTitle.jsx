const SectionTitle = ({ subHeading, heading, textColor }) => {
  return (
    <div className="md:w-3/12 text-center mb-8 mt-8 mx-auto">
      <p className="text-yellow-600 mb-4">---{subHeading}---</p>
      <h2 className={`text-4xl border-y-4 ${textColor}`}>{heading}</h2>
    </div>
  );
};

export default SectionTitle;
