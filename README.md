# A Simple Sliding Menu

A simple sliding menu used on the main [We Make Awesome Sh site](http://wemakeawesomesh.it). It uses webkit filters to blur out the content under the menu when active

## Installation instructions

### Include the css &amp; js files

      <!-- include jquery -->
      <script type="text/javascript"  src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

      <!-- include sliding-menu files -->
      <script type="text/javascript"  src="sliding-menu/js/sliding-menu.js"></script>
      <link   rel="stylesheet"        href="sliding-menu/css/sliding-menu.css"/>

### Insert the content into your html page

    <aside class='sliding-menu'>
      <a href='#' class='sliding-menu-button'>Open sliding menu</a>
      <nav class='sliding-menu-nav'>
        <ul>
          <li>
            <a href='' title=''>Link 1</a>
          </li>
          <!-- Insert more links here -->
        </ul>
      </nav>
      <div class='sliding-menu-hidden'>
        <!-- Insert your hidden content here -->
      </div>
    </aside>
    <div id='content'>
      <!-- Insert your content here -->
    </div>
