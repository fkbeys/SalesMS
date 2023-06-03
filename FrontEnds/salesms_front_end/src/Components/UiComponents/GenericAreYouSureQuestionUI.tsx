
import GenericModal from './GenericModal';
import { Box, Button } from '@mui/material';
import YanyanaGetir from './YanyanaGetir';
import { Cancel, Check, Delete } from '@mui/icons-material';


interface model {
    modalState: boolean
    yesButtonSelected: Function
    NoButtonSelected: Function

}


const GenericAreYouSureQuestionUI = (model: model) => {
    return (

        <GenericModal Height={0} Width={0}
            content={
                <Box>
                    <h2> Əminsiz ?</h2>
                    <YanyanaGetir
                        compA={<Button variant="contained" color='error' endIcon={<Check />} onClick={async () => { model.yesButtonSelected(); }}>
                            Razıyam...
                        </Button>}

                        compB={
                            <Button variant="contained" color='info' endIcon={<Cancel />} onClick={() => { model.NoButtonSelected(); }} >
                                Razı deyiləm.
                            </Button>}
                        sizeA={0}
                        sizeB={0}
                        stil={{}}
                    />
                </Box >
            }
            onClose={() => { model.NoButtonSelected(); }}
            state={model.modalState}

        />
    )
}

export default GenericAreYouSureQuestionUI