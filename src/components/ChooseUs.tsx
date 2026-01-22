
// // const anotherVideoLink = 'https://www.pexels.com/download/video/4944814/';

// const cardItems = [
//     {
//      title:'Adaptability',
//      description:'scbjvf ffhiwfih fefuhhdgw fefug',
//      icon: '>'
//     },
//     {
//         title:'Build Stronger',
//         description:'Helps you to build stroongrer verison of you that surpasses everyone',
//         icon: '>'
//     },
//     {
//         title:'Build Stronger',
//         description:'Helps you to build stroongrer verison of you that surpasses everyone',
//         icon: '>'
//     },
// ]

// import Card from "./ui/Card"

// const ChooseUs = () => {
//   return (
//     <section className="relative w-full min-h-[300vh]">
//         {/* sticky Video */}
//         <div className="sticky top-0 h-screen w-screen overflow-hidden">

//             {/* video */}
//             <video
//             autoPlay
//             loop
//             muted
//             className="w-full h-full object-cover lg:hidden">
//                     <source  src="https://www.pexels.com/download/video/4944392/" type="video/mp4"/>
//             </video>

//             <video
//             autoPlay
//             loop
//             muted
//             className="hidden lg:block w-full h-full object-cover overflow-hidden">
//                     <source  src="https://www.pexels.com/download/video/4945115/" type="video/mp4"/>
//             </video>
//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black/50"></div>
//         </div>
//         {/* content  */}
//         <div className="relative z-10">
//             {cardItems.map((item, index) => (
//               <div key={index} className="min-h-screen flex justify-center items-center"> 
//               <Card title={item.title} description={item.description} icon={item.icon}/>

//               </div>  
//             ))}
//             {/* first screen
//             <div className="min-h-screen flex justify-center items-center"> */}
//                {/* <Card title="Adaptability" description="adaptable to work lore adhfhufdfv gfeihdihf fefiheiehgv egihg scijhgef sgeho" icon="!"/>

//             </div> */}
//             {/* slide 2 */}
//             {/* <div className="min-h-screen flex justify-center items-center">
//                 slide 2 */}

//             {/* </div>
//             {/* slide 3; */}
//             {/* <div className="min-h-screen flex justify-center items-center">
//                 slide 3

//             </div>  */}

//         </div>
//     </section>
//   )
// }

// export default ChooseUs


const cardItems = [
    {
      title: "Adaptability",
      description:
        "Programs that evolve with your body and goals — from beginner to athlete, we grow with you.",
      icon: "⚡",
    },
    {
      title: "Build Stronger",
      description:
        "Scientifically designed workouts that help you build real strength, lean muscle, and confidence.",
      icon: "🏋️",
    },
    {
      title: "Elite Coaching",
      description:
        "Train with certified professionals who guide, correct, and push you beyond your limits safely.",
      icon: "🎯",
    },
  ];
  
  import Card from "./ui/Card";
  
  const ChooseUs = () => {
    return (
      <section className="relative w-full min-h-[300vh]
      ">
       
        {/* Sticky Video Background */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover lg:hidden"
          >
            <source
              src="https://www.pexels.com/download/video/4944392/"
              type="video/mp4"
            />
          </video>
  
          {/* Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden lg:block w-full h-full object-cover"
          >
            <source
              src="https://www.pexels.com/download/video/4945115/"
              type="video/mp4"
            />
          </video>
  
          {/* Gradient + Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        
  
        {/* Scrolling Content */}
        <div className="relative z-10">
          {/* Section Intro Screen */}
          <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Why <span className="text-pink-600">Choose Us</span>
            </h2>
            <p className="mt-6 max-w-2xl text-slate-300 text-lg">
              We’re not just a gym. We’re your transformation partner.
            </p>
          </div>
  
          {/* Feature Cards */}
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="min-h-screen flex justify-center items-center px-6"
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
  
          {/* Closing Screen */}
          <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Your Body. Your Rules. Your Gym.
            </h3>
            <p className="mt-4 text-slate-300 max-w-xl">
              Start your transformation today with a gym that actually cares
              about your progress.
            </p>
  
            <button className="mt-8 px-8 py-4 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-500 transition shadow-lg">
              Join Now
            </button>
          </div>
          
        </div>
      </section>
    );
  };
  
  export default ChooseUs;
  
