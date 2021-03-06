class TopicsController < ApplicationController

  ## A LIST OF ALL TOPICS ASSOCIATED WITH A HOUSE IS GIVEN THROUGH THE HOUSE ROUTE, THE TOPICS ROUTE GIVES A TOPIC, PLUS ALL THE MESSAGES RELATED TO IT

def index
topics = Topic.where({
  house_id: params[:house_id]
  })
  render json: topics
end



  def show
    topic = Topic.find(params[:id])

    render json: topic.as_json({
      include: {
        messages: {
          only: [:id, :user_id, :content, :created_at],
          include: {
            user: {
             include: {
              profiles: {
              }
            }
          }
        }
      }
    }
    })

  end

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

  def destroy
    topic = Topic.find(params[:id])
    topic.destroy!

    topics = Topic.where({
      house_id: params[:house_id]
      })
      render json: topics
  end


  def topic_params
    params.require(:topic).permit([:title, :status])
  end

end