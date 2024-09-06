import { useEffect, useState } from "react";
import { convertCoordToNumber, getCookie } from "../jsx/utils";
import fetch from "unfetch";

export function useGraphqlQuery(start, variant) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const token = getCookie("csrftoken");

  useEffect(() => {
    setLoading(true);
    fetch("https://chessknight.pythonanywhere.com/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRFToken": token },
      body: JSON.stringify({
        query: `{ board(start:${convertCoordToNumber(start)}) }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.message || "Ошибка");
      })
      .finally(() => setLoading(false));
  }, [start, variant]);
  return { loading, error, data };
}
