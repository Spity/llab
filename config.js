if (typeof llab === 'undefined') {
    llab = {};
    llab.paths = {};
    llab.paths.css_files = [];
    llab.loaded = {};
}

/*
 ***********************
 ******** CONFIG *******
 ***********************
 */

// NOTE!!
// You also need to specify the direct path to this file, in loader.js


// if the website isn't at the root of the server, add the path here.
// starting / means this is an absolute link, yo
//llab.rootURL = "/llab-website-test/";
llab.rootURL = "/bjc-r/";


// change if llab scripts are installed in a different path *within* rootURL.
llab.install_directory = "llab/";

// absolute path to llab files -- don't change this
llab.llab_path = llab.rootURL + llab.install_directory;

// reference your custom CSS files, from within llab install directory.
//  Multiple CSS files is fine, include a separate push for each
llab.paths.css_files.push('css/bootstrap.min.css');
llab.paths.css_files.push('css/bootstrap-theme.min.css');
llab.paths.css_files.push("css/default.css");
// llab.paths.css_files.push("css/unused.css");



// courses -- path to folder containing courses.
//  a course 'name', when prepended with this, will be an absolute link
llab.courses_path = llab.rootURL + "course/";

// TOPICS (old style) stuff.
//  place where you put (oldstyle) X.topic files, used when building menus on curriculum pages
llab.topics_path = llab.rootURL + "topic/";
//  used when referring to a topic page -- you could change this location
llab.topic_launch_page = llab.llab_path + "html/topic.html";
//  template used when building a topic (in topic.js)
llab.empty_topic_page_path = llab.llab_path + "html/empty-topic-page.html";


// google analytics tokens
llab.GAuse = true;
llab.GACode = 'UA-47210910-3';
llab.GAurl = 'berkeley.edu';




/*
 ******************************
 ********* END CONFIG *********
 ******************************
 */

llab.loaded['config']=true;