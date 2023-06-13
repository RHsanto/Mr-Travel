import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import icon1 from "../../../images/icons-1.webp";
import icon2 from "../../../images/icons-2.webp";
import icon3 from "../../../images/icon-3.webp";
import icon4 from "../../../images/icons-4.webp";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { MagnifyingGlass } from "react-loader-spinner";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const BestOffer = () => {
  const { data: offersData } = useSWR(`https://mr-travel-server.onrender.com/offersInfo`, fetcher);

  const dataSlice = offersData?.slice(4, 8);

  if (!offersData)
    return (
      <>
        <h2 className="text-center title fw-bold">THE BEST OFFERS WITH ROOMS</h2>
        <div className="d-flex justify-content-center">
          <MagnifyingGlass
            visible={true}
            height="200"
            width="120"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      </>
    );
  return (
    <div className="offer-section ">
      <h2 className="text-center title fw-bold">THE BEST OFFERS WITH ROOMS</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-5 m-0">
          {dataSlice?.map(offer => (
            <div key={offer?._id} className="col-lg-6 ">
              <div className="row ">
                <div className="col-lg-6 offer-img">
                  <img className="border" src={offer?.img} alt="" />
                  <div className="subs-title">{offer?.hotelName}</div>
                </div>
                <div className="col-lg-6 ">
                  <div className="offer-info">
                    <div className="d-flex align-items-center">
                      <div className="price">
                        <h1 className="text-warning fw-bold">${offer?.price}</h1>
                        <div className="d-flex justify-content-around text-warning">
                          <li>
                            <AiTwotoneStar />
                          </li>
                          <li>
                            <AiTwotoneStar />
                          </li>
                          <li>
                            <AiTwotoneStar />
                          </li>
                          <li>
                            <AiTwotoneStar />
                          </li>
                          <li>
                            <AiOutlineStar />
                          </li>
                        </div>
                      </div>
                      <p className="ms-2">per night</p>
                    </div>
                    <p className="text-start py-3"> {offer?.description}</p>
                    <div className="offer-icons d-flex gap-4">
                      <li>
                        <img src={icon1} alt="" />
                      </li>
                      <li>
                        <img src={icon2} alt="" />
                      </li>
                      <li>
                        <img src={icon3} alt="" />
                      </li>
                      <li>
                        <img src={icon4} alt="" />
                      </li>
                    </div>
                    <Link to={`/offers/${offer?._id}`}>
                      {" "}
                      <button className="read">READ MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOffer;
