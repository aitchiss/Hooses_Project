class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from '3'
    p 'someone connected!!!!!!!!!'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak
    ActionCable.server.broadcast('3', message: render_message(data['message']))
  end

  # private

  # def render_message(message)
  #   ApplicationController.render(partial: 'messages/message', locals: { message: message })
  # end
end
