

// type cardProps = {
//     title: string,
//     description: string,
//     icon: string,
// }

// const Card = ({
//     title,
//     description,
//     icon
// }:cardProps) => {
//   return (
//     <div className="flex flex-col space-y-4 justify-between border bg-slate-300 text-gray-900 rounded-xl px-2 py-4 backdrop-blur-3xl lg:w-1/3 w-1/2 ">
//       <h3><span>{icon}</span>{title}</h3>
//       <p>{description}</p>
//     </div>
//   )
// }

// export default Card

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="max-w-xl w-full rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-10 shadow-2xl text-white">
      <div className="w-14 h-14 rounded-xl bg-pink-600/20 flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>

      <h3 className="text-3xl font-bold mb-4">{title}</h3>

      <p className="text-slate-300 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
};

export default Card;

