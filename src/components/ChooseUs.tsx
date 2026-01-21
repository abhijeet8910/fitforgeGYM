

const ChooseUs = () => {
  return (
    <section className="relative w-full min-h-[300vh]">
        {/* sticky Video */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden">

            {/* video */}
            <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover lg:hidden">
                    <source  src="https://www.pexels.com/download/video/4944392/" type="video/mp4"/>
            </video>

            <video
            autoPlay
            loop
            muted
            className="hidden lg:block w-full h-full object-cover overflow-hidden">
                    <source  src="https://www.pexels.com/download/video/4945115/" type="video/mp4"/>
            </video>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* content  */}
        <div className="relative z-10">
            {/* first screen */}
            <div className="min-h-screen flex justify-center items-center">
                slide 1

            </div>
            {/* slide 2 */}
            <div className="min-h-screen flex justify-center items-center">
                slide 2

            </div>
            {/* slide 3; */}
            <div className="min-h-screen flex justify-center items-center">
                slide 3

            </div>

        </div>
    </section>
  )
}

export default ChooseUs
