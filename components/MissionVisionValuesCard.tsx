const MissionVisionValuesCard = ({ icon, title, description, bullets }) => {
    return (
        <div className="bg-[#F2EEEA] rounded-xl p-6 shadow-sm max-w-sm">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2">
                {bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-orange-500 mr-2">•</span>
                        {bullet}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionVisionValuesCard;
