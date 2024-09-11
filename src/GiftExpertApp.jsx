import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

	const [ categories, setCategories ] = useState(['One Punch']);

	const onAddCAtegory = ( newCategory ) => {

		if ( categories.includes( newCategory )) return;

		setCategories([ newCategory, ...categories ]);
	}

	return (
		<>
			<h1>GiftExpertApp</h1>

			<AddCategory 
				onNewCategory={ onAddCAtegory  }
			/>

			{
				categories.map( category => (
					<GiftGrid
						key={ category }
						category={ category }
					/>
				)
			)}
		</>
	)
}
