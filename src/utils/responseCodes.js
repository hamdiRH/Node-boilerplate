export const ResponseCodes = {
  /* /////////////////////AUTH///////////////////////////// */
  user_created: 'user_created',
  no_user_found: 'no_user_found',
  wrong_password: 'wrong_password',
  email_unverified: 'email_unverified',
  wrong_credential: 'wrong_credential',
  token_created: 'token_created',
  email_confirmed: 'email_confirmed',
  email_sent: 'email_sent',
  wrong_token: 'wrong_token',
  invalid_code: 'invalid_code',
  password_updated: 'password_updated',

  /* /////////////////////USER///////////////////////////// */
  user_updated: 'user_updated',
  availabilities_updated: 'availabilities_updated',
  fcm_token_saved: 'fcm_token_saved',
  notification_opened: 'notification_opened',

  /* /////////////////////FILE///////////////////////////// */
  upload_error: 'upload_error',
  file_uploaded: 'file_uploaded',
  file_too_big: 'file_too_big',
  file_not_found: 'file_not_found',
  file_validated: 'file_validated',
  file_refused: 'file_refused',

  /* /////////////////////GENERAL///////////////////////////// */
  server_error: 'server_error',
  validation_error: 'validation_error',
  data: 'data',
  unauthorized: 'unauthorized',
  wrong_id: 'wrong_id',
  invalid_jwt_token: 'invalid_jwt_token',
}
