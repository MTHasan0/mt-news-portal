import Marquee from "react-fast-marquee";

const HeadingNews = () => {
    return (
        <div>

            <div className="flex p-2 items-center bg-slate-700 rounded-md">
                <button className="btn bg-pink-600 text-white hover:text-black">Latest</button>
                <Marquee pauseOnHover={true} speed={150}>
                    <p className="text-lg font-bold text-red-600">I can be a React component, multiple React components, or just some text.</p>
                </Marquee>
            </div>

        </div>
    );
};

export default HeadingNews;