class TopicsController < ApplicationController

  def create
    
    topic = Topic.create({
      user_id: params[:user_id],
      house_id: params[:house_id],
      title: params[:title],
      ## maybe we want to mark status as 'open' on default?
      status: params[:status]
      })

    render json: topic
    
  end

  def update
    topic = Topic.find(params[:id])
    topic.update_attributes(topic_params)
    render json: topic

  end


  def topic_params
    params.require(:topic).permit([:title, :status])
  end

end