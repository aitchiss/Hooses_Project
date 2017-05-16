class KitchenTablePostsController < ApplicationController

  def show

    posts = KitchenTablePost.where({:house_id => params[:id]})

    render json: posts.as_json({
      include: {
        user: {
          except: [:created_at, :updated_at],
          include: {
            profiles: {
              except: [:created_at, :updated_at, :user_id, :id]
            }
          }
        }
      }
      })
  end
end