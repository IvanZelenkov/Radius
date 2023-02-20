import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/constants";

export const useFetch = (url) => {
	const [responseData, setResponseData] = useState(null);
	const [infoLoaded, setInfoLoaded] = useState(false);

	useEffect(() => {
		(async function () {
			try {
				setInfoLoaded(true);
				const response = await axios.get(API_BASE_URL + url);
				setResponseData(response.data);
			} catch (error) {
				console.log(error)
			} finally {
				setInfoLoaded(true);
			}
		})();
	}, [url]);

	return { responseData, infoLoaded };
};