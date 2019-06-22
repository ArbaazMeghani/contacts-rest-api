---


---

<h1 id="contacts-list---simple-rest-api">Contacts list - Simple REST API</h1>
<p>This is a simple contacts list REST API.<br>
Built using Node/Express and MongoDB</p>
<p>Deployed to Heroku: <a href="https://contacts-rest-api.herokuapp.com/">https://contacts-rest-api.herokuapp.com</a></p>
<h1 id="end-points">End Points</h1>
<p>All end points are prefixed with <code>https://contacts-rest-api.herokuapp.com/api/v1</code></p>
<p>Get All Contacts</p>
<pre><code>/contacts
</code></pre>
<p>Get a Contact by Phone Number</p>
<pre><code>/contacts/:number
</code></pre>
<h1 id="parameters">Parameters</h1>
<p>Currently there are 2 support parameters.</p>
<pre><code>/contacts?firstname=&lt;first_name&gt;&amp;lastname=&lt;last_name&gt;
</code></pre>
