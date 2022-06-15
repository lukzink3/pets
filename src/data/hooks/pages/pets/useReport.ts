import { useState, useEffect } from "react";
import { Report } from "../../../@types/Report";
import { ApiService } from "../../../services/ApiService";

export function useReport() {
  const [listReport, setListReport] = useState<Report[]>([]);

  useEffect(() => {
    ApiService.get("/adoptions").then((resposta) => {
      setListReport(resposta.data);
    });
  }, []);

  return {
    listReport,
  };
}
