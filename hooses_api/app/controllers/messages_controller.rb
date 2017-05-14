class MessagesController < ApplicationController

  ##  A LIST OF ALL MESSAGES ASSOCIATED WITH A TOPIC IS GIVEN THROUGH THE TOPICS SHOW ROUTE. MESSAGES CONTROLLER ONLY DEALS WITH CREATION, UPDATING AND DELETING OF INDIVIDUAL MESSAGES

  def create
    message = Message.create(message_params)
    render json: message

  end

  def update
    message = Message.find(params[:id])
    message.update_attributes(message_params)
    render json: message
  end

  def message_params
    params.require(:message).permit([:user_id, :topic_id, :content])
  end
end