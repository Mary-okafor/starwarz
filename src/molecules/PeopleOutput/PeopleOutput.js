import axios from "axios";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import styles from "./PeopleOutput.module.css";
import { useNavigate} from "react-router-dom";

function PeopleOutput() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const getPeople = () => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setPeople(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className={styles.peopleContainer}>
      <div className={styles.peopleText}>People</div>

      {loading ? (
        "Loading....."
      ) : (
        <table className={styles.peopleTable}>
          <thead className={styles.peopleThead}>
            <tr>
              <th className="py-6">
                <div>
                  <input
                    id="checkboxForAll"
                    type="checkbox"
                    className={styles.peopleInput}
                  />
                  <label id="checkboxForAll" />
                </div>
              </th>
              <th className={styles.peopleOutputTh}>Name</th>
              <th className={styles.peopleOutputTh}>Birth Year</th>
              <th className={styles.peopleOutputTh}>Gender</th>
              <th className={styles.peopleOutputTh}>Hair Color</th>
              <th className={styles.peopleOutputTh}>Height</th>
              <th className={styles.peopleOutputTh}>Created</th>
            </tr>
          </thead>
          <tbody>
            {people.map((data, index) => {
              return (
                <tr key={index} className={styles.peopleTr} onClick={() => navigate('/PeopleDetails')}>
                  <td className="pl-[26px]  py-4 ">
                    <div>
                      <input
                        id="checkboxForAll"
                        type="checkbox"
                        className={styles.peopleInput}
                      />
                      <label id="checkboxForAll" />
                    </div>
                  </td>
                  <th className={styles.peopleOutputTh2}> {data.name} </th>
                  <th className={styles.peopleOutputTh2}>{data.birth_year} </th>
                  <th className={styles.peopleOutputTh2}>{data.gender} </th>
                  <th className={styles.peopleOutputTh2}>{data.hair_color} </th>
                  <th className={styles.peopleOutputTh2}>{data.height} CM </th>
                  <th className={styles.peopleOutputTh2}>
                    <Moment format="D/MM/YY">{data.created}</Moment>{" "}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PeopleOutput;
