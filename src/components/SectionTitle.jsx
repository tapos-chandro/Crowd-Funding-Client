

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center  py-10 space-y-2 max-w-3xl mx-auto">
            <h1 className="lg:text-2xl font-bold text-center text-xl">{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;