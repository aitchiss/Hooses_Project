class ApplicationController < ActionController::API

  # protect_from_forgery with: :null_session
  # skip_before_filter :verify_authenticity_token
  respond_to :json, :html

end
