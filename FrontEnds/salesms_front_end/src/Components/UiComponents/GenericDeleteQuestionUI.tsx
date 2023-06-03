
import GenericModal from './GenericModal';
import { Box, Button } from '@mui/material';
import YanyanaGetir from './YanyanaGetir';
import { Cancel, Delete } from '@mui/icons-material';


interface model {
    modalState: boolean
    yesButtonSelected: Function
    NoButtonSelected: Function
}


const GenericDeleteQuestionUI = (model: model) => {
    return (

        <GenericModal Height={0} Width={0}
            content={
                <Box>
                    <h2>  Qeydi silmək istəyirsiniz?</h2>
                    < h3 > Silinmə əməliyyatından sonra qeydləri geri gətirmək mümkün deyil!</h3 >
                    <YanyanaGetir
                        compA={<Button variant="contained" color='error' endIcon={<Delete />} onClick={async () => { model.yesButtonSelected(); }}>
                            Silinsin. Razıyam...
                        </Button>}

                        compB={
                            <Button variant="contained" color='info' endIcon={<Cancel />} onClick={() => { model.NoButtonSelected(); }} >
                                Razı deyiləm. Silinməsin.
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

export default GenericDeleteQuestionUI