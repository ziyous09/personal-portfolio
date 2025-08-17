export default function SkillCard ({ icon, title }){
  return (
    // Card is now more compact
    <div className="inline-block align-top w-64 md:w-72 rounded-xl overflow-hidden shadow-lg bg-white m-4 transform hover:-translate-y-2 transition-transform duration-300 flex-col text-center whitespace-normal">
      <div className="pt-8 pb-4">
        <img src={icon} alt={title + ' icon'} className="h-30 mx-auto" />
      </div>
      <div className="px-6 py-6">
        <div className="font-bold text-2xl text-gray-800">{title}</div>
      </div>
    </div>
  );
};
