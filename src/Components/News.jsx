import { useEffect, useState } from "react";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const News = () => {


    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    

    return (
        <div>
            {
                news.map(news => <>
                    <div className=" bg-base-100 border border-solid mb-5">
                        <div className="flex items-center justify-between bg-base-200 p-3">
                            <div className="flex gap-5 ">
                                <div>
                                    <img className="w-16 rounded-full" src={news.author.img}></img>
                                </div>
                                <div className="text-start">
                                    <p>{news.author.name}</p>
                                    <p>{news.author.published_date}</p>

                                </div>
                            </div>
                            <div className="flex gap-2">
                                <FaBookmark />
                                <FaShareAlt />

                            </div>
                        </div>
                        <div className="text-start text-2xl font-bold p-2">
                            <h2>{news.title}</h2>
                        </div>
                        <div className="mt-5 p-2 flex justify-center">
                            <figure><img src={news.image_url} /></figure>
                        </div>

                        <div className="text-start p-2">
                            <p className="p-3">{news.details.slice(0,250)} <br></br> <Link to={`/newsDetails/${news._id}`} className="text-blue-500 font-bold cursor-pointer p-">Read more..</Link></p>
                            <hr></hr>
                            <div className="flex justify-between">
                                <div className="flex p-3 items-center">
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>

                                    <p className="pl-3">{ news.rating.number}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaEye></FaEye>
                                    <p>{news.total_view}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default News;