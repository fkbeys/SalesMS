import { Height } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File



interface model {
	text: string
	setText: Function
	autoFocus: boolean
	height: number
}

const SunEditorRichTextBoxGeneric = (model: model) => {

	let btnList = [...buttonList.formatting];
	let btn2 = [...buttonList.basic];
	btn2.forEach(element => {
		btnList.push(element);
	});


	const [input, setInput] = useState("");




	return (

		<SunEditor

			lang="en"
			setContents={model.text}
			onChange={(x) => { model.setText(x) }}
			setOptions={{ buttonList: btnList }}
			height='auto'
		/>

	)
}

// 

export default SunEditorRichTextBoxGeneric