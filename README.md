# edisonpresence
Intel Edison based open source telepresence sytem

1) First install the below modules :
	ejs
	Express
	galileo-io
	johnny-five
	socket-io
	easyrtc
   use "npm install module_name"

2) Clone the above repository on your edison board or download the repository and copy the content in the root directory.(So your root directory has folders: views, node_modules and files: rtc.js and cont.js)

3) To run the code enter the command "node rtc.js & node cont.js"

4) open browser and enter the ipaddress of edison board with ":8020" 

5) and on the client phone enter the ipaddress of edison board with ":8010"

