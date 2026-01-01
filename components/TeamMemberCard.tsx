const TeamMemberCard = ({ name, title, imageUrl }) => {
    return (
        <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <img src={imageUrl} alt={name} className="w-40 h-48 object-cover rounded-t-2xl mb-2" />
            <h3 className="text-white text-lg font-semibold">{name}</h3>
            <p className="text-orange-500 text-sm">{title}</p>
        </div>
    );
};

export default TeamMemberCard;
