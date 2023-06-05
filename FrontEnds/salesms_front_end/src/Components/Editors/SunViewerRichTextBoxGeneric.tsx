import { Height } from '@mui/icons-material';
import { Alert } from '@mui/material';

import React, { useEffect, useState } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File



interface model {
	text: string
	autoFocus: boolean
	height: number
}

const SunViewerRichTextBoxGeneric = (model: model) => {

	const [textHeight, settextHeight] = useState(100);

	return (

		<SunEditor

			onResizeEditor={(x) => {
				console.log(x);
			}}
			lang="en"
			hideToolbar={true}
			readOnly={true}
			height='auto'
			autoFocus={false}
			setContents={model.text}
			disable={true}
			showController={() => { }}
		/>



	)
}

// 

export default SunViewerRichTextBoxGeneric