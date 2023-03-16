import { useState, useEffect } from "react";
import { getSeriesById } from "@/utils";
import { Series } from "@/interfaces";

export const useSeries = (id: number) => {
  const [serie, setSerie] = useState<Series>();

  useEffect(() => {
    getSerie(id);
  }, [id]);

  const getSerie = async (id: number) => {
    const serie = await getSeriesById(id);

    setSerie(serie);
  };

  return {
    serie,
  };
};
