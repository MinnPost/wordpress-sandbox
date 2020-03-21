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

	$user_settings = new_cmb2_box(
		array(
			'id'           => 'user_settings',
			'title'        => __( 'User Settings', 'twentyseventeen_child' ),
			'object_types' => array( 'user' ), // Post type
			'context'      => 'normal',
			'priority'     => 'low',
			'show_names'   => true, // Show field names on the left
			// 'cmb_styles' => false, // false to disable the CMB stylesheet
			// 'closed'     => true, // Keep the metabox closed by default
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Annual Recurring Amount',
			'desc' => '',
			'id'   => '_annual_recurring_amount',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Coming Year Contributions',
			'desc' => '',
			'id'   => '_coming_year_contributions',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Prior Year Contributions',
			'desc' => '',
			'id'   => '_prior_year_contributions',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Sustaining Member',
			'id'   => '_sustaining_member',
			'type' => 'checkbox',
			'desc' => '',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Next Partner Claim Date',
			'id'   => '_next_partner_claim_date',
			'type' => 'text_date',
			'desc' => '',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Exclude from current campaign',
			'id'   => '_exclude_from_current_campaign',
			'type' => 'checkbox',
			'desc' => '',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'City',
			'desc' => '',
			'id'   => '_city',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'State',
			'desc' => '',
			'id'   => '_state',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Zip Code',
			'desc' => '',
			'id'   => '_zip_code',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Street Address',
			'desc' => '',
			'id'   => '_street_address',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Membership Level',
			'desc' => '',
			'id'   => '_membership_level',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Full Name',
			'desc' => '',
			'id'   => '_full_name',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Test Last Name',
			'desc' => '',
			'id'   => '_test_last_name',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Stripe Customer ID',
			'desc' => '',
			'id'   => '_stripe_customer_id',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Reading Preferences',
			'desc' => '',
			'id'   => '_reading_preferences',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Salesforce Contact ID',
			'desc' => '',
			'id'   => '_salesforce_contact_id',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Temporary Field',
			'desc' => '',
			'id'   => '_temporary_field',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Consolidated Emails',
			'desc' => '',
			'id'   => '_consolidated_emails',
			'type' => 'text',
		)
	);
	$user_settings->add_field(
		array(
			'name' => 'Temporary Field To Be Deleted',
			'desc' => '',
			'id'   => '_temp_field_to_be_deleted',
			'type' => 'text',
		)
	);

	$post_settings = new_cmb2_box(
		array(
			'id'           => 'Post',
			'title'        => __( 'Post Settings', 'twentyseventeen_child' ),
			'object_types' => array( 'post' ), // Post type
			'context'      => 'normal',
			'priority'     => 'low',
			'show_names'   => true, // Show field names on the left
			// 'cmb_styles' => false, // false to disable the CMB stylesheet
			// 'closed'     => true, // Keep the metabox closed by default
		)
	);
	$post_settings->add_field(
		array(
			'name' => 'Close Date',
			'id'   => '_close_date',
			'type' => 'text_date',
			'desc' => '',
		)
	);
	$post_settings->add_field(
		array(
			'name'             => 'Stage',
			'desc'             => '',
			'id'               => '_stage',
			'type'             => 'select',
			'show_option_none' => true,
			'options'          => array(
				'Prospecting' => __( 'Prospecting', 'twentyseventeen_child' ),
				'Cultivating' => __( 'Cultivating', 'twentyseventeen_child' ),
				'Solicited'   => __( 'Solicited', 'twentyseventeen_child' ),
				'Pledged'     => __( 'Pledged', 'twentyseventeen_child' ),
				'Closed Won'  => __( 'Closed Won', 'twentyseventeen_child' ),
				'Closed Lost' => __( 'Closed Lost', 'twentyseventeen_child' ),
				'Refunded'    => __( 'Refunded', 'twentyseventeen_child' ),
			),
		)
	);
	$post_settings->add_field(
		array(
			'name'             => 'Type',
			'desc'             => '',
			'id'               => '_type',
			'type'             => 'select',
			'show_option_none' => false,
			'default'          => 'Donation',
			'options'          => array(
				'Donation'    => __( 'Donation', 'twentyseventeen_child' ),
				'Grant'       => __( 'Grant', 'twentyseventeen_child' ),
				'Sponsorship' => __( 'Sponsorship', 'twentyseventeen_child' ),
				'Sales'       => __( 'Sales', 'twentyseventeen_child' ),
			),
		)
	);
	$post_settings->add_field(
		array(
			'name'             => 'Subtype',
			'desc'             => '',
			'id'               => '_subtype',
			'type'             => 'select',
			'show_option_none' => true,
			'options'          => array(
				'Donation: Individual'              => __( 'Donation: Individual', 'twentyseventeen_child' ),
				'Donation: Organization'            => __( 'Donation: Organization', 'twentyseventeen_child' ),
				'Donation: In-kind'                 => __( 'Donation: In-kind', 'twentyseventeen_child' ),
				'Grant: Grant'                      => __( 'Grant: Grant', 'twentyseventeen_child' ),
				'Sponsorship: Event (individual)'   => __( 'Sponsorship: Event (individual)', 'twentyseventeen_child' ),
				'Sponsorship: Event (organization)' => __( 'Sponsorship: Event (organization)', 'twentyseventeen_child' ),
				'Sales: Advertising'                => __( 'Sales: Advertising', 'twentyseventeen_child' ),
				'Sales: Merchandise'                => __( 'Sales: Merchandise', 'twentyseventeen_child' ),
				'Sales: Tickets'                    => __( 'Sales: Tickets', 'twentyseventeen_child' ),
				'Sales: Auction'                    => __( 'Sales: Auction', 'twentyseventeen_child' ),
				'Sales: Other'                      => __( 'Sales: Other', 'twentyseventeen_child' ),
			),
		)
	);
	$post_settings->add_field(
		array(
			'name' => 'Amount',
			'id'   => '_amount',
			'type' => 'text',
			'desc' => '',
		)
	);
	// primary campaign source?
	$post_settings->add_field(
		array(
			'name'             => 'Payment Type',
			'desc'             => '',
			'id'               => '_payment_type',
			'type'             => 'select',
			'show_option_none' => true,
			'options'          => array(
				'Stripe'                  => __( 'Stripe', 'twentyseventeen_child' ),
				'Acceptiva'               => __( 'Acceptiva', 'twentyseventeen_child' ),
				'Givalike'                => __( 'Givalike', 'twentyseventeen_child' ),
				'Check'                   => __( 'Check', 'twentyseventeen_child' ),
				'Cash'                    => __( 'Cash', 'twentyseventeen_child' ),
				'ACH'                     => __( 'ACH', 'twentyseventeen_child' ),
				'Goods'                   => __( 'Goods', 'twentyseventeen_child' ),
				'Razoo'                   => __( 'Razoo', 'twentyseventeen_child' ),
				'Services'                => __( 'Services', 'twentyseventeen_child' ),
				'Stocks'                  => __( 'Stocks', 'twentyseventeen_child' ),
				'Paypal'                  => __( 'Paypal', 'twentyseventeen_child' ),
				'BidPal'                  => __( 'BidPal', 'twentyseventeen_child' ),
				'GiveMN.org'              => __( 'GiveMN.org', 'twentyseventeen_child' ),
				'Ticketmaster'            => __( 'Ticketmaster', 'twentyseventeen_child' ),
				'Eventbrite'              => __( 'Eventbrite', 'twentyseventeen_child' ),
				'Cowles Center processor' => __( 'Cowles Center processor', 'twentyseventeen_child' ),
			),
		)
	);

	$post_settings->add_field(
		array(
			'name' => 'First Name',
			'desc' => '',
			'id'   => '_first_name',
			'type' => 'text',
		)
	);

	$post_settings->add_field(
		array(
			'name' => 'Last Name',
			'desc' => '',
			'id'   => '_last_name',
			'type' => 'text',
		)
	);

	$post_settings->add_field(
		array(
			'name' => 'Email Address',
			'desc' => '',
			'id'   => '_email_address',
			'type' => 'text',
		)
	);

	$app_settings = new_cmb2_box(
		array(
			'id'           => 'App',
			'title'        => __( 'App Settings', 'twentyseventeen_child' ),
			'object_types' => array( 'app' ), // Post type
			'context'      => 'normal',
			'priority'     => 'low',
			'show_names'   => true, // Show field names on the left
			// 'cmb_styles' => false, // false to disable the CMB stylesheet
			// 'closed'     => true, // Keep the metabox closed by default
		)
	);
	$app_settings->add_field(
		array(
			'name' => 'First Name 2',
			'desc' => '',
			'id'   => '_first_name2',
			'type' => 'text',
		)
	);

	$app_settings->add_field(
		array(
			'name' => 'Last Name 2',
			'desc' => '',
			'id'   => '_last_name2',
			'type' => 'text',
		)
	);

	$app_settings->add_field(
		array(
			'name' => 'Lead ID',
			'desc' => '',
			'id'   => '_lead_id',
			'type' => 'text',
		)
	);

	$app_settings->add_field(
		array(
			'name' => 'Company 2',
			'desc' => '',
			'id'   => '_company2',
			'type' => 'text',
		)
	);

	$donation_settings = new_cmb2_box(
		array(
			'id'           => 'Donation',
			'title'        => __( 'Donation Settings', 'twentyseventeen_child' ),
			'object_types' => array( 'donation' ), // Post type
			'context'      => 'normal',
			'priority'     => 'low',
			'show_names'   => true, // Show field names on the left
			// 'cmb_styles' => false, // false to disable the CMB stylesheet
			// 'closed'     => true, // Keep the metabox closed by default
		)
	);
	$donation_settings->add_field(
		array(
			'name' => 'Close Date',
			'id'   => '_close_date',
			'type' => 'text_date',
			'desc' => '',
		)
	);
	$donation_settings->add_field(
		array(
			'name'             => 'Stage',
			'desc'             => '',
			'id'               => '_stage',
			'type'             => 'select',
			'show_option_none' => true,
			'options'          => array(
				'Prospecting' => __( 'Prospecting', 'twentyseventeen_child' ),
				'Cultivating' => __( 'Cultivating', 'twentyseventeen_child' ),
				'Solicited'   => __( 'Solicited', 'twentyseventeen_child' ),
				'Pledged'     => __( 'Pledged', 'twentyseventeen_child' ),
				'Closed Won'  => __( 'Closed Won', 'twentyseventeen_child' ),
				'Closed Lost' => __( 'Closed Lost', 'twentyseventeen_child' ),
				'Refunded'    => __( 'Refunded', 'twentyseventeen_child' ),
			),
		)
	);
	$donation_settings->add_field(
		array(
			'name'             => 'Type',
			'desc'             => '',
			'id'               => '_type',
			'type'             => 'select',
			'show_option_none' => false,
			'default'          => 'Donation',
			'options'          => array(
				'Donation'    => __( 'Donation', 'twentyseventeen_child' ),
				'Grant'       => __( 'Grant', 'twentyseventeen_child' ),
				'Sponsorship' => __( 'Sponsorship', 'twentyseventeen_child' ),
				'Sales'       => __( 'Sales', 'twentyseventeen_child' ),
			),
		)
	);
	$donation_settings->add_field(
		array(
			'name'             => 'Subtype',
			'desc'             => '',
			'id'               => '_subtype',
			'type'             => 'select',
			'show_option_none' => true,
			'options'          => array(
				'Donation: Individual'              => __( 'Donation: Individual', 'twentyseventeen_child' ),
				'Donation: Organization'            => __( 'Donation: Organization', 'twentyseventeen_child' ),
				'Donation: In-kind'                 => __( 'Donation: In-kind', 'twentyseventeen_child' ),
				'Grant: Grant'                      => __( 'Grant: Grant', 'twentyseventeen_child' ),
				'Sponsorship: Event (individual)'   => __( 'Sponsorship: Event (individual)', 'twentyseventeen_child' ),
				'Sponsorship: Event (organization)' => __( 'Sponsorship: Event (organization)', 'twentyseventeen_child' ),
				'Sales: Advertising'                => __( 'Sales: Advertising', 'twentyseventeen_child' ),
				'Sales: Merchandise'                => __( 'Sales: Merchandise', 'twentyseventeen_child' ),
				'Sales: Tickets'                    => __( 'Sales: Tickets', 'twentyseventeen_child' ),
				'Sales: Auction'                    => __( 'Sales: Auction', 'twentyseventeen_child' ),
				'Sales: Other'                      => __( 'Sales: Other', 'twentyseventeen_child' ),
			),
		)
	);
	$donation_settings->add_field(
		array(
			'name' => 'Amount',
			'id'   => '_amount',
			'type' => 'text',
			'desc' => '',
		)
	);
	// primary campaign source?
	$donation_settings->add_field(
		array(
			'name'             => 'Payment Type',
			'desc'             => '',
			'id'               => '_payment_type',
			'type'             => 'select',
			'show_option_none' => true,
			'options'          => array(
				'Stripe'                  => __( 'Stripe', 'twentyseventeen_child' ),
				'Acceptiva'               => __( 'Acceptiva', 'twentyseventeen_child' ),
				'Givalike'                => __( 'Givalike', 'twentyseventeen_child' ),
				'Check'                   => __( 'Check', 'twentyseventeen_child' ),
				'Cash'                    => __( 'Cash', 'twentyseventeen_child' ),
				'ACH'                     => __( 'ACH', 'twentyseventeen_child' ),
				'Goods'                   => __( 'Goods', 'twentyseventeen_child' ),
				'Razoo'                   => __( 'Razoo', 'twentyseventeen_child' ),
				'Services'                => __( 'Services', 'twentyseventeen_child' ),
				'Stocks'                  => __( 'Stocks', 'twentyseventeen_child' ),
				'Paypal'                  => __( 'Paypal', 'twentyseventeen_child' ),
				'BidPal'                  => __( 'BidPal', 'twentyseventeen_child' ),
				'GiveMN.org'              => __( 'GiveMN.org', 'twentyseventeen_child' ),
				'Ticketmaster'            => __( 'Ticketmaster', 'twentyseventeen_child' ),
				'Eventbrite'              => __( 'Eventbrite', 'twentyseventeen_child' ),
				'Cowles Center processor' => __( 'Cowles Center processor', 'twentyseventeen_child' ),
			),
		)
	);

	$donation_settings->add_field(
		array(
			'name' => 'First Name',
			'desc' => '',
			'id'   => '_first_name',
			'type' => 'text',
		)
	);

	$donation_settings->add_field(
		array(
			'name' => 'Last Name',
			'desc' => '',
			'id'   => '_last_name',
			'type' => 'text',
		)
	);

	$donation_settings->add_field(
		array(
			'name' => 'Email Address',
			'desc' => '',
			'id'   => '_email_address',
			'type' => 'text',
		)
	);

}
add_filter( 'object_sync_for_salesforce_pull_params_modify', 'change_pull_params', 10, 6 );
function change_pull_params( $params, $mapping, $object, $sf_sync_trigger, $use_soap, $is_new ) {
	$params['post_status'] = array( // wordpress field name
		'value'         => 'publish',
		'method_modify' => 'wp_update_post',
		'method_read'   => 'get_posts',
	);
	return $params;
}
