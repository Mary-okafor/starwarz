import axios from "axios";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import styles from "./SpeciesOutput.module.css";
import { useNavigate } from "react-router-dom";

function SpeciesOutput() {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const getSpecies = () => {
    axios
      .get("https://swapi.dev/api/species")
      .then((res) => {
        setSpecies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSpecies();
  }, []);

  return (
    <div className={styles.speciesContainer}>
      <div className={styles.speciesText}>Species</div>

      {loading ? (
        "Loading....."
      ) : (
        <table className={styles.speciesTable}>
          <thead className={styles.speciesThead}>
            <tr>
              <th className="py-6 px-4 ">
                <div>
                  <input
                    id="checkboxForAll"
                    type="checkbox"
                    className={styles.speciesInput}
                  />
                  <label id="checkboxForAll" />
                </div>
              </th>
              <th className={styles.speciesOutputTr}>Name</th>
              <th className={styles.speciesOutputTr}>Classification</th>
              <th className={styles.speciesOutputTr}>Eye Color</th>
              <th className={styles.speciesOutputTr}>Hair Color</th>
              <th className={styles.speciesOutputTr}>Height</th>
              <th className={styles.speciesOutputTr}>Created</th>
            </tr>
          </thead>
          <tbody>
            {species.map((data, index) => {
              return (
                <tr key={index} className={styles.speciesTr} onClick={() => navigate('/SpeciesDetails')}>
                  <td className="pl-[21px]  py-4 ">
                    <div>
                      <input
                        id="checkboxForAll"
                        type="checkbox"
                        className={styles.speciesInput}
                      />
                      <label id="checkboxForAll" />
                    </div>
                  </td>
                  <th className={styles.speciesOutputTr2}> {data.name} </th>
                  <th className={styles.speciesOutputTr2}>
                    {data.classification}{" "}
                  </th>
                  <th className={styles.speciesOutputTr2}>
                    {data.eye_colors}{" "}
                  </th>
                  <th className={styles.speciesOutputTr2}>
                    {data.hair_colors}{" "}
                  </th>
                  <th className={styles.speciesOutputTr2}>
                    {data.average_height} CM{" "}
                  </th>
                  <th className={styles.speciesOutputTr2}>
                    <Moment format="D/MM/YY">{data.created}</Moment>
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

export default SpeciesOutput;
