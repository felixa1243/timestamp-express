<strong>This documentation is under construction </strong>
<strong>API REFERENCE</strong>
<br>
<p style="text-transform:lowercase;">WELCOME TO FCC TIMESTAMP, THIS SERVICE WILL PROVIDE YOU A TIMESTAMP STRING FOR YOUR DESIRED USAGE. </p><br>
<strong>
Feature
</strong>
<ul>
	<li><strong>Current date timestamp</strong> <br>
	This will create current date and time timestamp, with unix value,utc and GMT time.
</li>
	<li>
	<strong>Tomorrow timestamp</strong> <br>
	This will create tomorrow date and time timestamp, will return unix value,utc and gmt time.
	</li>
	<li>
	<strong>Wayback machine</strong> <br>
	Turn back to the past time, will return unix value,utc and gmt time.
	</li>
</ul>
<br>
<strong>
INDEX
</strong>
<ul>
<li><a href="#current" style="color:black;">Getting current date and time time stamp</a> </li>
</ul>
<br>
By using this, you are agree with our <strong><em>terms and service.</em>
</strong>
<br>
<strong> </strong>
<br>
<strong><p id="current">Getting current date&amp;time </p></strong>
<textarea style="padding:.5em;background:#fcfcfc;" row="50" disabled>
url/api/
</textarea>
<br>
example usage: <br>
http://localhost/api/
<br>
example output: <br>
<textarea>
{
  unix:574674767,
  utc:day,lorem ipsum,lorem ipsun, dolor eutas
}
</textarea>
<br>
<strong>Getting timestamp by timestring</strong> <br>
<textarea disabled>
url/api/yyyy-mm-dd
</textarea>
<br>
Example usage:
<br>
http://localhost/api/2022-06-05