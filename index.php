<?php
$index_file = './dist/index.html';
if ( file_exists( $index_file ) ) {
    echo file_get_contents( $index_file );
}
