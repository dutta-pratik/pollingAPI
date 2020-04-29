# pollingAPI


It is an API for Polling which helps a User to raise a Question, he/she or others can add option to that question and can vote on that options as well.<br>

# Index
<ul>
<li><a href="#1">How to Setup the Code into your System</a>
<li><a href="#2">Cloning the repository using VS Code</a>
<li><a href="#3">Tech Used in it</a>
<li><a href="#4">Detailed API's Functionality</a>
<li><a href="#5">Support</a>
</ul>

# How to Setup the Code into your System
<p id="1">
<ul>
<li> Fork this repository into your github account (create one if you don't have it yet)
<li> Clone it to your system (<code>git clone</code>)
<li> In the terminal run git remote add upstream <code>https://github.com/pratik-dutta/pollingAPI.git</code> (this is for taking a fresh update of the code anytime in the future)
</ul>

# Cloning the repository using VS Code
<p id="2">
<ul >
<li> Open VS Code.
<li> Go to <i>View > Terminal</i>.
<li> To clone the repo to your desktop, change the directory to desktop by running the command <code>cd desktop</code>.
<li> In the terminal, run <code>git clone https://github.com/pratik-dutta/pollingAPI.git</code>.
<li> A folder/directory should be created on your desktop.
<li> Open that folder in VS Code, go to <i>File > Open</i>.
<li> Run <code>npm install</code> to download dependencies of the project or you can download it by seeing dependencies in <code>package.json</code>.
<li> Now you're good to go!
</ul>

# Tech Used in it
<p id="3">
<strong>Stack</strong>: NodeJs, ExpressJs, MongoDB


# API's Functionality
<p id="4">
<br>
This API helps to performs the following function
<ul>
<li><a href="#a">Create a Question</a>
<li><a href="#b">Add Option to a Question</a>
 <li><a href="#p">Delete a Question</a>
<li><a href="#q">Add vote to an Option</a>
<li><a href="#r">Delete an Option</a>
<li><a href="#s">View a Question</a>
</ul>
<br>
Following is the description of all the function mentioned above.<br>
<ul>
<li>
 <p id="a">
<h3>Create a Question</h3>
Route: <code>/questions/create</code>
<br>
This route helps to create a question.
<li>
 <p id="b">
<h3>Add Option to a Question</h3>
Route: <code>/questions/:id/options/create</code>
<br>
This route helps to add different options to a particular question. The id of question is specified in the route params. The opions should be unique.
<li>
 <p  id="p">
<h3>Delete a Question</h3>
Route: <code>/questions/:id/delete</code>
<br>
This route helps to delete a question. It deletes the question only if it's option doesn't have votes in it.
<li>
 <p  id="q">
<h3>Add vote to an Option</h3>
Route: <code>/options/:id/add_vote</code>
<br>
This route helps to increment the vote of a particular option. The option id is specified in the route.
<li>
<p id="r">
<h3>Delete an Option</h3>
Route: <code>/options/:id/delete</code>
<br>
This route helps to delete an option of a question. It deletes the option only if there is no votes.
<li>
<p id="s"> 
<h3>View a Question</h3>
Route: <code>/questions/:id</code>
<br>
This route helps to view a question and all the option associated with it and the votes of option as well.
</ul>

# Support
<p id="5">
Feel free to contact at <i>pratikdutta.786(at)gmail(dot)com</i> for any query.

 



