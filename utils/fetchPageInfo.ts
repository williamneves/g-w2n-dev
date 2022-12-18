import axios from 'axios';
import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
	const { data } = await axios.get(`http://localhost:3000/api/getPageInfo`);

	console.log('🚀 ~ file: fetchPageInfo.ts:7 ~ fetchPageInfo ~ data', data);
	// // check res for error
	// if (!res.ok) {
	// 	console.log(res.statusText);
	// }

	// const {data} = await res;
	const pageInfo: PageInfo = data.pageInfo;

	//   console.log("fetching", pageInfo);

	return pageInfo;
};
