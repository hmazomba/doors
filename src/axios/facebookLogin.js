import axios from 'axios';
import { useHistory } from 'react-router-dom';

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: 'yjQeUklCTHLelMMoSBVPQkwpquuUPU74aXIgy6jm',
			client_secret:
				'wMflXkVRT6hvnabynBcF3PxDSrULV4798jIfYN1oggYfvnzWeAXwUGcTNpLqsvpbVoCldqS5uqCUG38WTKZFI0LBUwRtKcuUgqELtYxgTVwBWk5zQq12ZiTPhiVAk5h4',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default facebookLogin;