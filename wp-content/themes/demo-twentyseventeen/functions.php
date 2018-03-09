<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

add_action( 'cmb2_admin_init', 'twentyseventeen_cmb2_settings' );
/**
 * Define the metabox and field configurations.
 */
function twentyseventeen_cmb2_settings() {

	$image_settings = new_cmb2_box( array(
		'id'            => 'image_settings',
		'title'         => __( 'Image Settings', 'twentyseventeen_child' ),
		'object_types'  => array( 'post' ), // Post type
		'context'       => 'side',
		'priority'      => 'low',
		'show_names'    => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // Keep the metabox closed by default
	) );

	$image_settings->add_field( array(
		'name'             => 'Homepage Image Size',
		'desc'             => 'Size to use if this post appears on the homepage',
		'id'               => '_mp_image_settings_homepage_image_size',
		'type'             => 'select',
		'show_option_none' => true,
		'default'          => 'large',
		'options'          => array(
			'feature_middle' => __( 'Medium', 'twentyseventeen_child' ),
			'none'   => __( 'Do not display image', 'twentyseventeen_child' ),
			'feature_large'     => __( 'Large', 'twentyseventeen_child' ),
		),
	) );

	$subtitle_settings = new_cmb2_box( array(
		'id'            => 'subtitle_settings',
		'title'         => __( 'Subtitle Settings', 'twentyseventeen_child' ),
		'object_types'  => array( 'post' ), // Post type
		'context'       => 'subtitles',
		'priority'      => 'high',
		'show_names'    => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		 'closed'     => true, // Keep the metabox closed by default
	) );

	/*'type'       => 'text',
	'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
	// 'sanitization_cb' => 'my_custom_sanitization', // custom sanitization callback parameter
	// 'escape_cb'       => 'my_custom_escaping',  // custom escaping callback parameter
	// 'on_front'        => false, // Optionally designate a field to wp-admin only
	// 'repeatable'      => true,*/

	$subtitle_settings->add_field( array(
		'name'             => 'Deck',
		'desc'             => '',
		'id'               => '_mp_subtitle_settings_deck',
		'type'             => 'text',
	) );

	$subtitle_settings->add_field( array(
		'name'             => 'Byline',
		'desc'             => '',
		'id'               => '_mp_subtitle_settings_byline',
		'type'             => 'text',
	) );

	/*$category_settings = new_cmb2_box( array(
		'id'               => 'category_settings',
		'title'            => __( 'Category Settings', 'minnpost_twentyseventeen' ),
		'object_types'     => array( 'term', ), // Post type
		'taxonomies'       => array( 'category' ),
		'new_term_section' => true,
		'priority' => 'high'
	) );

	$category_settings->add_field( array(
		'name'             => 'Deck',
		'desc'             => '',
		'id'               => '_mp_category_settings_deck',
		'type'             => 'text',
	) );

	$category_settings->add_field( array(
		'name'             => 'Byline',
		'desc'             => '',
		'id'               => '_mp_category_settings_byline',
		'type'             => 'text',
	) );*/

}
