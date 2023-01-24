<?php

function add_type_attribute($tag, $handle, $src) {
  // if not your script, do nothing and return original $tag
  if ( 'my-js' !== $handle && 'drag-js' !== $handle ) {
      return $tag;
  }
  // change the script tag by adding type="module" and return it.
  $tag = '<script id="'.$handle.'" type="module" src="' . esc_url( $src ) . '"></script>';
  return $tag;
}

function my_scripts_loader() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
  wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/style.css' );
  if( is_front_page() ) {
    wp_enqueue_script( 'my-js', get_stylesheet_directory_uri() . '/js/leatlas.js', array(),'', false );
    //wp_enqueue_script( 'drag-js', get_stylesheet_directory_uri() . '/js/drag.js', array(),'', true );
    add_filter('script_loader_tag', 'add_type_attribute' , 10, 3);
  }
}
add_action( 'wp_enqueue_scripts', 'my_scripts_loader' );

add_action( 'wp_footer', function () { ?>
  <script>
  
  function init() {
  var vidDefer = document.getElementsByTagName('iframe');
  for (var i=0; i<vidDefer.length; i++) {
  if(vidDefer[i].getAttribute('data-src')) {
  vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
  } } }
  window.onload = init;
  
  </script>
  <?php } );

?>