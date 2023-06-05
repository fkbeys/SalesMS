
import { SwipeRight } from '@mui/icons-material';
import { useState } from 'react'
import CustomButtonContained from '../../Components/UiComponents/CustomButtonContained';
import GenericModal from '../../Components/UiComponents/GenericModal';
import CategoryPage from '../Category/CategoryPage';
import { CategoryModel } from '../../Models/Course/CategoryModel';


interface model {
    afterSelection: Function
    buttonTitle: string
}

const CategorySelectPage = (model: model) => {
    const [viewF10PageState, setviewF10PageState] = useState(false);



    return (
        <div key="x"  >
            <CustomButtonContained color='dodgerblue' ikon={<SwipeRight />} onClick={() => { setviewF10PageState(true); }} text={model.buttonTitle} />
            <GenericModal Height={0} Width={90}
                content={<CategoryPage afterSelection={(x: CategoryModel) => { model.afterSelection(x); setviewF10PageState(false); }} />}
                onClose={(x: CategoryModel) => { setviewF10PageState(false); }}
                state={viewF10PageState}

            />

        </div>
    )
}

export default CategorySelectPage