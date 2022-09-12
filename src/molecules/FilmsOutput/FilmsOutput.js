import styles from "./FilmsOutput.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FilmsOutput() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getAllFilms = () => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => {
        setFilms(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllFilms();
  }, []);

  return (
    <div className={styles.filmsOutputContainer}>
      <div className={styles.filmsOutputText}>Films</div>

      {loading ? (
        "Loading...."
      ) : (
        <table className={styles.filmOutputTable}>
          <thead className={styles.filmsOutputThead}>
            <tr>
              <th className="py-6 px-4 ">
                <div>
                  <input
                    id="checkboxForAll"
                    type="checkbox"
                    className={styles.filmsInput}
                  />
                  <label id="checkboxForAll" />
                </div>
              </th>
              <th className={styles.filmsOutputTh}>Film Title</th>
              <th className={styles.filmsOutputTh}>Release Date</th>
              <th className={styles.filmsOutputTh}>Director</th>
              <th className={styles.filmsOutputTh}>Producer</th>
              <th className={styles.filmsOutputTh}>Episode ID</th>
              <th className={styles.filmsOutputTh}>Character</th>
            </tr>
          </thead>
          <tbody>
            {films.map((data, index) => {
              return (
                <tr
                  key={index}
                  className={styles.filmsOutputTr}
                  onClick={() => navigate("/OverviewDetails")}
                >
                  <td className="pl-[21px]  py-4 ">
                    <div>
                      <input
                        id="checkboxForAll"
                        type="checkbox"
                        className={styles.filmsInput}
                      />
                      <label id="checkboxForAll" />
                    </div>
                  </td>
                  <th className={styles.filmsOutputTh2}> {data.title} </th>
                  <th className={styles.filmsOutputTh2}>
                    {data.release_date}{" "}
                  </th>
                  <th className={styles.filmsOutputTh2}>{data.director} </th>
                  <th className={styles.filmsOutputTh2}>{data.producer} </th>
                  <th className={styles.filmsOutputTh2}>{data.episode_id} </th>
                  <th className={styles.filmsOutputTh2}>
                    {data.characters[0]}{" "}
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

export default FilmsOutput;
