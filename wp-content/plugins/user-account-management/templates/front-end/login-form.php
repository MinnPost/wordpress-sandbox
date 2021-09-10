<form id="login-form" method="post" action="<?php echo $attributes['action']; ?>" class="m-form m-form-standalone m-form-user m-form-login">

	<?php if ( isset( $attributes['redirect'] ) ) : ?>
	<input type="hidden" name="redirect_to" value="<?php echo $attributes['redirect']; ?>">
	<?php endif; ?>

	<?php if ( ! empty( $attributes['instructions'] ) ) : ?>
		<?php echo $attributes['instructions']; ?>
	<?php endif; ?>

	<?php if ( ! empty( $attributes['logged_out'] ) ) : ?>
		<div class="m-form-message m-form-message-info">
			<p class="login-info">
				<?php _e( 'You have logged out. You can log in again if necessary.', 'user-account-management' ); ?>
			</p>
		</div>
	<?php endif; ?>

	<?php if ( ! empty( $attributes['message_info'] ) ) : ?>
		<div class="m-form-message m-form-message-info">
			<p class="message-info">
				<?php echo $attributes['message_info']; ?>
			</p>
		</div>
	<?php endif; ?>

	<?php if ( ! empty( $attributes['lost_password_sent'] ) ) : ?>
		<div class="m-form-message m-form-message-info">
			<p>
				<?php
					echo sprintf(
						esc_html__( 'Check your email for a link to reset your password. You will only be able to use this link one time (you can ', 'user-account-management' ) . '<a href="%1$s">%2$s</a>' . esc_html__( ' if you need to).', 'user-account-management' ),
						wp_lostpassword_url(),
						'request another one'
					);
				?>
			</p>
		</div>
	<?php endif; ?>

	<?php if ( count( $attributes['errors'] ) > 0 ) : ?>
		<div class="m-form-message m-form-message-error">
			<?php if ( count( $attributes['errors'] ) > 1 ) : ?>
				<ul>
					<?php foreach ( $attributes['errors'] as $error ) : ?>
						<li><?php echo $error; ?></li>
					<?php endforeach; ?>
				</ul>
			<?php else : ?>
				<p><?php echo $attributes['errors'][0]; ?></p>
			<?php endif; ?>
		</div>
	<?php endif; ?>

	<fieldset>
		<div class="m-form-item m-form-email m-form-login-email">
			<label for="user_login"><?php _e( 'Email Address:', 'user-account-management' ); ?> <span class="a-form-item-required" title="<?php _e( 'This field is required.', 'user-account-management' ); ?>">*</span></label>
			<input type="email" name="log" id="user_login" required<?php if ( isset( $attributes['form_data']['user_email'] ) ) { echo ' value="' . sanitize_email( $attributes['form_data']['user_email'] ) . '"'; } ?>>
		</div>
		<div class="m-form-item m-form-password m-form-login-password">
			<label for="user_pass"><?php _e( 'Password:', 'user-account-management' ); ?> <span class="a-form-item-required" title="<?php _e( 'This field is required.', 'user-account-management' ); ?>">*</span></label>
			<input type="password" name="pwd" id="user_pass" class="password-show password-help password-help-not-shown" required>
		</div>
		<div class="m-form-actions">
			<input type="submit" value="<?php _e( 'Log In', 'user-account-management' ); ?>" class="btn btn-submit btn-submit-login">
		</div>
		<?php if ( ! empty( $attributes['password_help'] ) ) : ?>
			<?php echo $attributes['password_help']; ?>
		<?php endif; ?>
	</fieldset>
</form>
