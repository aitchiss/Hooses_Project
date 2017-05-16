class KitchenTablePostsController < ApplicationController

  def create
    
    KitchenTablePost.create(post_params)

    all_posts = KitchenTablePost.where({:house_id => params[:house_id]})
    render json: all_posts.as_json({
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

  def post_params
    params.require(:kitchen_table_post).permit([:user_id, :house_id, :content])
  end

  

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