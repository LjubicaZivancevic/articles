import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { Form } from "semantic-ui-react";
import { doSearch } from "../../actions/articles.actions";

function Searchbar() {
	const dispatch = useDispatch();
	const searchValue = useRef();
	return (
		<>
			<Form>
				<Form.Field>
					<input
						placeholder="Search..."
						className="SearchBar"
						icon="search"
						ref={searchValue}
						onChange={() => dispatch(doSearch(searchValue.current.value))}
					/>
				</Form.Field>
			</Form>
		</>
	);
}

export default Searchbar;
