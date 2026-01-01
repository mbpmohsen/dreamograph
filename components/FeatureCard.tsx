const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-[#f5f1ed] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#d67b60] to-[#c86850] rounded-full flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard;
