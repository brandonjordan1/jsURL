jsURL
=====

Finally, a quick easy way to get url variables with JavaScript.

Installation
=====

Download jsURL and put this in the &lt;head&gt; of your code:

&lt;script type="text/javascript" src="path/to/jsURL.js"&gt;&lt;/script&gt;

Usage
=====

To get the value of a URL parameter/variable use <pre>getValue("key")</pre>

Key meaning the value of the parameter/variable.

Example Usage
=====

<b>Our Example URL:</b> mywebsite.com/page.html?keyvalue=valueofkey

<b>Our JavaScript Code:</b> var urlparam = getValue("keyvalue");

<b>Value of var:</b> valueofkey

The script would then get the value of the varible in the address and return the value <i>"valueofkey"</i>
