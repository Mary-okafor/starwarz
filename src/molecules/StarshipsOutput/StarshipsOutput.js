import styles from "./StarshipsOutput.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StarshipsOutput() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getAllStarships = () => {
    axios
      .get("https://swapi.dev/api/starships")
      .then((res) => {
        setStarships(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllStarships();
  }, []);

  return (
    <div className={styles.starshipsOutputContainer}>
      <div className={styles.starshipsOutputText}>Starships</div>

      {loading  ? (
        "Loading......"
      ) : (
        <table className={styles.starshipsOutputTable}>
          <thead className={styles.starshipsOutputThead}>
            <tr>
              <th className="py-6 px-4 ">
                <div>
                  <input
                    id="checkboxForAll"
                    type="checkbox"
                    className={styles.starshipsInput}
                  />
                  <label id="checkboxForAll" />
                </div>
              </th>
              <th className={styles.starshipTh2}>Name</th>
              <th className={styles.starshipTh2}>Model</th>
              <th className={styles.starshipTh2}>Class</th>
              <th className={styles.starshipTh2}>Passenger</th>
              <th className={styles.starshipTh2}>Length</th>
              <th className={styles.starshipTh2}>Character</th>
            </tr>
          </thead>
          <tbody>
            {starships.map((data, index) => {
              return (
                <tr key={index} className={styles.starshipTr} onClick={() => navigate('/StarshipsDetails')}>
                  <td className="pl-[21px]  py-4 ">
                    <div>
                      <input
                        id="checkboxForAll"
                        type="checkbox"
                        className={styles.starshipsInput}
                      />
                      <label id="checkboxForAll" />
                    </div>
                  </td>
                  <th className={styles.starshipsTh}> {data.name} </th>
                  <th className={styles.starshipsTh}>{data.model} </th>
                  <th className={styles.starshipsTh}>{data.starship_class} </th>
                  <th className={styles.starshipsTh}>{data.passengers} </th>
                  <th className={styles.starshipsTh}>{data.length} Meters </th>
                  <th className={styles.starshipsTh}>{data.films[0]} </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StarshipsOutput;
