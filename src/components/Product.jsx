import { useParams,useNavigate } from "react-router-dom";

function Product() {
	let { categoryId } = useParams();
	let navigate = useNavigate()
	const back = ()=>{
		navigate(`/`)
	}
	return (
		<div>
			<h3>Id selected {categoryId} </h3>
			<button onClick={back}>Back</button>
		</div>
	);
}
export default Product;