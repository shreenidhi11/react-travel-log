import { GoLocation } from "@react-icons/all-files/go/GoLocation";

interface Props {
  coverImg: string;
  country: string;
  location: string;
  fromdate: number;
  frommon: string;
  todate: number;
  tomon: string;
  year: number;
  desc: string;
}
const Card = ({
  coverImg,
  country,
  location,
  fromdate,
  frommon,
  todate,
  tomon,
  year,
  desc,
}: Props) => {
  return (
    <section className="card">
      {/* <img src={`../assets/${coverImg}`} /> */}
      <img src={coverImg}/>
      <div className="details">
        <div className="country_icon">
          <h3 className="country">{country}</h3>
          <span className="locIcon">
            <GoLocation />
          </span>
        </div>
        <h1 className="title">{location}</h1>
        <hr />
        <div className="duration">
          <h3>
            {fromdate} {frommon}, {year} - {todate} {tomon}, {year}{" "}
          </h3>
        </div>
        <p className="info">{desc}</p>
      </div>
    </section>
  );
};

export default Card;
