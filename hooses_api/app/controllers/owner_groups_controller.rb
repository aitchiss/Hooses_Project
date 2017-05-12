class OwnerGroupsController < ApplicationController

  def show_houses

    houses = OwnerGroup.where({:user_id => params[:id]})

    render json: houses.as_json({

        include: {

          house:{
            only: [:address, :post_code]
          }
        }
      })
  end

  def show_users

    users = OwnerGroup.where({:house_id => params[:id]})

    render json: users.as_json({

          except: [:created_at, :updated_at],

          include: {

            profiles: {
              only:[:first_name, :last_name, :address, :image]
            }
          }
          })

  end



end
