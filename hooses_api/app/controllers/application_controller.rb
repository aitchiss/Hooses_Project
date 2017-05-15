class ApplicationController < ActionController::Base

  #before_action :authenticate_user!

  # protect_from_forgery with: :null_session
  #skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  respond_to :json

 # respond_to :json, :html
  #protect_from_forgery with: :null_session
  #skip_before_action :verify_authenticity_token
end
