class KitchenTablePostsController < ApplicationController

  def show

    posts = KitchenTablePost.where({:house_id => params[:id]})

    render json: posts
  end
end